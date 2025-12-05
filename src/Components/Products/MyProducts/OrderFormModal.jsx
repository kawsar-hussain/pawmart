import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const OrderFormModal = ({ product }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleOrder = (e) => {
    e.preventDefault();
    const form = e.target;

    const orderData = {
      productId: form.productId.value,
      productName: form.productName.value,
      buyerName: form.buyerName.value,
      email: form.email.value,
      quantity: parseInt(form.quantity.value),
      price: parseInt(form.price.value),
      address: form.address.value,
      phone: form.phone.value,
      date: form.date.value,
      additionalNotes: form.additionalNotes.value,
    };

    axios
      .post("http://localhost:3000/orders", orderData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/my-orders");
    toast.success("Order Placed Successfully!");
  };

  // date
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0"); // months start from 0
  const dd = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${yyyy}-${mm}-${dd}`;

  return (
    <div>
      <button className="btn bg-linear-to-tr from-[#ff6f00] to-[#ffb03a] text-white mt-5" onClick={() => document.getElementById("my_modal_3").showModal()}>
        {product.category === "Pet" ? "Adopt Now" : "Order Now"}
      </button>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box p-0">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div className="">
            <div className="max-w-xl mx-auto p-6 bg-white rounded-md">
              <h2 className="text-2xl font-bold text-center mb-6 primary-text">Place Your Order</h2>
              <form onSubmit={handleOrder} className="space-y-4">
                {/* Buyer Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Buyer Name</span>
                  </label>
                  <input
                    defaultValue={user.displayName}
                    readOnly
                    type="text"
                    name="buyerName"
                    placeholder="Enter Buyer Name"
                    className="input input-bordered w-full placeholder:text-gray-500 bg-base-200"
                  />
                </div>

                {/* Product Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Name</span>
                  </label>
                  <input
                    defaultValue={product?.name}
                    readOnly
                    type="text"
                    name="productName"
                    placeholder="Enter Product Name"
                    className="input input-bordered w-full placeholder:text-gray-500 bg-base-200"
                  />
                </div>

                {/* Product ID */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product ID</span>
                  </label>
                  <input
                    defaultValue={product?._id}
                    readOnly
                    type="text"
                    name="productId"
                    placeholder="Enter Product ID"
                    className="input input-bordered w-full placeholder:text-gray-500 bg-base-200"
                  />
                </div>

                <div className="flex gap-2">
                  {/* Price */}
                  <div className="form-control flex-7">
                    <label className="label">
                      <span className="label-text">Price (USD)</span>
                    </label>
                    <input defaultValue={product.price} readOnly type="number" name="price" placeholder="Enter Price" className="input input-bordered w-full placeholder:text-gray-500 bg-base-200" />
                  </div>
                  {/* Quantity */}
                  <div className="form-control flex-5">
                    <label className="label">
                      <span className="label-text">Quantity</span>
                    </label>
                    <input type="text" name="quantity" min="1" placeholder="Enter Quantity" className="input input-bordered w-full placeholder:text-gray-500" required />
                  </div>
                </div>

                {/* Address */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input type="text" name="address" placeholder="Enter Address" className="input input-bordered w-full placeholder:text-gray-500" required />
                </div>

                {/* Phone */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input type="tel" name="phone" placeholder="Enter Phone Number" className="input input-bordered w-full placeholder:text-gray-500" required />
                </div>

                {/* Email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input defaultValue={user.email} readOnly type="email" name="email" placeholder="Enter Email" className="input input-bordered w-full placeholder:text-gray-500 bg-base-200" />
                </div>

                {/* Date */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input defaultValue={formattedDate} readOnly type="date" name="date" className="input input-bordered w-full bg-base-200" />
                </div>

                {/* Additional Notes */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Additional Notes (Optional)</span>
                  </label>
                  <textarea name="additionalNotes" placeholder="Enter your message" className="textarea textarea-bordered w-full placeholder:text-gray-500 resize-none"></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn bg-linear-to-tr from-[#ff6f00] to-[#ffb03a] text-white w-full mt-4">
                  Submit Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default OrderFormModal;
