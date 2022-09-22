import { useState } from "react";
import { Product } from "../interface/interfaces";




interface ProductInCart extends Product {
    count: number;
}

export const useShoppingCart = () => {

      // Creamos interfaz agregando count - Validamos datos x useState
    const [shoppingCart, setShoppingCart] = useState<{[key: string]: ProductInCart}>({});


    const onProductChange = ({count, product}: {count: number, product: Product}) => {
        
        setShoppingCart( oldShoppingCart => {
    
            if(count === 0) {
                const { [product.id]: toDelete, ...rest} = oldShoppingCart;
                return rest;
            }
            return {
                ...oldShoppingCart,
                [product.id]: {...product, count}
            }
        })     
    }

    return {
        shoppingCart,
        onProductChange
    }
}
