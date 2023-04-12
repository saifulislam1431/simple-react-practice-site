import React from 'react';

const CartName = ({productName}) => {
    console.log(productName);
    return (
        <div className='bg-green-900 p-7 rounded-xl mt-10'>
            <h1 className='text-white text-center font-bold'>Added Product: {productName.length}</h1>
            {
                productName.map(singleName => <h1 className='bg-slate-500 text-white font-semibold my-3 p-3 rounded-lg'>{singleName}</h1>)
            }
        </div>
    );
};

export default CartName;