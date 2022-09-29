import *  as Yup from 'yup';
import {  useFormik } from 'formik';
import '../styles/styles.css';





export const FormikYupPage = () => {

    const {handleSubmit, errors, touched, getFieldProps} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: Yup.object({
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
                        .required('Campo obligatorio'),
        })
    });



  return (
    <div>
        <h1>Formik Yup</h1>

        <form noValidate onSubmit={handleSubmit}>
            {/* First Name */}
            <label htmlFor="firstName">First Name</label>
            <input 
                type="text"
                {...getFieldProps('firstName')}
            />
            { touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
            

            {/* Last Name */}
            <label htmlFor="lastName">Last Name</label>
            <input 
                type="text"
                {...getFieldProps('lastName')}
            />
            { touched.lastName && errors.firstName && <span>{errors.lastName}</span>}

            

            {/* Email Address */}
            <label htmlFor="firstName">Email Address</label>
            <input 
                type="email"
                {...getFieldProps('email')}
            />
            { touched.email && errors.firstName && <span>{errors.email}</span>}



            <button 
                type='submit'>
                Submit
            </button>
        </form>

    </div>
  )
}
