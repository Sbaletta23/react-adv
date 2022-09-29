import *  as Yup from 'yup';
import {  Formik, Form } from 'formik';
import { CheckOption, SelectOption, TextInput } from '../components';

import '../styles/styles.css';





export const FormikAbstrac = () => {



  return (
    <div>
        <h1>Formik Components</h1>

        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: ''
            }}
            onSubmit={ values => {
                console.log(values);
                
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                                .max(15, 'Maximo 15 caracteres')
                                .required('Campo obligatorio')
                ,
                lastName: Yup.string()
                                .max(15, 'Maximo 15 caracteres')
                                .required('Campo obligatorio')
                ,
                email: Yup.string()
                            .email('Direccion de email invalido')
                            .required('Campo obligatorio')
                , terms: Yup.boolean()
                            .oneOf([true], 'Debe de aceptar las condiciones')
                , jobType: Yup.string()
                                .required('Campo obligatorio')
                                .notOneOf(['options'], 'Seleccione una opcion')
                })
            }>

                { 
                    formik => (
                        <Form>

                            <TextInput 
                                label="First Name" 
                                name='firstName'
                                placeholder="Ingresar Nombre"
                            />

                            <TextInput 
                                label="Last Name" 
                                name='lastName'
                                placeholder="Ingresar Apellido"
                            />

                            <TextInput 
                                label="Email Address" 
                                name='email'
                                placeholder="Ingresar Direccion de Email"
                                type="email"
                            />


                            {/* Select */}
                            <SelectOption label="Job Type" name="jobType">
                                <option value="options">Seleccionar una opcion</option>
                                <option value="front-developer">Front End</option>
                                <option value="back-developer">Back End</option>
                                <option value="data-developer">Data Science</option>
                                <option value="desing-developer">Desing Developer</option>
                            </SelectOption>

                            

                            {/* Checkbox */}
                            <CheckOption label="Terminos y condiciones" name="terms" />
                
                            <button type='submit'> Submit</button>
                        </Form>
                    )
                }            
        </Formik>
    </div>
  )
}
