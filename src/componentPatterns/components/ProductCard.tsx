import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { Product, ProductContextProps, onChangeArgs } from '../interface/interfaces';



// Context API, lo usamos para compartir info entre Padre e Hijos.
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

// Interface
export interface Props {
    product     :   Product;
    children?   : React.ReactElement | React.ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

export const ProductCard = ({ value, children, product, className, style, onChange}: Props) => {
    
    const { count, handleClick } = useProduct({ onChange, product, value });

    return (
        <Provider value={{
            count,
            handleClick,
            product
        }}>
                <div 
                className={ `${styles.productCard} ${ className }`}
                style={ style }
                >

                    {children}
                    
                </div>

        </Provider>
    )
}