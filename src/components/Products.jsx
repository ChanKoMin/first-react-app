import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = ({ items }) => {
  return (
    <div className="flex flex-wrap gap-10 justify-center my-10">
      {items.map((item) => {
        return <Product key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Products;
