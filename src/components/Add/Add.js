function AddCard({ appendCard }) {
  return (
    <form>
      <label htmlFor="question">Your question:</label>
      <input type="text" id="question" name="question"></input>
      <label htmlFor="answer"></label>
      <input type="text" id="answer" name="answer"></input>
      <button type="submit">Add your question</button>
    </form>
  );
}

export { AddCard };
