import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
} from 'react-router-dom';
import logo from '../logo.svg';
import { Navigate } from 'react-router-dom';
import { FormikAbstrac, FormikComponents, FormikPage, FormikYupPage, RegisterPage } from '../forms/pages';



export const Navigation = () => {
return (
    <>
    <Router>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="logo" />
                <ul>

                    <li>
                        <NavLink to="/users" className={ ({isActive}) => isActive ? 'active' : '' } end > Usuario </NavLink>
                    </li>
                    <li>
                        <NavLink to="/register" className={ ({isActive}) => isActive ? 'active' : '' } end >Crear usuario</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik" className={ ({isActive}) => isActive ? 'active' : '' } end >Formik - Basic</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formikyup" className={ ({isActive}) => isActive ? 'active' : '' } end >Formik - Yup</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formikcomp" className={ ({isActive}) => isActive ? 'active' : '' } end >Formik - Component</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formikabstrac" className={ ({isActive}) => isActive ? 'active' : '' } end >Formik - Abstrac</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path='users' element={ <h1>Users Page</h1> } />
                <Route path='register' element={ <RegisterPage/> } />
                <Route path='formik' element={ <FormikPage/> } />
                <Route path='formikyup' element={ <FormikYupPage/> } />
                <Route path='formikcomp' element={ <FormikComponents/> } />
                <Route path='formikabstrac' element={ <FormikAbstrac/> } />

                <Route path='/*' element={ <Navigate to='/users' replace/> } />
            </Routes>
        </div>
        </Router>
    </>
);
}