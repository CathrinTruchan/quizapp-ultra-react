import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import { useState } from "react";
import { CardsPages } from "./pages/CardsPages";
import { ProfilePage } from "./pages/ProfilePage";
import { CreatePage } from "./pages/CreatePage";
import { AddCard } from "./components/Add/Add";
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
  const [currentPage, setCurrentPage] = useState("home");
  const [cards, setCard] = useState(cardsArray);
  const filteredCards = cards.filter((card) => {
    return card.bookmarked === true;
  });

  function appendCard(question, answer, tag) {
    const newCard = Card();
    setCard(newCard);
  }

  return (
    <div>
      <Header />
      <main className="card-container">
        {currentPage === "home" && <CardsPages cards={cards} />}
        {currentPage === "bookmark" && <CardsPages cards={filteredCards} />}
        {currentPage === "profile" && <ProfilePage />}
        {currentPage === "add" && <CreatePage />}
        <AddCard />
      </main>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
