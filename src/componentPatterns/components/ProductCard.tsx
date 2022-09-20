import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

interface Props {
    product: Product
}

interface Product {
    id: string;
    title: string;
    img?: string;
}

export const ProductCard = ( { product }: Props ) => {

    const { count, handleClick } = useProduct();
    
    return (
        <div className={styles.productCard}>
            
            <img className={styles.productImg} src={ product.img ? product.img : noImage } alt="Coffe Mug" />


            <span className={styles.productDescription}>{ product.title}</span>

            <div className={styles.buttonsContainer}>

                <button 
                    className={styles.buttonMinus}
                    onClick={ () => handleClick(-1)} 
                    > - </button>

                <div className={styles.countLabel}>{ count }</div>

                <button 
                    className='styles.buttonAdd' 
                    onClick={ () => handleClick(1) }
                    > + </button>

            </div>
        </div>

    )
}
