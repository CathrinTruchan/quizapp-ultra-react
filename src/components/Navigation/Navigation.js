import "./Navigation.css";

export default function Navigation({ currentPage, setCurrentPage }) {
  // const [currentPage, setCurrentPage] = useState("home");

  return (
    <nav className="menu">
      <button
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
      </button>
    </nav>
  );
}
