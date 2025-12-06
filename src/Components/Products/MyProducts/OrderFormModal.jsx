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
      image: product.image,
      category: product.category,
    };

    axios
      .post("https://server-a10-six.vercel.app/orders", orderData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/products");
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
              <div className="w-full aspect-4/3 bg-base-200 rounded-md p-2 mb-5">
                <img src={product.image} alt={product.name} className="w-full h-full rounded-md object-cover" />
                <div className="flex lg:flex-row flex-col gap-2 py-4 justify-between">
                  <div>
                    <div className="font-bold"> {product?.name}</div>
                    <div className="text-sm opacity-50">{product?.category}</div>
                    <div className="text-xs opacity-50">{`ID: ${product?._id}`}</div>
                  </div>
                  <p className="primary-text text-md lg:text-xl font-bold">{product.price === 0 ? "Free For Adopt" : `Price: $${product.price}`}</p>
                </div>
              </div>
              <form onSubmit={handleOrder} className="space-y-4">
                {/* Buyer Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input defaultValue={user.displayName} readOnly type="text" name="buyerName" className="input input-bordered w-full placeholder:text-gray-500 bg-base-200" />
                </div>

                {/* Product Name */}
                <div className="form-control hidden">
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
                <div className="form-control hidden">
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

                {/* Price */}
                <div className="form-control hidden">
                  <label className="label">
                    <span className="label-text">Price (USD)</span>
                  </label>
                  <input defaultValue={product.price} readOnly type="number" name="price" placeholder="Enter Price" className="input input-bordered w-full placeholder:text-gray-500 bg-base-200" />
                </div>
                {/* Quantity */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Quantity</span>
                  </label>
                  <input type="text" name="quantity" min="1" placeholder="Enter Quantity" className="input input-bordered w-full placeholder:text-gray-500" required />
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
                    <span className="label-text">Notes (Optional)</span>
                  </label>
                  <textarea name="additionalNotes" placeholder="Write your message" className="textarea textarea-bordered w-full placeholder:text-gray-500 resize-none"></textarea>
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
