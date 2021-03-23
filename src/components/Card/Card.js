import React from 'react';
import './Card.styles.css';

const Card = (props) => {
    const {name, email, id} = props;

    return (
        <div className="dib br3 pa3 ma3 grow tc shadow-5 card">
            <img alt='robots' src={`https://robohash.org/${id}test?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;