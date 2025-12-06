import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const ProductCategories = () => {
  const category = [
    {
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGV0fGVufDB8fDB8fHwy",
      category: "Pets (Adoption)",
      categoryRoute: "Pets-Adoption",
    },
    {
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGV0fGVufDB8fDB8fHwy",
      category: "Pet Food",
      categoryRoute: "Pet-Food",
    },
    {
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGV0fGVufDB8fDB8fHwy",
      category: "Accessories",
      categoryRoute: "Accessories",
    },
    {
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGV0fGVufDB8fDB8fHwy",
      category: "Pet Care Products",
      categoryRoute: "Pet-Care-Products",
    },
  ];

  return (
    <div className="lg:p-20 lg:pb-10 p-3 pt-5 ">
      <div className="text-center">
        <h2 className="lg:text-4xl text-2xl font-bold primary-text mb-5 lg:mb-12">
          Explore <span className="secondary-text">Our Products</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {category.map((item, index) => (
          <Link to={`filtered-category/${item.categoryRoute}`} key={index} className="bg-base-200 rounded-md overflow-hidden border-2 border-[#ff9900] hover:scale-[1.01] duration-75">
            <img className="w-full" src={item.image} alt={item.category} />
            <div className="primary-bg text-white py-1.5 font-bold text-md flex items-center justify-center gap-1">
              <h2>{item.category}</h2>
              <FaArrowRight />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
