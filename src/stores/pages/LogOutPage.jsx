import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Logout = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  useEffect(() => {
    localStorage.removeItem("digi_token");
    localStorage.removeItem("digi_user");

    if (clearCart) clearCart();

    console.log("User logged out successfully");

    navigate("/signin");
  }, [navigate, clearCart]);

  return null;
};

export default Logout;


