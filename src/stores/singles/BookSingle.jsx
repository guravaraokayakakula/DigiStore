import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { allProducts } from "../data/allProducts";
import { useCart } from "../context/CartContext";

const Single = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = allProducts.find((item) => item.id === id);

  if (!product) {
    return (
      <>
        <Navbar />
        <div style={{ paddingTop: "120px", textAlign: "center" }}>
          <h2>Product not found</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="ind-section">
        <div className="ind-image">
          <img src={product.image} alt={product.title || product.name} />
        </div>
        <div className="ind-details space">
          <div className="ind-company">
            <h2>{product.title || product.name}</h2>
          </div>
          {product.author && (
            <div className="ind-model space">
              <h3>{product.author}</h3>
            </div>
          )}
          {product.company && (
            <div className="ind-model space">
              <h3>{product.company}</h3>
            </div>
          )}
          <div className="ind-price space">
            <h2>₹{Number(product.price).toLocaleString("en-IN")}</h2>
          </div>
          <div className="ind-desc space">
            <p>{product.description}</p>
          </div>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => {
              addToCart(product);
              navigate("/checkout");
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Single;
