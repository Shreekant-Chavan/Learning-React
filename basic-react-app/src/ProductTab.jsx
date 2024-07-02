import Product from "./Product.jsx"

function ProductTab() {
    let options = ["Hi-Tech", "Fast", "Durable"];
    return (
    <>
    <Product title="Phone" price={159999} features={options}/>
    <Product title="Laptop"price={199999} features={options}/>
    <Product title="Pen" price={20} features={options}/>
    </>
    )
}

export default ProductTab;