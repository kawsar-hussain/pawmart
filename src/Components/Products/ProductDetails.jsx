import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import axios from "axios";
import OrderFormModal from "./MyProducts/OrderFormModal";
import Loader from "../../Loader";
import { MdOutlineMail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (product) {
      document.title = `PawMart - ${product.name}`;
    }
  }, [product]);

  useEffect(() => {
    axios
      .get(`https://server-a10-six.vercel.app/product-details/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  if (!product) {
    return <Loader></Loader>;
  }

  return (
    <div className="lg:px-[200px] px-3 py-10 h-auto lg:h-[92vh]">
      <div className="bg-base-200 p-4 flex lg:flex-row flex-col gap-5 rounded-md overflow-hidden">
        <div className="w-full flex-7 aspect-4/3">
          <img src={product.image} alt={product.name} className="w-full h-full rounded-md object-cover" />
        </div>

        <div className="flex-5 py-5">
          <h2 className="text-2xl lg:text-4xl font-bold primary-text">{product.name}</h2>
          <p className="text-gray-600 text-sm "> {product.category}</p>
          <p className="text-gray-500 text-sm py-7 ">{product.description}</p>
          <p className="primary-text text-xl lg:text-2xl mb-4 font-semibold">Price: {product.price === 0 ? "Free for Adoption" : `$${product.price}`}</p>
          <p className="text-gray-600 text-sm flex gap-1">
            <MdOutlineMail className="text-xl" />
            <Link to={`https://mail.google.com/mail/?view=cm&fs=1&to=${product.email}`} target="blank" className="hover:text-[#ff9900] underline hover:cursor-pointer">
              {product.email}
            </Link>
          </p>
          <p className="text-gray-700 text-sm flex gap-1 mt-2">
            <GrLocation className="text-xl" /> {product.location}
          </p>

          <OrderFormModal product={product} className="btn "></OrderFormModal>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
