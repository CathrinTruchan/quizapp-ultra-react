import Card from "../components/Card/Card";

function CardsPages({ cards }) {
  return (
    <div className="card-container">
      {cards.map(({ question, answer, tag, id, bookmarked, setBookmark }) => {
        return (
          <Card
            question={question}
            answer={answer}
            tagContent={tag}
            key={id}
            bookmarked={bookmarked}
            onBookmark={setBookmark}
          />
        );
      })}
    </div>
  );
}

export { CardsPages };
