import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-800 p-2 text-sm uppercase text-stone-200 sm:p-4 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
