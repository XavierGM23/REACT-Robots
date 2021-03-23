import React from 'react';
import Card from '../Card/Card';

const CardList = ({robots}) => {

    // Mapeo los robots
    const cardArray = robots.map((robot, i) => {
        return (
            <Card
            key= {i}
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}  
            />
        );
    });


    // Retorno de la funcion Cardlist
    return (
        <div>
            {cardArray}
        </div>
    );
}

export default CardList;


