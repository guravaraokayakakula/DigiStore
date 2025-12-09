import React, { useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { allProducts } from "../data/allProducts";
import { useCart } from "../context/CartContext";
import "./SearchResult.css";

function useQuery() {
    const { search } = useLocation();
    return new URLSearchParams(search);
}

const SearchResults = () => {
    const query = useQuery();
    const rawTerm = query.get("q") || "";
    const searchTerm = rawTerm.toLowerCase().trim();

    const { addToCart } = useCart(); // ✅ use cart context

    // generic case-insensitive search across all string fields
    const filteredProducts = useMemo(() => {
        if (!searchTerm) return allProducts;

        return allProducts.filter((item) => {
            const values = Object.values(item);
            const text = values
                .filter((v) => typeof v === "string")
                .join(" ")
                .toLowerCase();

            return text.includes(searchTerm);
        });
    }, [searchTerm]);

    return (
        <>
            <Navbar />

            <div className="search-page">
                <h2 className="search-title">
                    Search results for: <span>"{rawTerm || "All"}"</span>
                </h2>

                {filteredProducts.length === 0 ? (
                    <p className="search-empty">No products found.</p>
                ) : (
                    <div className="search-grid">
                        {filteredProducts.map((item) => (
                            <div key={item.id} className="search-card">
                                {/* click image/title to go to details */}
                                <Link to={`/product/${item.id}`} className="search-img-link">
                                    <div className="search-img">
                                        <img
                                            src={item.image}
                                            alt={item.title || item.name || "product"}
                                        />
                                    </div>
                                </Link>

                                <div className="search-info">
                                    <Link
                                        to={`/product/${item.id}`}
                                        className="search-title-link"
                                    >
                                        <h4>{item.title || item.name}</h4>
                                    </Link>

                                    {item.company && (
                                        <p className="search-sub">{item.company}</p>
                                    )}
                                    {item.brand && <p className="search-sub">{item.brand}</p>}
                                    {item.category && (
                                        <p className="search-sub">{item.category}</p>
                                    )}

                                    {item.price !== undefined && (
                                        <p className="search-price">
                                            ₹{Number(item.price).toLocaleString("en-IN")}
                                        </p>
                                    )}

                                    <div className="search-actions">
                                        <button
                                            className="search-add-btn"
                                            onClick={() => addToCart(item)}
                                        >
                                            Add to Cart
                                        </button>

                                        <Link
                                            to="/checkout"
                                            className="search-buy-btn"
                                            onClick={() => addToCart(item)}
                                        >
                                            Buy Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default SearchResults;

