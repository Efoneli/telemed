import { useEffect, useRef } from "react";
import app from "../../assets/images/portfolio-07.png";
import { NavLink, Link } from "react-router-dom";

const navlinks = [
  {
    path: "./home",
    display: "Home",
  },
  {
    path: "./doctors",
    display: "Find a Doctor",
  },
  {
    path: "./services",
    display: "Services",
  },
  {
    path: "./contact",
    display: "Contact",
  },
];

const Header = () => {
  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex tems-center justify-between">
          <div>
            <img src={app} alt="" />
          </div>
          <div className="navigation">
            <ul className="menu flex items-center gap-[2.7rem">
              {navlinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500]"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
