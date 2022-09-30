import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
} from 'react-router-dom';
import logo from '../logo.svg';
import { Navigate } from 'react-router-dom';
import { RegisterFormik,
         FormikAbstrac,
         FormikComponents,
         FormikPage,
         FormikYupPage,
         RegisterPage, 
         DinamicForm} from '../forms/pages';




export const Navigation = () => {
return (
    <>
    <Router>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="logo" />
                <ul>
                    <li>
                        <NavLink to="/register" className={ ({isActive}) => isActive ? 'active' : '' } end >Crear usuario</NavLink>
                    </li>
                    <li>
                        <NavLink to="/registerformik" className={ ({isActive}) => isActive ? 'active' : '' } end >Crear usuario - Formik</NavLink>
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
                    <li>
                        <NavLink to="/dinamicform" className={ ({isActive}) => isActive ? 'active' : '' } end >Dinamic Form</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path='dinamicform' element={ <DinamicForm/> } />
                <Route path='register' element={ <RegisterPage/> } />
                <Route path='formik' element={ <FormikPage/> } />
                <Route path='formikyup' element={ <FormikYupPage/> } />
                <Route path='formikcomp' element={ <FormikComponents/> } />
                <Route path='formikabstrac' element={ <FormikAbstrac/> } />
                <Route path='registerformik' element={ <RegisterFormik/> } />

                <Route path='/*' element={ <Navigate to='/register' replace/> } />
            </Routes>
        </div>
        </Router>
    </>
);
}