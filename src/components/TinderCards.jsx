import React, { useState } from 'react'
import './TinderCards.css'

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'Elon Musk',
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg'
    }]);

  return (
    <div className='tinderCards'>
      {people.map(person => <h1>{person.name}</h1>)}

    </div>
  )
}

export default TinderCards
