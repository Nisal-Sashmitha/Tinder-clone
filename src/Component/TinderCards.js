import { SwipeDown } from '@mui/icons-material';
import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';
import '../CSS/TinderCards.css'

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name:"Elon Musk",
            url:"https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
        },
        {
            name:"Jeff Bezos",
            url:"https://cdn.britannica.com/56/199056-050-CCC44482/Jeff-Bezos-2017.jpg"
        

        }
    ]);
    const swiped = (direction, nameToDelete) =>{
        console.log("removing:"+nameToDelete);
        //setLastDirection(direction);
    };

    const outOfFrame = (name) =>{
        console.log(name + "left the screen")
    };
  return (
    <div className='tinderCards'>
        <h1>Cards</h1>
        {
            people.map((person) =>(
                
                <TinderCard
                    className='swipe'
                    key={person.name}
                    onSwipe={(dir) => swiped(dir,person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)} 
                    preventSwipe={['up', 'down']}
                >
                    <div className='card'
                        style={{backgroundImage: `url(${person.url})`}}
                    >
                        <h3>{person.name}</h3>
                    </div>

                </TinderCard>
            ))
        }
      
    </div>
  )
}

export default TinderCards
