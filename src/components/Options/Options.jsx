const Options = ({ updateFeedback, onResetAdd, totalFeedback }) => {
  return (
    <>
      <button type="button" onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button type="button" onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button type="button" onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback ? (
        <button type="button" onClick={() => onResetAdd("reset")}>
          Reset
        </button>
      ) : (
        ""
      )}
    </>
  );
};
export default Options;
