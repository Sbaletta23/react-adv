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
    
            const productInCart: ProductInCart = oldShoppingCart[product.id] || {...product, count: 0};
    
            if( Math.max( productInCart.count + count, 0) > 0){
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }
            // Borrar producto
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return rest;
        })     
    }

    return {
        shoppingCart,
        onProductChange
    }
}
