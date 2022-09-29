import { useForm } from '../hooks/useForm';
import '../styles/styles.css';


export const RegisterPage = () => {

    
    const {form, onChange, onSubmit, onReset, isValidEmail} = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    const { name, email, password, password2 } = form;     
    

  return (
    <div>
        <h1>Crear un Nuevo Usuario</h1>
        <form noValidate onSubmit={ onSubmit }>

            <input
                name="name"
                type="text"
                placeholder="Name"
                value={ name }
                onChange={onChange }
                className={ `${ name.trim().length <= 0 && 'has-error' }`}
             />
             { name.trim().length <= 0 && <span>Este campo es obligatorio</span>}
             

             <input
                name="email"
                type="email"
                placeholder="Email"
                value={ email }
                onChange={ onChange }
                className={ `${!isValidEmail(email) && 'has-error'}` }
             />
             { !isValidEmail(email) && <span>Email no valido</span>}

             <input
                name="password"
                type="password"
                placeholder="Password"
                value={ password }
                onChange={ onChange }
             />

             { password.trim().length <= 0 && <span>Este campo es obligatorio</span>}
             { password.trim().length < 6 && password.trim().length > 0 && <span> El password debe contener minimo 7 caracteres </span>}

             <input
                name="password2"
                type="password"
                placeholder="Repeat Password"
                value={ password2 }
                onChange={ onChange }
             />

            { password2.trim().length <= 0 && <span>Este campo es obligatorio</span>}
            { password2.trim().length > 0 && password !== password2 && <span>Las comtraseñas deben ser iguales</span>}

             <button
                type="submit">
                    Crear Usuario
            </button>

            <button
                type="button"
                onClick={ onReset }>
                    Borrar 
            </button>

        </form>
    </div>
  )
}
