import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const ProductCategories = () => {
  const category = [
    {
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGV0fGVufDB8fDB8fHwy",
      category: "Pets (Adoption)",
      categoryRoute: "Pets",
    },
    {
      image: "https://www.petfoodinstitute.org/wp-content/uploads/2020/12/pet-food-types.jpg",
      category: "Pet Food",
      categoryRoute: "Food",
    },
    {
      image: "https://www.patipets.com.au/cdn/shop/articles/What_To_Buy_New_Puppies_880x.png?v=1722391848",
      category: "Accessories",
      categoryRoute: "Accessories",
    },
    {
      image: "https://futurestartup.com/wp-content/uploads/2021/09/pet-food-banner-cover.jpg",
      category: "Pet Care Products",
      categoryRoute: "Care-Products",
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
            <div className="w-full aspect-4/3">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
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
