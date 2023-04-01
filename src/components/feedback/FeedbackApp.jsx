import { Component, useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

const FeedbackApp = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = feedback => {
    if (feedback === 'good') {
      setGood(good + 1);
    } else if (feedback === 'neutral') {
      setNeutral(neutral + 1);
    } else if (feedback === 'bad') {
      setBad(bad + 1);
    } else {
      console.log('Something went wrong, wrong feedback');
    }
  };

  const total = good + neutral + bad;
  const positivePercentage = Math.round((good / total) * 100);
  const feedbackOptions = ['good', 'neutral', 'bad'];

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    </div>
  );
};

export default FeedbackApp;
