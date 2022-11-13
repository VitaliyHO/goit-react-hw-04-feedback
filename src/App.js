import "./App.css";
import React, { useState, useEffect } from "react";
import { Controls } from "./Components/Controls/Controls";
import { Statistics } from "./Components/Statistics/Statistics";
import { Section } from "./Components/Section/Section";
import { Notification } from "./Components/Notification/Notification";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  let showStatistics = false;
  const options = ['good', 'neutral', 'bad']

  if (total > 0) {
    showStatistics = true;
  }

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);

  const countPositiveFeedbackPercentage = () => {
    if (good === 0 || total === 0) {
      return;
    }
    return Math.round(100 / (total / good));
  };

  const onLeaveFeedback = (event) => {
    let name = event.target.name;

    switch (name) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <Controls
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      {!showStatistics ? (
        <Section>
          <Notification message="There is no feedback" />
        </Section>
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      )}
    </div>
  );
}

export { App };
