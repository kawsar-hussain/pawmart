import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const PetDetails = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    axios
      .get(`https://server-a10-six.vercel.app/pets-details/${id}`)
      .then((res) => {
        setPet(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);
  return (
    <div>
      <div className="bg-base-200 min-h-screen py-10 px-4 lg:px-20">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          {/* Image Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-full">
              <img src={pet?.image} alt={pet?.name} className="w-full h-full object-cover" />
            </div>

            {/* Info Section */}
            <div className="p-6 lg:p-8">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-600 mb-3">{pet?.category}</span>

              <h1 className="text-3xl font-bold text-gray-800 mb-2">{pet?.name}</h1>

              <p className="text-gray-600 text-sm mb-4">{pet?.description}</p>

              {/* Pet Info Grid */}
              <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                <div>
                  <p className="text-gray-500">Age</p>
                  <p className="font-semibold">{pet?.age} Years</p>
                </div>

                <div>
                  <p className="text-gray-500">Color</p>
                  <p className="font-semibold">{pet?.color}</p>
                </div>

                <div>
                  <p className="text-gray-500">Location</p>
                  <p className="font-semibold">{pet?.location}</p>
                </div>

                <div>
                  <p className="text-gray-500">Contact Email</p>
                  <p className="font-semibold break-all">{pet?.email}</p>
                </div>
              </div>

              {/* Adopt Button */}
              <button className="btn bg-linear-to-tr from-[#ff6a00] to-[#ffb03a] text-white transition">Adopt Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
