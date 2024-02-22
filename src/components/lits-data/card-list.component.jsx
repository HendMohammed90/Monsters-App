import React from "react";
import "./card-list.styles.css"
import Card from "../card-component/card.component";

const CardList = ({monsters})=>(
    <div className="card-list">
                {monsters.map((data) => {
                    return (
                        <Card details={data} key={data.id}/>
                    );
                })}
        </div>
);

export default CardList;
