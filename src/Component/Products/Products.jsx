import React, { useEffect, useState } from 'react';
import './Products.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import CartName from '../CartName/CartName';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    const [product, setProduct] = useState([]);

    const [productName, setProductName] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handlePrice = (item) => {
        const newProduct = [...product, item];
        setProduct(newProduct);
    }
    // console.log(product);

    const handleName = (name) => {
        if (productName.includes((name))) {
            return toast("Already Added");
        } else {
            const allName = [...productName, name];
            setProductName(allName);
        }
    }


    return (
        <div className='product-container'>
            <div>
                {
                    products.map(singleProducts => <Product
                        key={singleProducts._id}
                        singleProducts={singleProducts}
                        handlePrice={handlePrice}
                        handleName={handleName}
                    ></Product>)
                }
            </div>
            <div>
                {/* <h1>Total product: {product.length}</h1> */}

                <Cart singleProduct={product}></Cart>
                <CartName productName={productName}></CartName>

            </div>
        </div>
    );
};

export default Products;