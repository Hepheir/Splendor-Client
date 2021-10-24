import classNames from "classnames";
import React from "react";


function DrawPile(props) {
    const { amount, level } = props;
    return (
        <div className={classNames(
            "draw-pile",
            {"depleted": amount === 0}
        )}>
            <Background background={level} />
            <Counter value={amount} />
            <button className="reserve-button skin button">Reserve</button>
        </div>
    );
}


function Background(props) {
    const { background } = props;
    return (
        <div className={classNames(
            "background",
            "skin",
            `card-background-${background}`
        )}/>
    );
}


function Counter(props) {
    const { value } = props;
    if (value === 0) {
        return null;
    }
    return (
        <div className="counter">{value}</div>
    );
}


export default DrawPile;
