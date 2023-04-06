import React from 'react';
import './Card.css'
const Card = (props) => {
    let propsitem=props.values;
    return (
        <div className='card'>
            <img src={propsitem.img}style={{height:"286px",width:"286px"}}/>
            <h4>{propsitem.name}</h4>
            <h6>Price: {propsitem.price}</h6>
            <h6>Ratings:{propsitem.ratings}</h6>
            <button onClick={()=>props.handler(propsitem)} className='button' style={{backgroundColor:"pink",width:"100%"}}>Add to Cart</button>

        </div>
    );
};

export default Card;