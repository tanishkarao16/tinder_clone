
import React, {useState} from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";

function TinderCards() {

    const [people, setpeople] = useState([
        {
            name: "Tanishka Rao",
            url: "/image/tanu.jpeg"
        },
        {
            name: "Swasthik Shetty",
            url: "/image/swas.jpeg"
        },
     ]);

     const swiped = ( direction, nameToDelete) => {
        console.log("removing: "+nameToDelete);
     }

     const outOfFrame =(name) => {
        console.log(name+ " left the screen!");
     }

  return  (
  <div className="tinderCards">
    <div className="tinderCards_cardContainer">

    {people.map((person) => (  //person is obj created
        <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up","down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
        >

           <div
           style={{backgroundImage: `url(${person.url})`}}
           className="card"
           >
            <h3>{person.name}</h3>
           </div>


        </TinderCard>
    ))}
      </div>
    </div>
  )
  
}

export default TinderCards

