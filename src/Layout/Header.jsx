import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <div>
      <div className="flex justify-between items-center border-b-2">
        <div className="flex gap-4">
          <h1 className="font-bold">LOGO</h1>
        </div>
        <nav className="flex gap-8 py-4">
          <NavLink to={"/"}>home</NavLink>
          <NavLink to={"/about"}>about</NavLink>
          <NavLink to={"/contact"}>contact</NavLink>
          <div className="flex gap-1">
            <NavLink to={"/basket"}>basket</NavLink>:
            {<h1>{data.length}</h1>}
          </div>
        </nav>
        <a href="https://www.instagram.com/" target="_blank">
          instagram
        </a>
      </div>
    </div>
  );
};

export default Header;
