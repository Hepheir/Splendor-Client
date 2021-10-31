import React from "react";

import "./style.css";


function Coin(props) {
    const { children } = props;

    return (
        <div className="coin-container">
            <div className={`coin-art skin coins-${children}`} />
        </div>
    );
}


export default Coin;
