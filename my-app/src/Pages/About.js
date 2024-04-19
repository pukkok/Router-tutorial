import React from "react";
import aboutData from "../Data/aboutData";
import './About.css'

function About(){
    const {textA, textB, address, email, phone, sns} = aboutData

    return(
        <div className="About">
            <div className="img-box">
                <img src={'/about-img/IMG_7460_BW.jpg'}/>
            </div>
            <div className="text-box">
                <div className="comment">
                    <p>{textA}</p>
                    <p>{textB}</p>
                </div>
                <div className="info">
                    <p><strong>Address :</strong> <br/> {address}</p>
                    <p><strong>Email :</strong> <br/> {email}</p>
                    <p><strong>Phone :</strong> <br/> {phone}</p>
                    <p><strong>instagram :</strong> <br/> {sns}</p>
                </div>
            </div>
        </div>
    )
}
export default About