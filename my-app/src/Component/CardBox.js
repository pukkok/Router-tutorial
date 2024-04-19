import React from "react";
import './CardBox.css'
import { Link } from "react-router-dom";

function CardBox ({cards, children}) {
    return(
        <div className="Card-box">
           
            {cards && cards.map((card, id)=>{
                return(
                    <div key={id} className="Card">
                        <Link to={`/${card.name}`}>
                            <div className="img-box">
                                <img src={'imgs/'+card.src} id={card.id}/>
                            </div>
                            <div className="text-box">
                                <p>{card.name}</p>
                            </div>
                        </Link>
                    </div>
                )
            })}
            {children}
        </div>
    )
}
export default CardBox