import React from "react"
import "./PersonalInfo.css"

function PersonalInfo() {
    return (
        <div>
            <div className="Identity">
                <img className="CvPhoto" src="./BigSmoke.png" alt="Big Smoke" width="200" height="200"/>
                <h1>Big Smoke</h1>
                <p><i>El Grando Smokio</i></p>
                <p>Nationality: American</p>
                <p>Place of birth: Los Santos</p>
            </div>
            <br></br>
            <hr></hr>
            <div className="Skills">
                <h3>Skills:</h3>
                <ul>
                    <li>Gunmanship</li>
                    <li>Charisma</li>
                    <li>Manipulation</li>
                    <li>Business management</li>
                    <li>Persuasion</li>
                    <li>Marksmanship</li>
                    <li>Weaponry expertise</li>
                    <li>Vast wealth and resources</li>
                </ul>
            </div>
            <br></br>
            <hr></hr>
            <div className="Hobbies">
                <h3>Hobbies:</h3>
                <ul>
                    <li>Eating junk food</li>
                    <li>Playing video games</li>
                    <li>Smoking crack</li>
                </ul>
            </div>
        </div>
    )
}

export default PersonalInfo;