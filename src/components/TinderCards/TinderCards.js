import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Jesse Hammer',
            url: 'https://images.unsplash.com/photo-1598935133164-4f56a014a4af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        },
        {
            name: 'Roman Denisenko',
            url: 'https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
        },
        {
            name: 'Mihah Aloexo',
            url: 'https://images.unsplash.com/photo-1511242962912-ba18dcf39f30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
        }
    ]);

    
    return (
        <div>
            <h1>Tinder Cards</h1>
            <div class="tinderCards_cardContainer">
                {people.map((person) => (
                    <TinderCard className="swipe"
                                key={person.name}
                                preventSwipe={["up", "down"]}
                    >
                        <div className="card"
                            style={{ backgroundImage: `url(${person.url})`}}
                        >
                            <h3>{ person.name }</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards;