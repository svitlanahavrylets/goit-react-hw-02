const Options = ({ onReviewAdd, onResetAdd }) => {
  return (
    <>
      <button type="button" onClick={() => onReviewAdd("good")}>
        Good
      </button>
      <button type="button" onClick={() => onReviewAdd("neutral")}>
        Neutral
      </button>
      <button type="button" onClick={() => onReviewAdd("bad")}>
        Bad
      </button>
      <button type="button" onClick={() => onResetAdd("reset")}>
        Reset
      </button>
    </>
  );
};
export default Options;
