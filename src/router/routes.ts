import { lazy, LazyExoticComponent } from 'react';
// import { LazyLoad1, LazyLoad2, LazyLoad3 } from '../lazyload/pages';


type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const Lazy1 = lazy(/* wbpackChunkName: LazyPage 1*/ () => import('../lazyload/pages/LazyLoad1'));
const Lazy2 = lazy(/* wbpackChunkName: LazyPage 2*/ () => import('../lazyload/pages/LazyLoad2'));
const Lazy3 = lazy(/* wbpackChunkName: LazyPage 3*/ () => import('../lazyload/pages/LazyLoad3'));


export const routes: Route[] = [
    {
        to: 'lazy1',
        path: 'lazy1',
        Component: Lazy1,
        name: 'Lazy-1'
    },
    {
        to: 'lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'Lazy-2'
    },
    {
        to: 'lazy3',
        path: 'lazy3',
        Component: Lazy3,
        name: 'Lazy-3'
    },
];