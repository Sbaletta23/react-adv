import { Form, Formik } from 'formik';
import { SelectOption, TextInput } from '../components';
import formJson from '../data/custom-form.json';
import *  as Yup from 'yup';


// 
const initialValues: {[key: string]: any } = {};
const requiredFields: {[key: string]: any } = {};

for ( const input of formJson) {
    initialValues[input.name] = input.value;

    if (!input.validations) continue;

    let schema = Yup.string();

    for ( const rule of input.validations){

        if(rule.type === 'required'){
            schema = schema.required('Este campo es obligatorio')
        }

        if ( rule.type === 'minLength' ) {
            schema = schema.min( (rule as any).value || 2, `Mínimo de ${ (rule as any).value || 2 } caracteres`);
        }

        if ( rule.type === 'email' ) {
            schema = schema.email( `Revise el formato del email`);
        }
    }
    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields});

export const DinamicForm = () => {
  return (
    <div>
        <h1>DinamicForm</h1>

        <Formik
            initialValues={initialValues}
            onSubmit={ values => {
                console.log(values);       
            }}
            validationSchema={validationSchema}
        >
            {
                (formik) => (
                    <Form noValidate>
                    {
                        formJson.map( ({name, label, type, placeholder, options }) => {
                        
                            if( type === 'input' || type === 'password' || type === 'email'){
                                return  <TextInput
                                            key={name}
                                            type={(type as any)}
                                            name={name}
                                            label={label}
                                            placeholder={placeholder}  
                                />
                            }   else if (type === 'select'){
                                return( 
                                        <SelectOption
                                            key={name}
                                            name={name}
                                            label={label}

                                        >
                                            <option value="">Seleccionar Opcion</option>
                                            {
                                                options?.map( ({id, label}) =>(
                                                    <option
                                                        key={id}
                                                        value={id}
                                                    >{label}</option>
                                                    ))
                                            }
                                        </SelectOption>
                                    )
                            }

                        
                        })
                        }
                        <button type='submit'>Submit</button>
                    </Form>
                )
            }
        </Formik>
    </div>
  )
}
