import React from "react";
import './Product.css'
import Container from "../Component/Container";

function Product( {item}) {
    return(
        <>
            <div className="main">
                <img src={`product-img/${item.product}/${item.main}`}/>
            </div>
            <div className="text-box">
                <h2>{item.product}</h2>
                <div>
                    <p>Designed By : {item.designer}</p>
                    <span> | </span>
                    <p>produced by : {item.producer}</p>
                </div>
                <p>{item.details}</p>
            </div>
            <div className="sub-img-box">
                <div>
                    {item.sub.map((image, id)=>{
                        return <img key={id} src={`product-img/${item.product}/${image}`}/>
                    })}
                </div>
            </div>
        </>
    )
}

export default Product