import React from "react";
import Nav from "../components/Nav";
import { Product } from "../components/Product";
import { store } from "../data";

export const Home = () => {
  return (
    <div>
      <Nav />
      <h2 className="text-4xl tracking-wide py-4 
      pl-8">New In</h2>
      <div className="flex flex-col items-center lg:grid lg:grid-cols-3">
        {store.map((item, i) => (
          <Product key={i} item={item} />
        ))}
      </div>
    </div>
  );
};
