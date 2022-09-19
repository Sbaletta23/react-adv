import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
    Navigate
} from 'react-router-dom';
import { LazyLoad1, LazyLoad2, LazyLoad3 } from '../lazyload/pages';
import logo from '../logo.svg';



export const Navigation = () => {
return (
    <>
    <Router>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="logo" />
                <ul>
                    <li>
                        <NavLink to="/lazy1" className={ ({isActive}) => isActive ? 'active' : '' } end > Lazy1</NavLink>
                    </li>

                    <li>
                        <NavLink to="/lazy2" className={ ({isActive}) => isActive ? 'active' : '' } end >Lazy2</NavLink>
                    </li>

                    <li>
                        <NavLink to="/lazy3" className={ ({isActive}) => isActive ? 'active' : '' } end >Lazy3</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path='lazy1' element={ <LazyLoad1/> } />
                <Route path='lazy2' element={ <LazyLoad2/> } />
                <Route path='lazy3' element={ <LazyLoad3/> } />

                <Route path='/*' element={ <Navigate to='/lazy1' replace/> } />
            </Routes>
        </div>
        </Router>
    </>
);
}