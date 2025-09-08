import React from 'react'
import { addToCart, emptyCart, removeToCart } from '../redux/action';
import { useDispatch } from 'react-redux'
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
// import { cartData } from '../redux/reducer';
// import './App.css';
const Content = () => {
    const dispatch = useDispatch();
    let data = useSelector((state) => state.productData);
    // console.warn("data in main component", data);

    useEffect(() => {
        dispatch(productList())
    }, []);
    return (
        <>
            <div className="hero-section">
                <div className="hero-msg">
                    <p>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. <a href='https://www.amazon.in/'>Click here to go to amazon.in</a></p>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2px',  }}>
                <button style={{ backgroundColor: '#9878', color:'darkblue'}} onClick={() => dispatch(emptyCart())}>Empty Cart</button>
            </div>
            <div className='shop-section'>
                {
                    data.map((item) => 
                        <div className="box" key={item.id}>
                            <div className="box-content">
                                <img src={item.photo} className="box-img" alt="Image of Products" />
                                <div>Name : {item.name} </div>
                                <div>Color : {item.color} </div>
                                <div>Price : {item.price} </div>
                                <div>Category : {item.category} </div>
                                <div>Brand : {item.brand} </div>
                                <div>
                                    <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
                                    <span> </span>
                                    <button onClick={() => dispatch(removeToCart(item.id))}>Remove from Cart</button>
                                </div>
                                </div>
                        </div>)
                }
            </div>
        </>
    )
}

export default Content;