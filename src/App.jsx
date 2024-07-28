import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import "./App.css";

const App = () => {
  const feedbackData = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedback, setFeedback] = useState(() => {
    const feedbackDataStorage = localStorage.getItem("feedbackValue");
    return feedbackDataStorage ? JSON.parse(feedbackDataStorage) : feedbackData;
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const updateFeedback = (feedbackType) => {
    console.log("click", feedbackType);
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  const onResetAdd = () => {
    setFeedback(feedbackData);
  };

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem("feedbackValue", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        onResetAdd={onResetAdd}
        totalFeedback={totalFeedback}
      />
      <Notification totalFeedback={totalFeedback} />
      <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback}
      />
    </div>
  );
};

export default App;
