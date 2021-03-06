import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Day01 from './view/Day01/day01';

import React, {Component} from 'react'
import Day02 from "./view/Day02/Day02";

class learn30 extends Component {

  render() {
    return (
      <View style={styles.container}>
        {/*<Text style={styles.welcome}>*/}
        {/*  Welcome to React Native!*/}
        {/*</Text>*/}
        {/*<Text style={styles.instructions}>*/}
        {/*  To get started, edit index.android.js*/}
        {/*</Text>*/}
        {/*<Text style={styles.instructions}>*/}
        {/*  Shake or press menu button for dev menu*/}
        {/*</Text>*/}
        {/*<Day01/>*/}
        <Day02/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('learn30', () => learn30);
