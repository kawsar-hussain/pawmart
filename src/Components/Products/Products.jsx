import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import { FaFilter } from "react-icons/fa";
import Loader from "../../Loader";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://server-a10-six.vercel.app/add-product-form")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className=" lg:px-20 lg:py-10 p-3 pt-5 pb-10 min-h-[500px]">
      <title>PawMart - Pet & Supplies</title>
      <h2 className="lg:text-4xl text-3xl font-bold primary-text mb-10 text-center">
        Pets <span className="secondary-text">& Products</span>
      </h2>
      <div className="flex lg:flex-row flex-col gap-3 justify-between">
        <label className="input h-8 rounded-full w-full lg:w-[300px]">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="placeholder-gray-500" />
        </label>

        <div className="flex gap-2 text-gray-700 mb-7">
          <p className="flex items-center gap-1">
            <FaFilter /> Filter{" "}
          </p>
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="h-8 select w-[180px]">
            <option>All</option>
            <option>Pets</option>
            <option>Food</option>
            <option>Accessories</option>
            <option>Care-Products</option>
          </select>
        </div>
      </div>
      {filteredProducts.length === 0 ? (
        <p className="mt-10 text-gray-600 text-center">No Product Founded</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...filteredProducts].reverse().map((item) => (
            <div key={item._id} className="bg-base-200 rounded-md overflow-hidden hover:scale-[1.01] duration-75 shadow-md">
              <div className="w-full aspect-4/3">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>

              <div className="p-4">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.category}</p>
                <p className=" font-semibold py-2 primary-text">Price: {item.price === 0 ? "Free for Adoption" : `$${item.price}`}</p>
                <p className="text-gray-600 text-sm">
                  Location: <br /> {item.location}
                </p>
                {/* button */}
                <Link to={`/product-details/${item?._id}`} className="bg-linear-to-tr from-[#ff6f00] to-[#ffb03a] btn w-full text-white py-1.5 font-bold text-md text-center mt-4">
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
