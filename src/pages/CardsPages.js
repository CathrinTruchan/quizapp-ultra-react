import { Card } from "../components/Card/Card";

function CardsPages({ cards, onDeleteCard, onToggleBookmark }) {
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
            onDeleteCard={() => onDeleteCard(id)}
            onToggleBookmark={() => onToggleBookmark(id)}
          />
        );
      })}
    </div>
  );
}

export { CardsPages };
