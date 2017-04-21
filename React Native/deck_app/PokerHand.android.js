import React, { Component } from 'react';
import { AppRegistry, Image, Button, View, StyleSheet, ListView, Text } from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: 60,
    height: 100
  },
  listStyle: {
    flexWrap: 'wrap',
    flexDirection:'row'
  },
  container: {
    paddingTop: 5
  },
  buttonThing: {
    width: 100,
    marginBottom: 10
  },
  newDeck: {
    marginBottom: 20
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  textStyle: {
    height:50,
    backgroundColor: '#CCCCCC'
  }
});

export default class PokerHand extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
        currentHand: ds.cloneWithRows ([]),
        cardDeckID: '',
        showText: false,
        showCardText: false
      }
      this.getCard = this.getCard.bind(this);
      this.getDeck = this.getDeck.bind(this);
  }

  getCard() {
    var settings = {
      method: 'GET',
      mode: 'cors',
      cache: 'default'
    }
    var dynamicList = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var cardArray = [];
    var self = this;

    self.setState({
      showText: false,
      showCardText: true
    });

    fetch('https://deckofcardsapi.com/api/deck/' + this.state.cardDeckID + '/draw/?count=5', settings)
      .then((response) => {
        var jsonObject = JSON.parse(response._bodyInit);
        if(jsonObject.cards != undefined) {

          jsonObject.cards.forEach(function(value, index) {
            cardArray.push({
              uri:  value.image
            });
            console.log(value);
          });
        }
        self.setState({
            currentHand: dynamicList.cloneWithRows(cardArray)
        });
      });
  }

  getDeck() {
    var settings = {
      method: 'GET',
      mode: 'cors',
      cache: 'default'
    }
    var dynamicList = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var cardArray = [];
    var self = this;

    self.setState({
        showCardText: false,
        showText: true
    });
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1', settings)
      .then((response) => {
        var jsonObject = JSON.parse(response._bodyInit);
        self.setState({
            cardDeckID: jsonObject.deck_id
        });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.getDeck} style="{styles.newDeck}" title="Get New Deck" />
        <Button onPress={this.getCard} styles="{styles.buttonThing}"title="Get New Hand" />

        <ListView
          dataSource={this.state.currentHand}
          horizontal= {true}
          renderRow={(rowData) => <Image source={rowData} style={styles.card} resizeMode={'contain'} />}
          enableEmptySections={true}
        />
        {this.state.showText &&
          <Text style={styles.textStyle}>
            Loading The Card Array. Give it a second
          </Text>
        }
        {this.state.showCardText &&
          <Text style={styles.textStyle}>
            Loading 5 Cards. Give it a second
          </Text>
        }
      </View>
    );
  }
}


AppRegistry.registerComponent('PokerHand', () => PokerHand);
