import {  ProductButtons, ProductCard, ProductImage, ProductTitle} from '../components';
import { products } from '../data/product-data';
import '../styles/custom-styles.css';


const product = products[0];

export const ShoppingPage = () => {


    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />
                        <ProductCard 
                            product={ product }
                            key={ product.id }
                            initialValues={{
                                count: 0,
                                maxCount: 10,
                            }}
                            style={{
                                backgroundColor: 'rgb(56, 56, 56)'
                            }}
                            >
                                {({reset, handleClick, counter, isMaxCountReached, maxCount}) => (
                                        <>
                                            <ProductImage className='custom-img'/>
                                            <ProductTitle className="text-bold text-white"/>
                                            <ProductButtons className="custom-buttons"/>

                                            <button onClick={ reset }>Reset</button>

                                            <button onClick={ () => handleClick(-2)}>-2</button>

                                            {
                                                (!isMaxCountReached && <button onClick={ () => handleClick(+2)}>+2</button>)

                                            }

                                            
                                            <span>{counter} - {maxCount}</span>                           
                                        </>
                                    )}
                        </ProductCard>
        </div>
)};


