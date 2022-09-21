import {  ProductButtons, ProductCard, ProductImage, ProductTitle} from '../components';
import '../styles/custom-styles.css'

const data = {
    id: '1',
    title: 'Express Coffe',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => (
    <div>
        <h1>ShoppingPage</h1>
        <hr />
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '10px'
        }}>

            {/* Compound Component Pattern - HOCs */}
            <ProductCard 
                product={ data } 
                className="bg-dark text-white"
            >
                <ProductCard.Image className='custom-img' />
                <ProductCard.Title className="text-bold"/>
                <ProductCard.Buttons className="custom-buttons"/>
            </ProductCard>

            <ProductCard 
                product={ data } 
                className="bg-dark text-white"
            >
                <ProductImage className='custom-img' img={''}/>
                <ProductTitle title='Flat White' className="text-bold"/>
                <ProductButtons className="custom-buttons" />
            </ProductCard>

            <ProductCard 
                product={ data }
                style={{
                    backgroundColor: '#70D1F8'
                }}
                
            >
                <ProductImage style={{
                    boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                }}/>
                <ProductTitle style={{
                    fontWeight: 'bold'
                }}/>
                <ProductButtons style={{
                    display: 'flex',
                    justifyContent: 'end'
                }} />
            </ProductCard>
        </div>
    </div>
)

