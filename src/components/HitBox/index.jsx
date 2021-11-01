import React from "react";

import "./style.css";


function HitBox(props) {
    const { children, onClick } = props;
    return (
        <div className="hit-box" onClick={onClick}>
            {children}
        </div>
    );
}


export default HitBox;
