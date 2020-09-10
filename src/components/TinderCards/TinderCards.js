import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Jesse Hammer',
            url: 'https://images.unsplash.com/photo-1598935133164-4f56a014a4af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        },
        {
            name: 'Roman Denisenko',
            url: 'https://images.unsplash.com/photo-1598904335641-d104b1856d15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQ3MzMyfQ&auto=format&fit=crop&w=800&q=60'
        }
    ]);

    
    return (
        <div>
            <h1>Tinder Cards</h1>
            {people.map((person) => (
                <TinderCard className="swipe"
                            key={person.name}
                            preventSwipe={["up", "down"]}
                >
                    <div className="card"
                         style={{ backgroundImage: `url(${person.url})`, width: "300px", height: "400px", backgroundSize: "cover",
                                  backgroundRepeat: "no-repeat"  
                        }}
                    >
                        <h3>{ person.name }</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    )
}

export default TinderCards;