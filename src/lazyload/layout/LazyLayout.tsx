import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import LazyLoad1 from '../pages/LazyLoad1';
import LazyLoad2 from "../pages/LazyLoad2";
import LazyLoad3 from "../pages/LazyLoad3";



const LazyLayout = () => {
    return (
        <>
        <div>
            <h1>Lazy Layout </h1>
            <ul>
                <li>
                    <NavLink to="lazy1"> Lazy 1</NavLink>
                </li>
                <li>
                    <NavLink to="lazy2"> Lazy 2</NavLink>
                </li>
                <li>
                    <NavLink to="lazy3"> Lazy 3</NavLink>
                </li>
            </ul>

            <Routes>
                <Route path="lazy1" element={ <LazyLoad1/> } />
                <Route path="lazy2" element={ <LazyLoad2/> } />
                <Route path="lazy3" element={ <LazyLoad3/> } />

                <Route path="*" element={ <Navigate replace to="lazy1"/> } />
            </Routes>
        </div>
        </>
    )
}

export default LazyLayout;