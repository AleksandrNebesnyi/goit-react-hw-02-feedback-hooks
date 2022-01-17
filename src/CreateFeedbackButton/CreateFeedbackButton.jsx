import s from './CreatefeedbackButton.module.css';
import PropTypes from 'prop-types';

function CreatefeedbackButton({ options, clickButtonFeedback }) {
  return options.map(elem => (
    <button
      key={elem}
      className={s.button}
      type="button"
      name={elem}
      onClick={clickButtonFeedback}
    >
      {elem}
    </button>
  ));
}

CreatefeedbackButton.propTypes = {
  good: PropTypes.string,
  neutral: PropTypes.string,
  bad: PropTypes.string,
  clickButtonFeedback: PropTypes.func,
};

export default CreatefeedbackButton;
