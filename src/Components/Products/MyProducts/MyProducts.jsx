import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router";
import { toast } from "react-toastify";

const MyProducts = () => {
  const [myProducts, setMyProducts] = useState([]);
  const { user } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCallback, setModalCallback] = useState(null);

  useEffect(() => {
    axios
      .get(`https://server-a10-six.vercel.app/my-products?email=${user?.email}`)
      .then((res) => {
        setMyProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    axios
      .delete(`https://server-a10-six.vercel.app/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        const filterData = myProducts.filter((product) => product._id !== id);
        setMyProducts(filterData);
        toast.success("Item deleted successfully!");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="px-3 lg:px-20 py-5 pb-10 lg:py-15 bg-base-200 lg:min-h-[500px] min-h-auto">
      <title>PawMart - My Products</title>
      <h2 className="text-2xl lg:text-4xl font-bold primary-text mb-4 lg:mb-10 text-center">My Product Lists</h2>
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
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {myProducts.map((myProduct, index) => (
              <tr key={index} className="even:bg-[#ffefd7] odd:bg-white hover:bg-gray-200">
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

                <td>
                  <div className="flex gap-1 items-center">
                    <button
                      className="btn bg-[#ff3700] text-white shadow-none btn-sm"
                      onClick={() => {
                        setModalCallback(() => () => handleDelete(myProduct._id));
                        setIsModalOpen(true);
                      }}
                    >
                      Delete
                    </button>

                    {/* modal */}
                    {isModalOpen && (
                      <div className="modal modal-open ">
                        <div className="modal-box bg-linear-to-tr from-[#ff6a00] to-[#ffb03a]">
                          <h3 className="font-bold text-lg text-base-200">Confirm Delete</h3>
                          <p className="py-4 text-base-200">Are you sure you want to delete this item?</p>
                          <div className="modal-action">
                            <button className="btn bg-base-300" onClick={() => setIsModalOpen(false)}>
                              Cancel
                            </button>
                            <button
                              className="btn bg-[#ff3700] shadow-none border-none text-white"
                              onClick={() => {
                                modalCallback?.(); // run stored callback
                                setIsModalOpen(false); // close modal
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    <Link to={`/update-product/${myProduct._id}`} className="btn primary-bg text-white shadow-none btn-sm">
                      Edit
                    </Link>
                  </div>
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
