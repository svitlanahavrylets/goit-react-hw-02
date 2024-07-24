const Feedback = (good, neutral, bad, total) => {
  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive: 80%</li>
      </ul>
    </div>
  );
};

export default Feedback;
