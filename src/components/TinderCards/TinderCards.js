import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import data from "../../firebase";

function TinderCards() {
    const [users, setUsers] = useState([]);
    useEffect( () => {
        
        const unsubscribe = data.collection('users').onSnapshot(snapShot => {
            setUsers(snapShot.docs.map(doc => doc.data()))
        })

        return () => {
            unsubscribe();
        }

    }, []);
    
    return (
        <div>
            <div class="tinderCards_cardContainer">
                {users.map((user) => (
                    <TinderCard className="swipe"
                                key={user.name}
                                preventSwipe={["up", "down"]}
                    >
                        <div className="card"
                            style={{ backgroundImage: `url(${user.url})`}}
                        >
                            <h3>{ user.name }</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards;