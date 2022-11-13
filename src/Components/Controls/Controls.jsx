import PropTypes from "prop-types";
import "./Controls.css";

export const Controls = ({ good, neutral, bad, onLeaveFeedback }) => {
  // console.log(options);
  const options = [good, neutral, bad]
  return (
    <div>
      {options.map((elem) => {
        return (
          <button
            onClick={onLeaveFeedback}
            type="button"
            name={elem}
            key={elem}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

Controls.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
