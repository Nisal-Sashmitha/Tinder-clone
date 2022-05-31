import { SwipeDown } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card';
import '../CSS/TinderCards.css';
import axios from './../axios';

function TinderCards() {
    const [people, setPeople] = useState([]);


    useEffect(()=>{
        async function fetchData(){
            const req = await axios.get("/tinder/card/");
            setPeople(req.data);
        }
        fetchData();
    },[])
    const swiped = (direction, nameToDelete) =>{
        console.log("removing:"+nameToDelete);
        //setLastDirection(direction);
    };

    const outOfFrame = (name) =>{
        console.log(name + "left the screen")
    };
  return (
    <div className='tinderCards'>
        <div className='tinderCards__cardContainer'>
    
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
                        style={{backgroundImage: `url(${person.imgUrl})`}}
                    >
                        <h3>{person.name}</h3>
                    </div>

                </TinderCard>
            ))
        }
      
        </div>
    </div>    
  )
}

export default TinderCards
