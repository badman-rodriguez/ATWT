import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class Card extends Component {
  render() {
    let pic = {
      uri: 'https://deckofcardsapi.com/static/img/KH.png'
    };
    return (
      <Image source={pic} style={{width: 320, height: 450}}/>
    );
  }
}

AppRegistry.registerComponent('Card', () => Bananas);
