import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [items, setItems] = useState({});
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const api = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await api.json();
    setItems(data);
  };
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl my-10">
        <figure>
          <img src={items.image} alt="Album" className=" h-[300px] w-[400px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{items.title}</h2>
          <p>{items.description}</p>
          <p>Price - {items.price}</p>
          <p>{items.category}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
