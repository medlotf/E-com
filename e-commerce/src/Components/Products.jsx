import React from 'react';
import Product from "./Product";
import "./../styles/products.css"
import { productsItems } from "./../data/productItems"

function Products(props) {
    return (
        <div className="products-container">
            {productsItems.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </div>
    );
}

export default Products;
