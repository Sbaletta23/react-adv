import {  ProductButtons, ProductCard, ProductImage, ProductTitle} from '../components';


const data = {
    id: '1',
    title: 'Coffe 1 - Desde Props',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => (
    <div>
        <h1>ShoppingPage</h1>
        <hr />
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>

            {/* Compound Component Pattern - HOCs */}
            <ProductCard product={ data }>
                <ProductCard.Image />
                <ProductCard.Title/>
                <ProductCard.Buttons />
            </ProductCard>

            <ProductCard product={ data }>
                <ProductImage/>
                <ProductTitle title='Hello World' />
                <ProductButtons/>
            </ProductCard>
        </div>
    </div>
)

