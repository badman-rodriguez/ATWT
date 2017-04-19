/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Card from './deck_app/card.android.js';
import RandomCard from './deck_app/RandomCard.android.js';
import PokerHand from './deck_app/PokerHand.android.js';

export default class AtwtProject extends Component {
  render() {
    return (

      <View style={styles.container}>
          <Text style={styles.welcome}>
            Poker Hand
          </Text>
          <PokerHand></PokerHand>
      </View>
    /*  <View style={styles.container}>
        <Text style={styles.welcome}>
          Random Card
        </Text>
        <RandomCard></RandomCard>
      </View>*/

      /*  <View style={styles.container}>
          <Text style={styles.welcome}>
            Card
          </Text>
          <Card></Card>
        </View>*/
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin: 10,
    paddingTop: 20
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

AppRegistry.registerComponent('AtwtProject', () => AtwtProject);
