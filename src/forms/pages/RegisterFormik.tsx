import *  as Yup from 'yup';
import { Form, Formik } from 'formik';
import { TextInput } from '../components';

import '../styles/styles.css';


export const RegisterFormik = () => {
  return (
    <div>
        <h1>Crear Usuario - Formik </h1>

        <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
                password2: ''
            }}
            onSubmit={ values => {
                console.log(values);
                
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                                .min(2, 'Minimo dos caracteres')
                                .max(15, 'Maximo 15 caracteres')
                                .required('Campo obligatorio')
                ,
                email: Yup.string()
                            .min(2, 'Minimo dos caracteres')
                            .email('Direccion de email invalido')
                            .required('Campo obligatorio')
                , password: Yup.string()
                            .min(6, 'Minimo seis caracteres')
                            .required('Campo obligatorio')
                , password2: Yup.string()
                            .oneOf([Yup.ref('password')], 'Las contraseña no son iguales')
                            .required('Campo obligatorio')
                })
            }>

                { 
                    ({ handleReset, handleSubmit}) => (
                        <Form>

                            <TextInput 
                                label="Nombre" 
                                name='name'
                                placeholder="Ingresar Nombre"
                            />

                            <TextInput 
                                label="Email" 
                                name='email'
                                type="email"
                                placeholder="Ingresar Direccion de Email"
                            />

                            <TextInput 
                                label="Password" 
                                name='password'
                                type='password'
                                placeholder="Ingresar Contraseña"
                            />

                            <TextInput 
                                label="Repetir Password" 
                                name='password2'
                                type='password'
                                placeholder="Repetir Contraseña"
                            />


                            
                            <button type='submit'>
                                Submit 
                            </button>

                            <button type='reset' onClick={ handleReset }>
                                 Reset
                             </button>
                             
                        </Form>
                    )
                }            
        </Formik>
    </div>
  )
}
