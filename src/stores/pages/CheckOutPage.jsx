import React, { useState } from "react";
import "./Checkout.css";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

const Checkout = () => {
    const { cartItems, cartTotal, clearCart } = useCart();

    const [form, setForm] = useState({
        fullName: "",
        phone: "",
        address: "",
        city: "",
        pincode: "",
        paymentMethod: "cod",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");

        // very basic validation
        if (!form.fullName || !form.phone || !form.address || !form.city || !form.pincode) {
            setMessage("Please fill all required fields.");
            return;
        }

        // here you would call backend /create-order API
        console.log("Order placed:", {
            items: cartItems,
            total: cartTotal,
            shipping: form,
        });

        setMessage("Order placed successfully 🎉");
        clearCart();

    };

    if (cartItems.length === 0) {
        return (
            <>
                <Navbar />
                <div className="checkout-empty">
                    <h2>Your cart is empty</h2>
                    <a href="/" className="back-home">Go back to shopping</a>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />

            <div className="checkout-container">
                <div className="checkout-card">
                    {/* LEFT: SHIPPING FORM */}
                    <div className="checkout-left">
                        <h2>Checkout</h2>
                        <p className="checkout-subtitle">
                            Enter your shipping details and confirm your order.
                        </p>

                        {message && (
                            <p
                                className={`checkout-msg ${message.includes("success") ? "success" : "error"
                                    }`}
                            >
                                {message}
                            </p>
                        )}

                        <form className="checkout-form" onSubmit={handleSubmit}>
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Your name"
                                value={form.fullName}
                                onChange={handleChange}
                                required
                            />

                            <label>Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="10-digit mobile number"
                                value={form.phone}
                                onChange={handleChange}
                                required
                            />

                            <label>Address</label>
                            <textarea
                                name="address"
                                rows="3"
                                placeholder="House no, street, area"
                                value={form.address}
                                onChange={handleChange}
                                required
                            />

                            <div className="checkout-row">
                                <div className="field">
                                    <label>City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="City"
                                        value={form.city}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="field">
                                    <label>Pincode</label>
                                    <input
                                        type="text"
                                        name="pincode"
                                        placeholder="Pincode"
                                        value={form.pincode}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <label>Payment Method</label>
                            <select
                                name="paymentMethod"
                                value={form.paymentMethod}
                                onChange={handleChange}
                            >
                                <option value="cod">Cash on Delivery</option>
                                <option value="card">Credit / Debit Card (demo)</option>
                                <option value="upi">UPI (demo)</option>
                            </select>

                            <button type="submit" className="checkout-btn">
                                Place Order
                            </button>
                        </form>
                    </div>

                    {/* RIGHT: ORDER SUMMARY */}
                    <div className="checkout-right">
                        <h3>Order Summary</h3>

                        <div className="summary-items">
                            {cartItems.map((item) => (
                                <div key={item.id} className="summary-item">
                                    <div className="summary-text">
                                        <p className="summary-title">{item.title || item.name}</p>
                                        <p className="summary-qty">
                                            Qty: {item.quantity || 1}
                                        </p>
                                    </div>
                                    <p className="summary-price">
                                        ₹{(item.price * (item.quantity || 1)).toFixed(2)}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="summary-line">
                            <span>Subtotal</span>
                            <span>₹{cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="summary-line">
                            <span>Delivery</span>
                            <span>₹50.00</span>
                        </div>
                        <div className="summary-total">
                            <span>Total</span>
                            <span>₹{(cartTotal + 50).toFixed(2)}</span>
                        </div>

                        <p className="summary-note">
                            By placing the order, you agree to DigiStore’s terms and
                            conditions.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;
