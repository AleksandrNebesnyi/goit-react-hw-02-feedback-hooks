import { useState, useEffect } from 'react';
import Section from './Section/Section.jsx';
import Statistics from './Statistics/Statistics.jsx';
import CreatefeedbackButton from './CreateFeedbackButton/CreateFeedbackButton.jsx';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickButton = event => {
    const name = event.target.name;
    console.log(event.target);
    console.log(name);
    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (good === 0) return 0;
    return Math.floor((good / countTotalFeedback()) * 100);
  };

  // useEffect(() => {
  //   const countTotalFeedback = () => {
  //     return good + neutral + bad;
  //   };
  // }, [good, neutral, bad]);

  return (
    <>
      <Section title="Please Leave Feedback">
        <CreatefeedbackButton
          good="good"
          neutral="neutral"
          bad="bad"
          clickButtonFeedback={handleClickButton}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </>
  );
};

export default App;
