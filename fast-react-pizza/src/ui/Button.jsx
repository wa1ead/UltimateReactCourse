import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "inline-block rounded-full bg-yellow-400 font-semibold uppercase text-stone-800 transition-colors duration-200 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-1 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " text-sm tracking-wide px-4 py-3 md:px-6 md:py-4",
    small: base + " text-xs tracking-small px-2 py-1 md:px-4 md:py-2",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}
export default Button;
