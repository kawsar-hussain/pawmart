import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const MyProducts = () => {
  const [myProducts, setMyProducts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/my-products?email=${user?.email}`)
      .then((res) => {
        setMyProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, [user?.email]);

  console.log(myProducts);
  return (
    <div className="px-20 py-15 bg-base-200 lg:min-h-[500px] min-h-auto">
      <h2 className="text-4xl font-bold primary-text mb-10 text-center">My Product Lists</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-[#ff9900] text-white">
            <tr>
              <th>Product Info</th>
              <th>Description</th>
              <th>Location</th>
              <th>Price</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {myProducts.map((myProduct, index) => (
              <tr key={index} className="even:bg-[#ffeacb] odd:bg-white hover:bg-gray-300">
                {/* Avatar + Name + Location */}
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={myProduct?.image} alt={myProduct?.name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{myProduct?.name}</div>
                      <div className="text-sm opacity-50">{myProduct?.category}</div>
                    </div>
                  </div>
                </td>

                {/* Category */}

                {/* Description */}
                <td className="max-w-[200px] truncate">{myProduct?.description}</td>

                {/* Location */}
                <td>{myProduct?.location}</td>

                {/* Price */}
                <td>{myProduct?.price === 0 ? "Free For Adoption" : `$${myProduct?.price}`}</td>

                {/* Date */}
                <td>{myProduct?.date}</td>

                {/* Details button */}

                <td className="flex gap-1">
                  <button className="btn primary-bg text-white shadow-none btn-sm">Update</button>
                  <button className="btn bg-[#ff5126] text-white shadow-none btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
