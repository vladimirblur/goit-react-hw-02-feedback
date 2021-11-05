import PropTypes from 'prop-types';
import Notification from './Notification';
import s from './Statistic.module.css';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return positivePercentage ? (
    <ul className={s.list}>
      <li className={s.item}>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li className={s.item}>Positive feedback: {positivePercentage}</li>
    </ul>
  ) : (
    <Notification message="No feedback given" />
  );
};

export default Statistic;

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
