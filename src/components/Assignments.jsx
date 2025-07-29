function Assignments({ assignments }) {
  return (
    <div>
      <h2>Assignments</h2>
      <ul>
        {assignments.map((a, index) => (
          <li key={index}>
            {a.title} — Due: {a.dueDate} — Status: {a.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Assignments;
