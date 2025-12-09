import React, { useState } from "react";
import "./SignUp.css"; 

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (form.password !== form.confirmPassword) {
      setMessage("❌ Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Signup failed ❌");
        return;
      }

      setMessage("🎉 Account created successfully!");
      localStorage.setItem("digi_user", form.email);

      setTimeout(() => {
        window.location.href = "/signin"; // redirect after success
      }, 1000);
    } catch (err) {
      setMessage("⚠️ Server Error!");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        {/* LEFT IMAGE PANEL */}
        <div
          className="signup-left"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/18104/pexels-photo.jpg")',
          }}
        >
          <div className="signup-overlay">
            <h2 className="brand-title">
              <span className="brand-dot"></span> DigiStore
            </h2>
            <p className="brand-desc">
              Join DigiStore and explore exclusive collections of mobiles,
              electronics, and smart devices.
            </p>
          </div>
        </div>

        {/* RIGHT FORM PANEL */}
        <div className="signup-right">
          <h2>Create Account</h2>
          <p className="subtitle">Start shopping smarter today</p>

          {message && (
            <p
              className={`msg ${
                message.includes("success") ? "success" : "error"
              }`}
            >
              {message}
            </p>
          )}

          <form onSubmit={handleSubmit} className="signup-form">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Full name"
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create password"
              onChange={handleChange}
              required
            />

            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              onChange={handleChange}
              required
            />

            <button className="signup-btn">Sign Up</button>

            <p className="signin-text">
              Already have an account? <a href="/signin">Sign In</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

