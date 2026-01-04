import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const AddPet = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = {
      name: form.name.value,
      category: form.category.value,
      color: form.color.value,
      age: form.age.value,
      location: form.location.value,
      description: form.description.value,
      image: form.image.value,
      email: form.email.value,
    };

    toast.success("Pet Added Successfully!");

    // form.reset();
    console.log(formData);
    axios.post("https://server-a10-six.vercel.app/pets", formData).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="py-8 px-3 bg-base-200">
      <title>PawMart - Adopt Your Pet</title>
      <div className="max-w-xl mx-auto p-6 bg-white rounded-md">
        <h2 className="text-2xl font-bold text-center mb-6 primary-text">Give Adopt Your Pet</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Pet Name</span>
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
              <option>Cat</option>
              <option>Dog</option>
            </select>
          </div>

          <div className="flex gap-3 *:flex-6">
            {/* color */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Color</span>
              </label>
              <input type="text" name="color" placeholder="Pet Color" className="input input-bordered w-full placeholder:text-gray-500" required />
            </div>

            {/* age */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Age (In Month)</span>
              </label>
              <input type="text" name="age" placeholder="Pet Age" className="input input-bordered w-full placeholder:text-gray-500" required />
            </div>
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
            <textarea name="description" className="textarea textarea-bordered w-full placeholder:text-gray-500 resize-none" placeholder="Write about your pet..." required></textarea>
          </div>

          {/* Image URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input type="url" name="image" placeholder="https://example.com/pet.jpg" className="input input-bordered w-full placeholder:text-gray-500" required />
          </div>

          {/* Email (readonly) */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" defaultValue={user.email} readOnly className="input input-bordered w-full placeholder:text-gray-500 bg-gray-100" />
          </div>

          {/* Submit Button */}
          <button className="btn bg-linear-to-tr from-[#ff6f00] to-[#ffb03a] text-white w-full mt-4">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddPet;
