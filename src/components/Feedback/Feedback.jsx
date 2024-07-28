import css from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  return (
    totalFeedback >= 1 && (
      <div>
        <ul className={css.feedbackList}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {totalFeedback}</li>
          <li>Positive: {positiveFeedback}%</li>
        </ul>
      </div>
    )
  );
};

export default Feedback;
