import css from "./Options.module.css";

const Options = ({ updateFeedback, onResetAdd, totalFeedback }) => {
  return (
    <div className={css.optionsBtn}>
      <button
        type="button"
        className={css.feedbackBtn}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        type="button"
        className={css.feedbackBtn}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        type="button"
        className={css.feedbackBtn}
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback ? (
        <button
          type="button"
          className={css.feedbackBtn}
          onClick={() => onResetAdd("reset")}
        >
          Reset
        </button>
      ) : (
        ""
      )}
    </div>
  );
};
export default Options;
