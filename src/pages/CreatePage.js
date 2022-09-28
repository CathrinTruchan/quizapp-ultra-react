import CardForm from "../components/CardForm/CardForm";

function CreatePage({ appendCard }) {
  return (
    <section>
      <h2>Create Page</h2>
      <CardForm appendCard={appendCard} />
    </section>
  );
}

export { CreatePage };
