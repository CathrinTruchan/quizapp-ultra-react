import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import { useEffect, useState } from "react";
import { CardsPages } from "./pages/CardsPages";
import { ProfilePage } from "./pages/ProfilePage";
import { CreatePage } from "./pages/CreatePage";
import CardForm from "./components/CardForm/CardForm";
import { nanoid } from "nanoid";
import { Routes, Route } from "react-router-dom";
import { Card } from "./components/Card/Card";

const cardsArray = [
  {
    id: 1,
    question: "What is the name of Ross Gellers monkey?",
    answer: "Marcel",
    tag: ["#Friends", "#Animals", "#Ross"],
    bookmarked: true,
  },

  {
    id: 2,
    question: "In which coffeehouse works Rachel?",
    answer: "Central Perk",
    tag: ["#Friends", "Rachel", "Jobs"],
    bookmarked: false,
  },

  {
    id: 3,
    question: "Who is Chandler Bings roommate?",
    answer: "Joey Tribbiani",
    tag: ["#Friends", "#Chandler", "#roommate"],
    bookmarked: true,
  },

  {
    id: 4,
    question: "What's the name of Pheobe's twin sister?",
    answer: "Ursula",
    tag: ["#Friends", "#Pheobe", "#Family"],
    bookmarked: false,
  },
];

function App() {
  //const [currentPage, setCurrentPage] = useState("home");
  const [cards, setCards] = useState(() => {
    return JSON.parse(localStorage.getItem("cards")) ?? cardsArray;
  });
  const filteredCards = cards.filter((card) => {
    return card.bookmarked === true;
  });

  function toggleBookmark(cardID) {
    setCards(
      cards.map((card) =>
        cardID === card.id ? { ...card, bookmarked: !card.bookmarked } : card
      )
    );
  }

  function deleteCard(cardID) {
    const newCards = cards.filter((card) => cardID !== card.id);
    setCards(newCards);
    console.log(newCards);
  }

  function appendCard(question, answer, tags) {
    setCards([
      ...cards,
      {
        question,
        answer,
        tag: tags === "" ? [] : tags.split(",").map((tag) => tag.trim()),
        id: nanoid(),
        bookmarked: false,
      },
    ]);
  }

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  useEffect(() => {
    JSON.parse(localStorage.getItem("cards"));
  }, []);

  return (
    <div>
      <Header />
      <main className="card-container">
        <Routes>
          <Route
            path="/"
            element={
              <CardsPages
                cards={cards}
                onDeleteCard={deleteCard}
                onToggleBookmark={toggleBookmark}
              />
            }
          />
          <Route
            path="/bookmark"
            element={
              <CardsPages
                cards={filteredCards}
                onDeleteCard={deleteCard}
                onToggleBookmark={toggleBookmark}
              />
            }
          />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/add" element={<CreatePage appendCard={appendCard} />} />
        </Routes>

        {/* {cards.map(({ question, answer, tag, id, bookmarked }) => {
          return (
            <Card
              question={question}
              answer={answer}
              tagContent={tag}
              key={id}
              bookmarked={bookmarked}
              onDeleteCard={() => deleteCard(id)}
              onToggleBookmark={() => toggleBookmark(id)}
            />
          );
        })} */}
      </main>
      <Navigation />
    </div>
  );
}

export default App;
