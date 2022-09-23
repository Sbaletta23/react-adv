import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { Product, ProductContextProps, onChangeArgs, InitialValues, ProductCardHandlers } from '../interface/interfaces';



// Context API, lo usamos para compartir info entre Padre e Hijos.
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

// Interface
export interface Props {
    product     :   Product;
    // children?   : React.ReactElement | React.ReactElement[];
    children: ( args: ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}


export const ProductCard = ({ value, children, product, className, style, onChange, initialValues }: Props) => {
    
    const { count, handleClick, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{
            count,
            handleClick,
            product,
            maxCount
        }}>
                <div 
                className={ `${styles.productCard} ${ className }`}
                style={ style }
                >

                    { children({
                        counter: count,
                        isMaxCountReached,
                        maxCount: initialValues?.maxCount,
                        reset,
                        handleClick,
                        product
                    })}
                    
                </div>

        </Provider>
    )
}