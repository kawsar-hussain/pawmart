import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import { FaFilter } from "react-icons/fa";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    axios
      .get("http://localhost:3000/add-product-form")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  const filteredProducts = selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory);
  console.log(filteredProducts);
  return (
    <div className="px-20 py-10">
      <title>PawMart - Pet & Supplies</title>
      <h2 className="text-4xl font-bold primary-text mb-10 text-center">
        Pets <span className="secondary-text">& Products</span>
      </h2>
      <div className="flex gap-2 text-gray-700 mb-7 justify-end">
        <p className="flex items-center gap-1">
          <FaFilter /> Filter{" "}
        </p>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="select w-[180px]">
          <option>All</option>
          <option>Pet</option>
          <option>Food</option>
          <option>Accessories</option>
          <option>Care Product</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((item) => (
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
              <Link to={`/product-details/${item?._id}`} className="primary-bg btn w-full text-white py-1.5 font-bold text-md text-center mt-4">
                See Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
