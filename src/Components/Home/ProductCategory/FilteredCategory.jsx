import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const FilteredCategory = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/filtered-category/${category}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, [category]);

  return (
    <div className="lg:px-20 lg:py-10 p-3 pt-5 pb-10 min-h-[500px]">
      <title>PawMart - Home</title>
      <h2 className="lg:text-4xl text-2xl font-bold primary-text mb-5 lg:mb-10 text-center">{`${category} Collections`}</h2>
      {products.length === 0 ? (
        <p className="mt-10 text-gray-600 text-center">No Product Founded</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item) => (
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

export default FilteredCategory;
