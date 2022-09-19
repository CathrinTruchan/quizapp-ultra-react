import "./Card.css";

export default function Card() {
  return (
    <section className="card">
      <div className="card__bookmark" aria-label="Bookmark">
        <i className="fa fa-bookmark"></i>
      </div>
      <span className="card__text">
        What property changes the axis in flexbox?
      </span>
      <button className="card__button">Show Answer</button>
      <span className="card__text">The property "flex direction"</span>
      <ul className="card__tags">
        <li className="card__tagbox">#html</li>
        <li className="card__tagbox">#flexbox</li>
        <li className="card__tagbox">#css</li>
      </ul>
    </section>
  );
}
