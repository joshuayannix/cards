import Axios from 'axios';
import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';

class Deck extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      id: '', 
      remaining: null,
      cards: []
    };
    this.newCard = this.newCard.bind(this);
  };


  componentDidMount(){
    axios.get('https://deckofcardsapi.com/api/deck/new/shuffle').then(response => {
      console.log(response);
      this.setState({ 
        id: response.data.deck_id, 
        remaining: response.data.remaining
      });
    });
  }
  
  newCard(card){
    console.log('new card');
    // make a reqiest to the API, this time to https://deckofcardsapi.com/api/deck/${deck_id}/draw/
    // display a new card iamge, and add alt attribute

  };



//Every time the user clicks, the app should display a new card until the deck is empty. Make sure to tell the user there are no cards left!


  render(){
    return(
      <div>
        <button onClick={this.newCard}>Gimme a card!</button>
        <h1>{this.state.id}</h1>
        <h1>{this.state.remaining}</h1>
        <Card />
      </div>
    )
  }
}

export default Deck;