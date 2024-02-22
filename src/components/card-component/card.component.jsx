import React from "react";
import "./card.compnent.css"

const Card = (props) =>(
    <div className="card-container"   key={props.details.id}>
        <img src={`https://robohash.org/${props.details.id}/set=set2&size=180*180`} alt={props.details.name}/>
        <p>{props.details.name}</p>
        <p>{props.details.email}</p>
    </div>
)



export default Card;