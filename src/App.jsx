import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Detail from "./components/Detail";

const App = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`);
    const data = await api.json();
    setItems(data);
  };
  return (
    <div>
      <Navbar setItems={setItems} items={items} />
      <Routes>
        <Route path="/" element={<Products items={items} />} />
        <Route path="/details/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
