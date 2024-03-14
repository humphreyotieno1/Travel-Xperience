import React from 'react';
import CardItem from '../CardItem';
import Footer from '../Footer';

import '../../App.css';
import '../Cards.css';
import './Services.css';

function Services() {
  return (
    <>
      <h1 className='services'>SERVICES</h1>
      <section className='heading'>
        <h2>Activities we think you would enjoy</h2>
        <div className='services-container'>
          <div className='services-wrapper'> 
          <ul className='services-items'>
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
      </section>

      <section className='heading'>
        <h2>Explore these destinations</h2>
        <div className='services-container'>
          <div className='services-wrapper'> 
          <ul className='services-items'>
            <CardItem 
              src="budapest.jpg"
              text="Budapest, Hungary"
              label="Europe"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="lisbon.jpg"
              text="Lisbon, Portugal"
              label="Europe"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="berlin.jpg"
              text="Berlin, Germany"
              label="Europe"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="london.jpg"
              text="London, England"
              label="Europe"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="delft.jpg"
              text="Delft, Holland"
              label="Europe"
              path="/services/activity"
            ></CardItem>
          </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  
  
  );
}

export default Services;
