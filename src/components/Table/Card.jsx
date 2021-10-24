import CACHE from "../../cache";
import classNames from "classnames";
import React from "react";


function Card(props) {
    const { card_id } = props;
    if (card_id === null) {
        return (
            <div className={classNames(
                "card",
                "depleted"
            )} />
        );
    }
    const card_data = CACHE.cards[card_id];
    return (
        <div className="card">
            <Background background={card_data.background} />
            <Header score={card_data.score} bonus={card_data.bonus} />
            <Costs costs={card_data.costs} />
            <button className="reserve-button skin button">Reserve</button>
            <button className="buy-button skin button">Buy</button>
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

function Header(props) {
    const { score, bonus } = props;
    return (
        <div className="header">
            <div className={classNames(
                "score",
                "skin",
                `numbers-${score}`
            )}/>
            <div className={classNames(
                "bonus",
                "skin",
                `gem-${bonus}`
            )}/>
        </div>
    );
}

function Costs(props) {
    const { costs } = props;
    return (
        <div className="costs">
            {costs.map((amount, index) =>
                <Cost gem_id={index+1} amount={amount} />
            )}
        </div>
    );
}

function Cost(props) {
    const { amount, gem_id } = props;
    if (amount === 0) {
        return null;
    }
    return (
        <div className={classNames(
            "cost",
            "skin",
            `cardcosts-${gem_id}`
        )}>
            <div className={classNames(
                "amount",
                "skin",
                `numbers-${amount}`
            )}/>
        </div>
    );
}

export default Card;
