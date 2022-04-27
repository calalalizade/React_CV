import React from "react"
import "./Contact.css"


function Contacts() {
    return (
        <div className="Contacts">
            <h2>Contacts</h2>
            <ul>
                <li>
                    <span>Address: </span>
                    <span><i>Ganton, Los Santos</i></span>
                </li>
                <li>
                    <span>Phone: </span>
                    <span><i>(555) 555-1234</i></span>
                </li>
                <li className="SocialMedia">
                    <span><img className="FacebookIcon" src="./facebook.png"/></span>
                    <span><i> Big Smoke</i></span>
                </li>
            </ul>
        </div>
    )
}

export default Contacts;