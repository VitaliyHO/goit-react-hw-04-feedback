import PropTypes from "prop-types";

export const Controls = ({ options, onLeaveFeedback }) => {
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
