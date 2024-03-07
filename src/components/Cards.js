import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these epic destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
            src="tranquil-scene-majestic-waterfall-forest-generated-by-ai.jpg"
            text="Explore the hidden waterfall deep inside the Amazon Jungle"
            label="Adventure"
            path="/services/activity"
            ></CardItem>
            <CardItem 
            src="speed-boat-andaman-sea-phi-phi-island-krabi-thailand.jpg"
            text="Travel through the Islands of Bali in a Private Cruise"
            label="Luxury"
            path="/services/activity"
            ></CardItem>
          </ul>
          <ul className='cards__items'>
            <CardItem 
            src="side-view-friends-playing-soccer.jpg"
            text="Experience Football on Top of the Himalayan Mountains"
            label="Adventure"
            path="/services/activity"
            ></CardItem>
            <CardItem 
            src="vertical-shot-sailing-boat-ocean-sunset.jpg"
            text="Set a Sail in the Atlantic ocean visiting Uncharted Waters"
            label="Mystery"
            path="/services/activity"
            ></CardItem>
            <CardItem 
            src="arab-people-with-camel-caravan.jpg"
            text="Ride through the Sahara Desert on a guided camel tour"
            label="Adrenaline"
            path="/services/activity"
            ></CardItem>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;