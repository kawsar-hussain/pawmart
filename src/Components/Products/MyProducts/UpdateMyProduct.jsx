import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateMyProduct = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      document.title = `PawMart - Update ${data.name} Data`;
    }
  }, [data]);

  useEffect(() => {
    axios
      .get(`https://server-a10-six.vercel.app/product-details/${id}`)
      .then((res) => {
        setData(res.data);
        setCategory(res.data.category);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = {
      name: form.name.value,
      category: form.category.value,
      price: parseFloat(form.price.value),
      location: form.location.value,
      description: form.description.value,
      image: form.image.value,
      date: form.date.value,
      email: form.email.value,
      createdAt: data?.createdAt,
    };
    console.log(formData);

    axios
      .put(`https://server-a10-six.vercel.app/update/${id}`, formData)
      .then((res) => {
        console.log(res.data);
        toast.success("Data updated successfully.");
        navigate("/my-products");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!data) return null;

  return (
    <div className="py-8 p-3 bg-base-200">
      <title>PawMart - Update Product</title>
      <div className="max-w-xl mx-auto p-6 bg-white rounded-md">
        <h2 className="text-2xl font-bold text-center mb-6 primary-text">Update Your Product Info</h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          {/* name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product / Pet Name</span>
            </label>
            <input type="text" name="name" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} className="input input-bordered w-full" required />
          </div>

          {/* category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select name="category" value={category} onChange={(e) => setCategory(e.target.value)} className="select select-bordered w-full" required>
              <option disabled>Select Category</option>
              <option>Pets</option>
              <option>Food</option>
              <option>Accessories</option>
              <option>Care Products</option>
            </select>
          </div>

          {/* price */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input type="text" name="price" value={data.price} onChange={(e) => setData({ ...data, price: e.target.value })} className="input input-bordered w-full" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input type="text" name="location" value={data.location} onChange={(e) => setData({ ...data, location: e.target.value })} className="input input-bordered w-full" required />
          </div>

          {/* description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              value={data.description}
              onChange={(e) => setData({ ...data, description: e.target.value })}
              className="textarea textarea-bordered w-full resize-none"
            ></textarea>
          </div>

          {/* image url */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input type="url" name="image" value={data.image} onChange={(e) => setData({ ...data, image: e.target.value })} className="input input-bordered w-full" required />
          </div>

          {/* date */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date" value={data.date} onChange={(e) => setData({ ...data, date: e.target.value })} className="input input-bordered w-full" required />
          </div>

          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" defaultValue={user?.email} readOnly className="input input-bordered w-full bg-gray-100" />
          </div>

          {/* button */}
          <button className="btn primary-bg text-white w-full mt-4">Update Data</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateMyProduct;
