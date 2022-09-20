import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Card from "./components/Card/Card";

const cards = [
  {
    id: 1,
    question: "What is the name of Ross Gellers monkey?",
    answer: "Marcel",
    tag: ["#Friends", "#Animals", "#Ross"],
  },

  {
    id: 2,
    question: "In which coffeehouse works Rachel?",
    answer: "Central Perk",
    tag: ["#Friends", "Rachel", "Jobs"],
  },

  {
    id: 3,
    question: "Who is Chandler Bings roommate?",
    answer: "Joey Tribbiani",
    tag: ["#Friends", "#Chandler", "#roommate"],
  },

  {
    id: 4,
    question: "What's the name of Pheobe's twin sister?",
    answer: "Ursula",
    tag: ["#Friends", "#Pheobe", "#Family"],
  },
];

function App() {
  return (
    <div>
      <Header />
      <main className="card-container">
        {cards.map(({ question, answer, tag, id }) => {
          return (
            <Card
              question={question}
              answer={answer}
              tagContent={tag}
              key={id}
            />
          );
        })}
      </main>
      <Navigation />
    </div>
  );
}

export default App;
