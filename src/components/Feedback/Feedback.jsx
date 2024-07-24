const Feedback = ({ good, neutral, bad, totalFeedback, showFeedbacks }) => {
  return (
    showFeedbacks && (
      <div>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {totalFeedback}</li>
          <li>Positive: 80%</li>
        </ul>
      </div>
    )
  );
};

export default Feedback;
