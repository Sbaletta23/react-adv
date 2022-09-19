import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
} from 'react-router-dom';
import logo from '../logo.svg';
import { Navigate } from 'react-router-dom';

export const Navigation = () => {
return (
    <>
    <Router>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="logo" />
                <ul>
                    <li>
                        <NavLink to="/home" className={ ({isActive}) => isActive ? 'active' : '' } end >Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/about" className={ ({isActive}) => isActive ? 'active' : '' } end >About</NavLink>
                    </li>

                    <li>
                        <NavLink to="/users" className={ ({isActive}) => isActive ? 'active' : '' } end >Users</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path='about' element={ <h1>About Page</h1> } />
                <Route path='users' element={ <h1>Users Page</h1> } />
                <Route path='home' element={ <h1>Home Page</h1> } />

                <Route path='/*' element={ <Navigate to='/home' replace/> } />
            </Routes>
        </div>
        </Router>
    </>
);
}