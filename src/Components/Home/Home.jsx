import React from "react";
import Hero from "./Hero";
import ProductCategories from "./ProductCategory/ProductCategories";
import RecentProducts from "./RecentProducts/RecentProducts";
import ExtraSections from "./ExtraSections";

const Home = () => {
  return (
    <div>
      <title>PawMart - Home</title>
      <Hero></Hero>
      <ProductCategories></ProductCategories>
      <hr className="mx-20 text-gray-300" />
      <RecentProducts></RecentProducts>
      <hr className="mx-20 text-gray-300" />
      <ExtraSections></ExtraSections>
    </div>
  );
};

export default Home;
