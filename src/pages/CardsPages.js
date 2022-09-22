import { Card } from "../components/Card/Card";

function CardsPages({ cards }) {
  return (
    <div className="card-container">
      {cards.map(({ question, answer, tag, id, bookmarked }) => {
        return (
          <Card
            question={question}
            answer={answer}
            tagContent={tag}
            key={id}
            bookmarked={bookmarked}
          />
        );
      })}
    </div>
  );
}

export { CardsPages };
