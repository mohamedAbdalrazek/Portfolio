import React from "react";
    

function Start(props) {

    document.onkeydown = function (e) {
        if (e.key === "Enter") {
            props.toggleStart();

        }
    };
    return (
        <div className="start">
            <h1>HI</h1>
            <h3>Welcome To My Portfolio</h3>
            <p>to start your journey press <span onClick={props.toggleStart}>Enter</span></p>
        </div>
    );
}
export default Start;
