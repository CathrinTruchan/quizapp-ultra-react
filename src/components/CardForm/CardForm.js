import { useNavigate } from "react-router";

export default function CardForm({ appendCard }) {
  const navigate = useNavigate();

  function createFormData(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { question, answer, tags } = Object.fromEntries(formData);
    appendCard(question, answer, tags);
    navigate("/");
  }

  return (
    <form onSubmit={createFormData}>
      <label htmlFor="question">Your question:</label>
      <input type="text" id="question" name="question" />
      <label htmlFor="answer"></label>
      <input type="text" id="answer" name="answer" />
      <label htmlFor="tags">Your tags:</label>
      <input type="text" id="tags" name="tags" />
      <button type="submit">Add your question</button>
    </form>
  );
}
