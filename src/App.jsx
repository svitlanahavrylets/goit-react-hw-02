import { useState } from "react";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import "./App.css";

const App = () => {
  const [feedback, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const [showFeedbacks, setShowFeedbacks] = useState(false);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const updateFeedback = (feedbackType) => {
    console.log("click", feedbackType);
    setReviews({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
    setShowFeedbacks(!showFeedbacks);
  };

  // const toggleShowFeedbacks = () => {
  //   setShowFeedbacks(!showFeedbacks);
  // };

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options
        updateFeedback={updateFeedback}
        // onResetAdd={onResetAdd}
      />
      <Notification />
      <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        totalFeedback={totalFeedback}
        showFeedbacks={showFeedbacks}
      />
    </div>
  );
};

export default App;
