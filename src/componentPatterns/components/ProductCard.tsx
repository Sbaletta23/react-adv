import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { ProductCardProps, ProductContextProps } from '../interface/interfaces';



// Context API, lo usamos para compartir info entre Padre e Hijos.
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;



export const ProductCard = ({ children, product }: ProductCardProps) => {
    const { count, handleClick } = useProduct();

    return (
        <Provider value={{
            count,
            handleClick,
            product
        }}>
                <div className={ styles.productCard }>

                    {children}
                    
                </div>

        </Provider>
    )
}