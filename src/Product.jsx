import "./Product.css";

function Product({title, price, features}) {
    const list = features.map((feature) => <li>{feature}</li>)
    let styles = {backgroundColor : "blue"};
    return (
        <div className="Product">
            <h3 style={styles}>{title}</h3>
            <h5>Price :{price} </h5>
            {/* <p>Features :{features}</p> */}
            {price > 30000 && <p>Discount of 5%</p>}
        </div>
    )
}

export default Product;