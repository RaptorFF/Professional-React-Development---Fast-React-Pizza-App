import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  const className =
    "rounded-full bg-yellow-500 px-4 py-2 text-center font-medium text-gray-800 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 sm:px-6 sm:py-4";
  if (to) {
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );
  }
  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
