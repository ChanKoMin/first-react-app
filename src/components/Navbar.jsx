import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setItems, items }) => {
  const [search, setSearch] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const filterProduct = items.filter((item) =>
      item.title.toLowerCase().includes(search)
    );
    setItems(filterProduct);
  };
  return (
    <div className="navbar flex justify-around bg-base-100">
      <div className="">
        <Link to={"/"}>
          <h1 className="normal-case text-xl">Shopping</h1>
        </Link>
      </div>
      <form className="form-control" onSubmit={submitHandler}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="input input-bordered"
        />
      </form>
    </div>
  );
};

export default Navbar;
