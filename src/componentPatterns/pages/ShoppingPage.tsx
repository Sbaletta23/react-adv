import { ProductCard } from "../components/ProductCard";


const data = {
    id: '1',
    title: 'Coffe 1 - Desde Props',
    img: './coffee-mug.png'
}


export const ShoppingPage = () => {
    return (
        <div>            
            <h1>ShoppingPage</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={ data }/>
            </div>
        </div>
    )
}

