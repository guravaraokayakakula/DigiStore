import React, { useState } from "react";
import "./SignIn.css"; 

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Login failed ❌");
        return;
      }

      setMessage("Login successful 🚀");

      localStorage.setItem("digi_token", data.token);
      localStorage.setItem("digi_user", form.email);

      setTimeout(() => (window.location.href = "/"), 800);
    } catch (err) {
      setMessage("⚠ Server error!");
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        {/* LEFT SIDE IMAGE */}
        <div
          className="signin-left"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/18104/pexels-photo.jpg")',
          }}
        >
          <div className="signin-overlay">
            <h2 className="brand-title">
              <span className="brand-dot"></span> DigiStore
            </h2>
            <p className="brand-desc">
              Sign in to access your orders, wishlist, and smart deals tailored
              just for you.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="signin-right">
          <h2>Welcome Back</h2>
          <p className="subtitle">Sign in to continue shopping</p>

          {message && (
            <p className={`msg ${message.includes("success") ? "success" : "error"}`}>
              {message}
            </p>
          )}

          <form className="signin-form" onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <button className="signin-btn">Sign In</button>

            <p className="signup-text">
              Don't have an account? <a href="/signup">Create one</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;


