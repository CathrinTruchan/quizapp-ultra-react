import "./Card.css";
import { Tags } from "../Tags/Tag";
import { useState } from "react";

function Card({
  question,
  answer,
  tagContent,
  bookmarked,
  onDeleteCard,
  onToggleBookmark,
}) {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <section className="card">
      <div
        onClick={onToggleBookmark}
        className="card__bookmark"
        aria-label="Bookmark"
      >
        <i
          className={
            bookmarked
              ? "fa fa-bookmark card__bookmark--active"
              : "fa fa-bookmark"
          }
        ></i>
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
      <button onClick={onDeleteCard}>Delete</button>
    </section>
  );
}

export { Card };
