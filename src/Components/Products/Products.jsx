import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import { FaFilter } from "react-icons/fa";
import Loader from "../../Loader";
import { GrLocation } from "react-icons/gr";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    axios
      .get("https://server-a10-six.vercel.app/add-product-form")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "Default" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-base-200 lg:px-20 lg:py-10 px-3 py-5 pb-10">
      <title>PawMart - Pet & Supplies</title>

      <h2 className="lg:text-4xl text-3xl lg:mb-15 mb-7 text-center font-bold primary-text">
        Products <span className="secondary-text">& Accessories</span>
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

        <div className="flex gap-2 text-gray-700 mb-7 self-end lg:self-auto">
          <p className="flex items-center gap-1">
            <FaFilter /> Filter{" "}
          </p>
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="h-8 select w-[180px]">
            <option>Default</option>
            <option>Food</option>
            <option>Accessories</option>
            <option>Care-Products</option>
          </select>
        </div>
      </div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-3">
            {[...filteredProducts]
              .filter((item) => item.category != "Pets")
              .reverse()
              .map((item) => (
                <div key={item._id} className="bg-white rounded-md overflow-hidden hover:scale-[1.01] duration-75 shadow-md">
                  <Link to={`/product-details/${item?._id}`}>
                    <div className="w-full aspect-4/3 border-b-2 border-gray-100">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                  </Link>

                  <div className="p-3">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600 text-xs">{item.category}</p>
                    <p className="text-xl font-semibold py-2 primary-text">{item.price === 0 ? "Free for Adoption" : `$${item.price}`}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
