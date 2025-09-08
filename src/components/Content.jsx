import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart, emptyCart } from '../features/cart/cartSlice';
import { useGetProductsQuery } from '../features/products/productApi';

const Content = () => {
    const dispatch = useDispatch();
    const { data: products, error, isLoading } = useGetProductsQuery();

    if (isLoading) return <p>Loading products...</p>;
    if (error) return <p>Error fetching products</p>;

    return (
        <>
            <div className="hero-section">
                <div className="hero-msg">
                    <p>You are on nextcart.com. You can also shop on NextCart India for millions of products with fast local delivery.
                        <a href="https://www.amazon.in/">Click here to go to nextcart.in</a>
                    </p>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2px' }}>
                <button
                    style={{ backgroundColor: '#9878', color: 'darkblue' }}
                    onClick={() => dispatch(emptyCart())}
                >
                    Empty Cart
                </button>
            </div>
            <div className="shop-section">
                {products?.map((item) => (
                    <div className="box" key={item.id}>
                        <div className="box-content">
                            <img src={item.photo} className="box-img" alt="Product" />
                            <div>Name : {item.name} </div>
                            <div>Color : {item.color} </div>
                            <div>Price : {item.price} </div>
                            <div>Category : {item.category} </div>
                            <div>Brand : {item.brand} </div>
                            <div>
                                <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
                                <span> </span>
                                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Content;