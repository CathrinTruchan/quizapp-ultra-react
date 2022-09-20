function Tags({ nameOfTag }) {
  return (
    <li className="card__tagbox" key={nameOfTag}>
      {nameOfTag}
    </li>
  );
}

export { Tags };
