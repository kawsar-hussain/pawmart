import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (product) {
      document.title = `PawMart - ${product.name}`;
    }
  }, [product]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/product-details/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!product) {
    return <p className="text-center mt-10">Product not found</p>;
  }

  return (
    <div className="px-[200px] py-10">
      <div className="bg-base-200 p-4 flex gap-5 rounded-md overflow-hidden">
        <div className="w-full flex-7 aspect-4/3">
          <img src={product.image} alt={product.name} className="w-full h-full rounded-md object-cover" />
        </div>

        <div className="flex-6 py-5">
          <h2 className="text-4xl font-bold primary-text">{product.name}</h2>
          <p className="text-gray-600 text-sm italic"> {product.category}</p>
          <p className="text-gray-700 py-7 ">{product.description}</p>
          <p className="primary-text text-2xl mb-4 font-semibold">Price: {product.price === 0 ? "Free for Adoption" : `${product.price}৳`}</p>
          <p className="text-gray-600 text-sm">
            Email:{" "}
            <Link to={`https://mail.google.com/mail/?view=cm&fs=1&to=${product.email}`} target="blank" className="hover:text-[#ff9900] underline hover:cursor-pointer">
              {product.email}
            </Link>
          </p>
          <p className="text-gray-700 text-sm">Location: {product.location}</p>
          <Link className="btn primary-bg text-white mt-5">{product.category === "Pet" ? "Adopt Now" : "Order Now"}</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
