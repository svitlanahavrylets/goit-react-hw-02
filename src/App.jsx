import { useState } from "react";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import "./App.css";

const App = () => {
  const [reviews, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const total = reviews.good + reviews.neutral + reviews.bad;

  const onReviewAdd = (reviewsName) => {
    console.log("click", reviewsName);
    setReviews({ ...reviews, [reviewsName]: reviews[reviewsName] + 1 });
  };

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options
        onReviewAdd={onReviewAdd}
        // onResetAdd={onResetAdd}
      />
      <Feedback
        good={reviews.good}
        neutral={reviews.neutral}
        bad={reviews.bad}
        total={total}
      />
    </div>
  );
};

export default App;
