import *  as Yup from 'yup';
import {  Formik, Field, ErrorMessage, Form } from 'formik';
import '../styles/styles.css';





export const FormikComponents = () => {



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
                            {/* First Name */}
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text" placeholder="First Name" />
                            <ErrorMessage name="firstName" component="span"/>
                            
                
                            {/* Last Name */}
                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text" placeholder="First Last Name"/>
                            <ErrorMessage name="lastName" component="span"/>
                
                            
                
                            {/* Email Address */}
                            <label htmlFor="email">Email Address</label>
                            <Field name="email" type="text" placeholder="Email Address"/>
                            <ErrorMessage name="email" component="span"/>

                            {/* Select */}
                            <label htmlFor="jobType">Job Type</label>
                            <Field name="jobType" as="select">
                                <option value="options">Select Option</option>
                                <option value="front-developer">Front End</option>
                                <option value="back-developer">Back End</option>
                                <option value="data-developer">Data Science</option>
                                <option value="desing-developer">Desing Developer</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span"/>

                            
                            
                            {/* Checkbox */}
                            <label>
                                <Field name="terms" type="checkbox"/>
                                Terminos y Condiciones
                            </label>
                            <ErrorMessage name="terms" component="span"/>
                
                            <button type='submit'> Submit</button>
                        </Form>
                    )
                }            
        </Formik>
    </div>
  )
}
