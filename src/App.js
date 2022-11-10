import './App.css';
import React, { Component } from "react";
import { Controls } from './Components/Controls/Controls';
import { Statistics } from './Components/Statistics/Statistics';
import { Section } from './Components/Section/Section';
import {Notification} from './Components/Notification/Notification'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  total = 0;

  countTotalFeedback = () => {
    Object.values(this.state).reduce((acc, elem) => {
      // this.total = acc + elem;
      return this.total = acc + elem;
    }, 1)
  }

  countPositiveFeedbackPercentage = () => {
    if (this.state.good === 0 || this.total < 1) {
      return
    }
    return Math.round(100 / (this.total / this.state.good))
  }

  onLeaveFeedback = (event) => {
    this.setState(prevState => {
      let name = event.target.name
      return { [name]: prevState[name] + 1 };
    })
    this.countTotalFeedback();
  }




  render() {
    let showStatistics = true;

    if (this.total > 0) {
      showStatistics = false;
    }
    return (
      <div>
        <Section title="Please leave feedback">
          <Controls options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        {showStatistics ?
        <Section><Notification message="There is no feedback"/></Section> :
        <Section title="Statistics">
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.total} positivePercentage={this.countPositiveFeedbackPercentage} />
        </Section>}
      </div>
    )
  }

};

export { App };
