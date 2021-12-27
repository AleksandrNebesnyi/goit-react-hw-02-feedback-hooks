import { Component } from "react";
import s from './Statistics.module.css'
import PropTypes from 'prop-types';


class Statistics extends Component {
    render() {
      const { good, neutral, bad, total, positivePercentage } = this.props;
      return (
        <div>
          <p className={s.item}>Good: <span className={s.value}>{good}</span></p>
          <p className={s.item}>Neutral: <span  className={s.value}>{neutral}</span> </p>
          <p className={s.item}>Bad: <span className={s.value}> {bad}</span> </p>
          <p className={s.item}>Total: <span className={s.value}> {total()}</span> </p>
          <p className={s.item}> Percentage: <span className={s.value}>{positivePercentage()}</span>  %
          </p>
        </div>
      );
    }
  }


Statistics.propTypes ={
good:PropTypes.number,
neutral:PropTypes.number,
bad:PropTypes.number,
total:PropTypes.func,
positivePercentage:PropTypes.func,

}


export default Statistics;