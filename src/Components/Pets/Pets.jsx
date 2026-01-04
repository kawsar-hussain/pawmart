import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Aside from "./Aside";
import { GrLocation } from "react-icons/gr";
import Loader from "../../Loader";

const Pets = () => {
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/pets")
      .then((res) => {
        setItems(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching pets:", err);
      });
  }, []);

  const filteredItems = items.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesColor = selectedColor === "All" || item.color === selectedColor;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch && matchesColor;
  });

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="bg-base-200 lg:px-20 lg:py-10 px-3 py-5 pb-10 lg:min-h-[70vh] h-auto">
      <title>PawMart - Pet & Supplies</title>

      <h2 className="lg:text-4xl text-3xl lg:mb-15 mb-7 text-center font-bold primary-text">
        Give A <span className="secondary-text">Pet Home</span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-2 ">
          <Aside
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            selectedColor={selectedColor}
            setSelectedCategory={setSelectedCategory}
            setSelectedColor={setSelectedColor}
          ></Aside>
        </div>
        <div className="flex-10">
          <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-3">
            {[...filteredItems].reverse().map((item) => (
              <div key={item._id} className="bg-white rounded-md overflow-hidden  shadow-sm  group transform transition-transform duration-300  hover:shadow-lg">
                <Link to={`/pet-details/${item?._id}`}>
                  <div className="w-full overflow-hidden aspect-4/3 border-b-2 border-gray-100">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover " />
                  </div>
                </Link>

                <div className="p-3">
                  <h3 className="text-base font-semibold group-hover:text-[#ff9100]">{item.name}</h3>
                  <p className="text-gray-700 text-xs flex gap-1 mt-3">
                    <GrLocation className="text-sm" /> {item.location}
                  </p>
                  <p className="text-gray-700 text-xs flex gap-1 ">Color: {item.color}</p>
                  <p className="text-gray-700 text-xs flex gap-1 ">Age: {item.age} Months</p>
                  <Link to={`/pet-details/${item?._id}`} className="btn btn-sm w-full bg-linear-to-tr from-[#ff6a00] to-[#ffb03a] text-white border-none shadow-none mt-3 mb-1">
                    View Details
                  </Link>
                  <button className="btn btn-sm w-full border-none shadow-none text-[#ff6a00]">Adopt Now</button>
                </div>
              </div>
            ))}
          </div>
          {items.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
              {/* Main text */}
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">No Products Found</h2>

              {/* Supporting text */}
              <p className="text-gray-500 mb-4">We couldn't find any products matching your search. Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pets;
