import classNames from "classnames";
import React from "react";

import "./style.css";


function Coin(props) {
    const { isActive, children } = props;

    return (
        <div className={classNames(
            "coin-container",
            {"active": isActive},
        )}>
            <div className={`coin-art skin coins-${children}`} />
        </div>
    );
}


export default Coin;
