import { useState, useEffect} from 'react';
import { Product, onChangeArgs } from '../interface/interfaces';



export interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}



// Custom Hook - Maneja State de Product Card (Contador)
export const useProduct = ( { onChange, product, value = 0 }: useProductArgs ) => {

    const [count, setCount] = useState(value);


    const handleClick = ( value: number ) => {
      
        const newValue= Math.max( count + value, 0)
        setCount( newValue )

        onChange && onChange({count: newValue, product});
    }


    useEffect(() => {
      setCount(value)
    }, [ value ]);
    

    return {
        count,
        handleClick
    }
}
