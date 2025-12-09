
import React from 'react'
import { useCart } from './context/CartContext'
import Navbar from './components/Navbar';
import { useNavigate } from "react-router-dom";




const UserCart = () => {

    const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
    const navigate = useNavigate();


    console.log(cartItems);

    return (
        <>
            <Navbar />
            <div className="cart-page">
                <h2>Your Cart</h2>

                {cartItems.length === 0 ? (
                    <p className="empty-cart">Your cart is empty.</p>
                ) : (
                    <>
                        <div className="cart-list">
                            {cartItems.map((item) => (
                                <div key={item.id} className="cart-card">
                                    <div className="cart-img">
                                        <img src={item.image} alt={item.title} />
                                    </div>

                                    <div className="cart-info">
                                        <h3>{item.title}</h3>
                                        {item.author && (
                                            <p className="cart-author">{item.author}</p>
                                        )}
                                        <p className="cart-price">₹ {item.price}</p>

                                        <div className="cart-actions">
                                            <div className="qty">
                                                <button
                                                    onClick={() =>
                                                        updateQuantity(item.id, item.quantity - 1)
                                                    }
                                                >
                                                    -
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button
                                                    onClick={() =>
                                                        updateQuantity(item.id, item.quantity + 1)
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <button
                                                className="removeBtn"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="cart-summary">
                            <p>
                                Total: <span>₹ {cartTotal}</span>
                            </p>
                            {/* ...cart UI... */}
                            {cartItems.length > 0 && (
                                <button
                                    className="checkoutBtn"
                                    onClick={() => navigate("/checkout")}
                                >
                                    Proceed to Checkout
                                </button>
                            )}
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default UserCart;