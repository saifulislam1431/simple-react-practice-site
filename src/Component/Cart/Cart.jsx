import React from 'react';

const Cart = ({singleProduct}) => {
    // console.log(singleProduct);
    let totalPrice = 0;
    for(const product of singleProduct){
        totalPrice = totalPrice + product.price
    }


    return (
        <div>
            <h1>Total price: {totalPrice}</h1>
        </div>
    );
};

export default Cart;