const Notification = ({ totalFeedback }) => {
  return totalFeedback >= 1 ? (
    ""
  ) : (
    <>
      <p>No feedback yet</p>
    </>
  );
};

export default Notification;
