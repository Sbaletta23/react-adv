import { useState, useEffect, useRef} from 'react';
import { Product, onChangeArgs, InitialValues } from '../interface/interfaces';



export interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}



// Custom Hook - Maneja State de Product Card (Contador)
export const useProduct = ( { onChange, product, value= 0 , initialValues}: useProductArgs ) => {

    const [count, setCount] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false);


    const handleClick = ( value: number ) => {
      
        let newValue= Math.max( count + value, 0 )
        if ( initialValues?.maxCount ) {
            newValue = Math.min( newValue, initialValues.maxCount )
        }

        setCount( newValue )
        onChange && onChange({count: newValue, product});
    }

    const reset = () => {
        setCount(initialValues?.count || value )
    }

    useEffect(() => {
        if( !isMounted.current ) return;
        setCount(value)
    }, [ value ]);

    useEffect(() => {
      isMounted.current = true;
    }, [])
    

    return {
        count,
        reset,
        handleClick,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === count,
        maxCount: initialValues?.maxCount,
    }
}
