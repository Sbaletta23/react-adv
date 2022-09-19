import { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
    Navigate
} from 'react-router-dom';
import logo from '../logo.svg';
import { routes } from './routes';



export const Navigation = () => {
return (
    <>
    <Suspense fallback={ <span> Loading... </span>} >
        <Router>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="logo" />
                    <ul>
                        
                            {
                                routes.map( ({to, name}) =>(
                                    <li key={ to }>
                                    <NavLink 
                                        to={ to} 
                                        className={ ({isActive}) => isActive ? 'active' : '' } end >{ name }
                                    </NavLink>
                                    </li>
                                ))
                            }
                        
                    </ul>
                </nav>

                <Routes>
                    {
                        routes.map( ({to, path, Component}) => (
                            <Route
                                key={ to }
                                path={ path } 
                                element={ <Component/> }
                            />
                        ))
                    }
                    <Route path='/*' element={ <Navigate to={ routes[0].to } replace/> } />
                    {/* Replace: No podes volver atras */}
                </Routes>
            </div>
            </Router>
        </Suspense>
    </>
);
}