import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const FilteredCategory = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  console.log(products);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/filtered-category/category/${category}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, [category]);

  console.log(selectedCategory);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default FilteredCategory;
