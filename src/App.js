import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Card from "./components/Card/Card";

function App() {
  return (
    <div>
      <Header />
      <main className="card-container">
        <Card />
        <Card />
        <Card />
      </main>
      <Navigation />
    </div>
  );
}

export default App;
