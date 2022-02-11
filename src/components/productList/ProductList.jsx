import "./productList.css";
import Product from '../product/Product';
import {products} from "../../data";

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">
                    Product Title 
                </h1>
                <p className="pl-desc">
                    Description of product will go here
                </p>
                <div className="pl-list">
                    {products.map((item) => (
                        <Product key={item.id} img={item.img} link={item.link} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductList