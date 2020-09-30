import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';
const API_URL = 'https://deckofcardsapi.com/api/deck/'

class Deck extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      deck: null,
      drawn: []
    };
    this.getCard = this.getCard.bind(this);
  };

  async componentDidMount() {
    let deck = await axios.get(`${API_URL}new/shuffle/`);
    console.log(deck);
    this.setState({ deck: deck.data });
  };

  async getCard() {
    let deck_id = this.state.deck.deck_id;
    
    try {
      let cardUrl = `${API_URL}/${deck_id}/draw`;
      let cardRes = await axios.get(cardUrl);
      if (!cardRes.data.success) {
        throw new Error('No card remaining!')
      }
      let card = cardRes.data.cards[0];
      this.setState(st => ({
        drawn: [
          ...st.drawn, 
          {
            id: card.code,
            image: card.image,
            name: `${card.value} of ${card.suit}`
          }
        ]
      }));
    } catch (err) {
      alert(err)
    }
  }
  

//Every time the user clicks, the app should display a new card until the deck is empty. Make sure to tell the user there are no cards left!


  render(){
    return(
      <div>
        <h1>Card Dealer</h1>
        <button onClick={this.getCard}>Gimme a card!</button>
        {this.state.drawn.map(c => (
          <Card 
            key={c.id}
            name={c.name}
            image={c.image}
          />
        ))}
      
      </div>
    )
  }
}

export default Deck;