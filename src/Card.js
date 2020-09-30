import React from 'react'

class Card extends React.Component {
  render() {
    return(
      <div>
        <img src={this.props.image} alt={this.props.name} className='Card'/>
      </div>
    )
  }
}

export default Card;