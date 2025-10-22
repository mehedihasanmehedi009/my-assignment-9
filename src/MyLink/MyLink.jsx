 import { NavLink } from "react-router";

const MyLink = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-purple-500 text-2xl font-bold"
          : `${className} text-2xl font-bold`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
