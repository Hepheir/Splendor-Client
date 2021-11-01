import classNames from "classnames";
import React from "react";

import "./style.css";


function CounterBadge(props) {
    const { children, value } = props;
    return (
        <div className={classNames(
            "counter-badge",
            {"depleted": !value},
        )}>
            {children}
            <Count>{value}</Count>
        </div>
    )
}


function Count(props) {
    const { children } = props;
    return (
        <div className="counter-badge-count">{children}</div>
    );
}


export default CounterBadge;
