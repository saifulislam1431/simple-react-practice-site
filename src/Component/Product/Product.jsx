import React from 'react';

const Product = ({ singleProducts, handlePrice, handleName}) => {
    // console.log(singleProducts);
    const {name,price,picture} = singleProducts;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mb-10">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary" onClick={()=> handleName(name)}>Add to Cart</button>
                        <button className="btn btn-primary" onClick={()=> handlePrice(singleProducts)}>Calculate price</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;