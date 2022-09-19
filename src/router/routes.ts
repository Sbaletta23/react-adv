import { lazy, LazyExoticComponent } from 'react';
// import { LazyLoad1, LazyLoad2, LazyLoad3 } from '../lazyload/pages';
import { NoLazyLoad } from '../lazyload/pages/NoLazyLoad';
import LazyLayout from '../lazyload/layout/LazyLayout';


type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

//Componentes exportados por defectos 

const Lazy = lazy(/* wbpackChunkName: LazyPage 1*/ () => import('../lazyload/layout/LazyLayout'));
// const Lazy2 = lazy(/* wbpackChunkName: LazyPage 2*/ () => import('../lazyload/pages/LazyLoad2'));
// const Lazy3 = lazy(/* wbpackChunkName: LazyPage 3*/ () => import('../lazyload/pages/LazyLoad3'));


export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'LazyLayout - Dash'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazyLoad,
        name: 'No Lazy'
    },
];