import "./Navigation.css";

export default function Navigation() {
  return (
    <nav className="menu">
      <div className="menu__link menu__link--active">
        <i className="fa fa-home"></i>
      </div>

      <div className="menu__link">
        <i className="fa fa-bookmark"></i>
      </div>

      <div className="menu__link">
        <i className="fa fa-plus"></i>
      </div>

      <div className="menu__link">
        <i className="fa fa-user"></i>
      </div>
    </nav>
  );
}
