import "./Navigation.css";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Navigation() {
  return (
    <nav className="menu">
      <NavElement to="/" end>
        <i className="fa fa-home"></i>
      </NavElement>
      <NavElement to="bookmark">
        <i className="fa fa-bookmark"></i>
      </NavElement>
      <NavElement to="add">
        <i className="fa fa-plus"></i>
      </NavElement>
      <NavElement to="profile">
        <i className="fa fa-user"></i>
      </NavElement>
      {/* <button
        onClick={() => setCurrentPage("home")}
        className={
          currentPage === "home"
            ? "menu__link menu__link--active"
            : "menu__link"
        }
      >
        <i className="fa fa-home"></i>
      </button>
      <button
        onClick={() => setCurrentPage("bookmark")}
        className={
          currentPage === "bookmark"
            ? "menu__link menu__link--active"
            : "menu__link"
        }
      >
        <i className="fa fa-bookmark"></i>
      </button>

      <button
        onClick={() => setCurrentPage("add")}
        className={
          currentPage === "add" ? "menu__link menu__link--active" : "menu__link"
        }
      >
        <i className="fa fa-plus"></i>
      </button>

      <button
        onClick={() => setCurrentPage("profile")}
        className={
          currentPage === "profile"
            ? "menu__link menu__link--active"
            : "menu__link"
        }
      >
        <i className="fa fa-user"></i>
      </button> */}
    </nav>
  );
}

const NavElement = styled(NavLink)`
  background: transparent;
  border: none;
  font-size: 1em;
  color: white;
  font-size: 26px;
  padding: 5px 15px;

  &:hover {
    color: #ffede1;
    cursor: pointer;
  }

  &.active {
    color: white;
    border-bottom: 2px solid white;
  }
`;
