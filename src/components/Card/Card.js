import "./Card.css";
import { Tags } from "../Tags/Tag";

export default function Card({ question, answer, tagContent }) {
  console.log(tagContent);
  return (
    <section className="card">
      <div className="card__bookmark" aria-label="Bookmark">
        <i className="fa fa-bookmark"></i>
      </div>
      <span className="card__text">{question}</span>
      <button className="card__button">Show Answer</button>
      <span className="card__text">{answer}</span>
      <ul className="card__tags">
        {tagContent.map((entry) => {
          return <Tags key={entry} nameOfTag={entry} />;
        })}
      </ul>
    </section>
  );
}
