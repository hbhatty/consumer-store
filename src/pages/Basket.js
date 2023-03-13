import { useContext } from "react";
import BasketProduct from "../components/BasketProduct";
import Nav from "../components/Nav";
import { StoreContext } from "../context-reducer/StoreContext";

export const Basket = () => {
  const { products, total } = useContext(StoreContext);
  return (
    <div>
      <Nav />
      <div className="flex flex-row items-center justify-between mt-2 py-6 px-10 text-xl font-medium">
        <h3>Your Basket</h3>
        <p>Total: ${total}</p>
      </div>
        {products.map((product, i) => (
          <BasketProduct key={i} item={product} />
        ))}
    </div>
  );
};
