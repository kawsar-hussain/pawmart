import axios from "axios";
import React, { useEffect, useState } from "react";

const Orders = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    axios
      .get("http://localhost:3000/orders")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <div className="px-20 py-15 bg-base-200 lg:min-h-[500px] min-h-auto">
      <h2 className="text-4xl font-bold primary-text mb-10 text-center">My Order Lists</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-[#ff9900] text-white">
            <tr>
              <th>Product Name</th>
              <th>Buyer Name</th>
              <th>Quantity</th>
              <th>price</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {products.map((order, index) => (
              <tr key={index} className="even:bg-[#ffefd7] odd:bg-white hover:bg-gray-200">
                {/* Avatar + Name + Location */}
                <td>{order.productName}</td>

                {/* Category */}

                {/* Description */}
                <td className="max-w-[200px] truncate">{order?.buyerName}</td>

                {/* Quantity */}
                <td>{order?.quantity}</td>

                {/* price */}
                <td>{order?.price === 0 ? "Free For Adoption" : order?.price}</td>

                {/* address */}
                <td>{order?.address}</td>

                {/* phone number */}
                <td>{order?.phone}</td>

                {/* Date */}
                <td>{order?.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
