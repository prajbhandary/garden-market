import React from "react";
import "./style.css";

function Products(props) {

    return (

        <div class="card">
            <div class="card-header">
                <h5 className="productHeader">WHAT WE HAVE TO OFFER</h5>
            </div>
            <div class="card-body">
                <h5 className="products">{props.products}</h5>
            </div>
        </div>
    )
}

export default Products;