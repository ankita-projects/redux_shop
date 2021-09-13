import React from "react";
import { Link } from "react-router-dom";

const ProductCards = () =>{
    return(
        <div className="card">
            <h1>Name</h1>
            <img src='' alt='type of rock' />
            <p>
            A rock is any naturally occurring solid mass or aggregate of minerals or mineraloid matter.
			</p>
			<Link to={`/products/1}`}>Read More</Link>
        </div>
    )
}
export default ProductCard;