import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'

function TinderCards() {

  const [people, setPeople] = useState([
    {
      name: 'Elon Musk',
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg'
    },
    {
      name: 'Jeff Bezos',
      url: 'https://p7z2w8n8.rocketcdn.me/wp-content/uploads/2020/09/jeff-bezos-a-historia-do-homem-mais-rico-do-mundo-1-scaled.jpg'
    }
  ]);

  const swiped = (direction, nameToDelete) => {
    //setLastDirection(direction)
  }

  const outOfFrame = name => console.log(`${name} left the screen`)


  return (
    <div className='tinderCards'>
      <div className="cardContainer">
        {people.map(person => (
          <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}>
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className='card'>
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards
