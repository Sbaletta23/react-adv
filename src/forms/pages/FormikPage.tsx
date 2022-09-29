import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css';


interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikPage = () => {

    const validate = ( {firstName, lastName, email}: FormValues ) => {

        const errors: FormikErrors<FormValues> = {};

        if (!firstName.trim()){
            errors.firstName = 'Required'
        } else if( firstName.length > 15){
            errors.firstName = 'Must be 15 characters or less'
        }

        if (!lastName.trim()){
            errors.lastName = 'Required'
        } else if( lastName.length >= 10){
            errors.lastName = 'Must be 10 characters or less'
        }

        if (!email.trim()) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
          }

        return errors;
    }




    const {handleChange, values, handleSubmit, errors, touched, handleBlur} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log(values);
            
        },
        validate
    });



  return (
    <div>
        <h1>Formik Basic Tutorial</h1>

        <form noValidate onSubmit={handleSubmit}>
            {/* First Name */}
            <label htmlFor="firstName">First Name</label>
            <input 
                type="text"
                name="firstName"
                onChange={ handleChange}
                onBlur={ handleBlur }
                value={ values.firstName}
            />

            { touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
            

            {/* Last Name */}
            <label htmlFor="lastName">Last Name</label>
            <input 
                type="text"
                name="lastName"
                onChange={handleChange}
                onBlur={ handleBlur }
                value={ values.lastName}

            />

            { touched.lastName && errors.firstName && <span>{errors.lastName}</span>}

            

            {/* Email Address */}
            <label htmlFor="firstName">Email Address</label>
            <input 
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={ handleBlur }
                value={ values.email}

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
