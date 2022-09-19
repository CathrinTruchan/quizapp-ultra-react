import "./Navigation.css";

export default function Navigation() {
  return (
    <nav className="menu">
      <button className="menu__link menu__link--active">
        <i className="fa fa-home"></i>
      </button>

      <button className="menu__link">
        <i className="fa fa-bookmark"></i>
      </button>

      <button className="menu__link">
        <i className="fa fa-plus"></i>
      </button>

      <button className="menu__link">
        <i className="fa fa-user"></i>
      </button>
    </nav>
  );
}
