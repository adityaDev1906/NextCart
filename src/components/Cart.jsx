import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { incrementQuantity, decrementQuantity, emptyCart } from "../features/cart/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.cart); //Get cart data from Redux
    //console.warn("CartData value",cartData)
    let amount = cartData.length && cartData.reduce((total, item) => total + item.price * item.quantity, 0);
    console.warn(amount)


    return (
        <div>
            <Link to="/" >Go to Products Link</Link>
            <h1>Cart Page</h1>
            <div className="cart-page-container">
                {/* className="cart-page-container" */}
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Product</td>
                            <td>Color</td>
                            <td>Price</td>
                            <td>Brand</td>
                            <td>Category</td>
                            <td>Quantity</td>
                        </tr>
                    </thead>
                    {
                        cartData.map((item) => <tbody key={item.id}>
                            <tr>
                                <td>{item.name}</td>
                                <td><img src={item.photo} className="box-img" style={{ width: '180px', height: '150px' }} alt="Image of Products" /></td>
                                <td>{item.color}</td>
                                <td>{item.price}</td>
                                <td>{item.brand}</td>
                                <td>{item.category}</td>
                                <td>
                                    <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                                    <span> {item.quantity} </span>
                                    <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                                </td>
                            </tr>
                        </tbody>)
                    }
                </table>
                <div className="price-details">
                    {/* className="price-details" */}
                    <div className="adjust-price"><span>Amount</span><span>{amount}</span></div>
                    <div className="adjust-price"><span>Discount</span><span>{amount / 10}</span></div>
                    <div className="adjust-price"><span>Tax</span><span>000</span></div>
                    <div className="adjust-price"><span>Total</span><span>{amount - (amount / 10)}</span></div>

                </div>
                <div>
                    <button style={{ backgroundColor: '#9878', color: 'darkblue' }} onClick={() => dispatch(emptyCart())}>Empty Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;