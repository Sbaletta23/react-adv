import {  ProductButtons, ProductCard, ProductImage, ProductTitle} from '../components';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/product-data';
import '../styles/custom-styles.css';




export const ShoppingPage = () => {

    const {shoppingCart, onProductChange} = useShoppingCart();

    return (
        // Producto principal
        <div>
            <h1>ShoppingPage</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '10px'
            }}>
                {
                    products.map( product => (
                        <ProductCard 
                            product={ product }
                            key={ product.id }
                            style={{
                                backgroundColor: 'rgb(56, 56, 56)'
                            }}
                            onChange={ onProductChange }
                            value={ shoppingCart[product.id]?.count || 0 }
                            >
                            <ProductImage className='custom-img'/>
                            <ProductTitle className="text-bold text-white"/>
                            <ProductButtons className="custom-buttons"/>
                        </ProductCard>
                    ))
                }
            </div>

            {/* Shopping card */}
            <div className="shopping-cart">
                {
                    // Recorremos state - Objet.entries
                    Object.entries( shoppingCart ).map( ([key, product]) => (
                            <ProductCard
                                key={ product.id } 
                                product={ product }
                                style={{
                                        backgroundColor: 'rgb(56, 56, 56)',
                                        width: '100px'}}
                                value={ product.count }
                                onChange={ onProductChange }
                                >
                                <ProductImage className='custom-img'/>
                                <ProductButtons 
                                    className="custom-buttons"
                                />
                                
                            </ProductCard>
                    ))
                }
            </div>
        </div>
)};


