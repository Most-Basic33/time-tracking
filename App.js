import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import EditableTimer from './components/EditableTimer'
import ToggleableTimerForm from './components/ToggleableTimerForm'


export default class App extends React.Component {


  render() {
    return (
      <View style={styles.appContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Timers</Text>
        </View>
        <ScrollView style={styles.timerList}>
          <ToggleableTimerForm isOpen />
          <EditableTimer
            id='1'
            title="Find a Travelers"
            project="Life Chores"
            elapsed="369666"
            isRunning
          />
          <EditableTimer
            id='2'
            title='Roll Trees'
            project='After Work'
            elapsed='3339996'
            editFormOpen
          />

        </ScrollView>
        <Text>Hello</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D6D7DA'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'

  },
  timerList: {
    paddingBottom: 15
  }
});
