function Grades({ grades }) {
  return (
    <div>
      <h2>Grades</h2>
      <ul>
        {grades.map((g, index) => (
          <li key={index}>
            {g.assignment}: {g.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Grades;
