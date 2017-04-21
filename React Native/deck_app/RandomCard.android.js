import React, { Component } from 'react';
import { AppRegistry, Image, Button, View } from 'react-native';

export default class RandomCard extends Component {
  constructor(props) {
    super(props);
      this.state = {
        currentCardUrl: {
          uri: 'http://deckofcardsapi.com/static/img/QC.png'
        }
      }
      this.getCard = this.getCard.bind(this);
  }

  getCard() {
    var settings = {
      method: 'GET',
      mode: 'cors',
      cache: 'default'
    }
    console.log(this);

    var self = this;
      fetch('https://deckofcardsapi.com/api/deck/fbkqny9uknvr/draw/?count=1', settings)
      .then((response) => {
        var jsonObject = JSON.parse(response._bodyInit);
          if(jsonObject.cards != undefined) {
            self.setState({
                currentCardUrl: {
                  uri: jsonObject.cards[0].image
                }
            });
          }
      });
  }

  render() {
    return (
      <View>
        <Button onPress={this.getCard} title="Get A Card" />
        <Image source={this.state.currentCardUrl} style={{width: 320, height: 450}}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('RandomCard', () => RandomCard);
