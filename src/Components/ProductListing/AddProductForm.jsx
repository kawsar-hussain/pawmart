import React, { useContext } from "react";
import { toast } from "react-toastify";
import AuthProvider, { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const AddProductForm = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const productData = {
      name: form.name.value,
      category: form.category.value,
      price: parseFloat(form.price.value),
      location: form.location.value,
      description: form.description.value,
      image: form.image.value,
      date: form.date.value,
      email: form.email.value,
    };

    productData.category === "Pets" ? toast.success("Pet Added Successfully!") : toast.success("Product Added Successfully!");

    // form.reset();
    console.log(productData);
    axios.post("http://localhost:3000/add-product-form", productData).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="py-8 bg-base-200">
      <title>PawMar - Add Product</title>
      <div className="max-w-xl mx-auto p-6 bg-white rounded-md">
        <h2 className="text-2xl font-bold text-center mb-6 primary-text">Add New Product / Pet</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product / Pet Name</span>
            </label>
            <input type="text" name="name" placeholder="Enter product or pet name" className="input input-bordered w-full placeholder:text-gray-500" required />
          </div>

          {/* Category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select name="category" className="select select-bordered w-full" required>
              <option disabled selected>
                Select Category
              </option>
              <option>Pets</option>
              <option>Food</option>
              <option>Accessories</option>
              <option>Care Products</option>
            </select>
          </div>

          {/* Price */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input type="text" name="price" placeholder="0 (If Pet is Selected)" className="input input-bordered w-full placeholder:text-gray-500" required />
          </div>

          {/* Location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input type="text" name="location" placeholder="Enter location" className="input input-bordered w-full  placeholder:text-gray-500" required />
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea name="description" className="textarea textarea-bordered w-full placeholder:text-gray-500 resize-none" placeholder="Write product or pet details..."></textarea>
          </div>

          {/* Image URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input type="url" name="image" placeholder="https://example.com/pet.jpg" className="input input-bordered w-full placeholder:text-gray-500" required />
          </div>

          {/* Date (Pick Up) */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date" className="input input-bordered w-full" required />
          </div>

          {/* Email (readonly) */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" defaultValue={user.email} readOnly className="input input-bordered w-full placeholder:text-gray-500 bg-gray-100" />
          </div>

          {/* Submit Button */}
          <button className="btn primary-bg text-white w-full mt-4">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
