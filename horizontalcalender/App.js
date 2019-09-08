// @flow

import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';
import faker from 'faker';
import moment from 'moment';
import Calendar from './Calender'
import Events from './Events'

// Generate fake event data
const FAKE_EVENTS = (() => {
  const startDay = moment().subtract(5, 'days').startOf('day');
  return [...new Array(64)].map(_ => ({
    date: startDay.add(4, 'hours').clone(),
    title: faker.company.companyName(),
    description: faker.lorem.sentence(),
    // use random dimensions to get random urls
    image: faker.image.nightlife(Math.floor(Math.random() * 200) + 100, Math.floor(Math.random() * 200) + 100),
  }));
})();

// Filter events by date
const filterEvents = (date) =>
  FAKE_EVENTS.filter(event => event.date.isSame(date, 'day'));

export default class App extends React.Component {

  state = {
    events: filterEvents(moment()),
  };

  onSelectDate = (date) => {
    this.setState({ events: filterEvents(date) });
  };

  render() {
    const { events } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Calendar onSelectDate={this.onSelectDate} />
        <Events events={events} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F53B1',
    paddingTop: 20,
  },
});
