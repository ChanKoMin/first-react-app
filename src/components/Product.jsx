import React from "react";
import { Link } from "react-router-dom";

const Product = ({ id, title, image, price }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          className=" w-[250px] h-[250px] object-cover rounded"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title.substr(0, 25)}...</h2>
        <p>Price - {price}</p>
        <div className="card-actions justify-between">
          <button className="btn btn-primary">Add To Cart</button>
          <Link to={`/details/${id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
