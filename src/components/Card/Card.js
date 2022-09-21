import "./Card.css";
import { Tags } from "../Tags/Tag";
import { useState } from "react";

export default function Card({ question, answer, tagContent }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <section className="card">
      <div className="card__bookmark" aria-label="Bookmark">
        <i className="fa fa-bookmark"></i>
      </div>
      <span className="card__text">{question}</span>
      <button
        onClick={() =>
          setShowAnswer((previousShowAnswer) => !previousShowAnswer)
        }
        className="card__button"
      >
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>
      <span className="card__text">{showAnswer ? answer : ""}</span>
      <ul className="card__tags">
        {tagContent.map((entry) => {
          return <Tags key={entry} nameOfTag={entry} />;
        })}
      </ul>
    </section>
  );
}
