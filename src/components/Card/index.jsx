import classNames from "classnames";
import React from "react";

import "./style.css";
import CARDS from "../../data/cards.json";
import CARDS_COSTS from "../../data/card.costs.json";


function Card(props) {
    const { isActive, isFlipped, isMini, children } = props;

    if (!children) {
        return (
            <div className={classNames(
                "card",
                {"active": isActive},
                {"mini": isMini},
            )}>
            </div>
        );
    }
    else if (isFlipped) {
        const card_level = children;
        return (
            <div className={classNames(
                "card",
                {"active": isActive},
                {"mini": isMini},
            )}>
                <CardArt>{card_level}</CardArt>
            </div>
        );
    }
    else {
        const card_id = children;

        const card = CARDS.find(c => c.id === card_id);
        const card_costs = CARDS_COSTS.filter(c => c.card_id === card_id);

        return (
            <div className={classNames(
                "card",
                {"active": isActive},
                {"mini": isMini},
            )}>
                <CardArt>{card.background}</CardArt>
                <CardTemplate />
                <CardScore>{card.score}</CardScore>
                <CardBonus>{card.bonus}</CardBonus>

                <div className="card-bottom">
                    {card_costs.map(cost =>
                        <CardCost gem_id={cost.gem_id}>{cost.count}</CardCost>
                    )}
                </div>

            </div>
        );
    }
}


function CardArt(props) {
    const { children } = props;
    return (
        <div className={classNames(
            "card-art",
            "skin",
            `card-background-${children}`
        )} />
    );
}


function CardTemplate(props) {
    return (
        <div className="card-template" />
    )
}


function CardScore(props) {
    const { children } = props;
    return (
        <div className={classNames(
            "card-score",
            "skin",
            `numbers-${children}`
        )} />
    )
}


function CardBonus(props) {
    const { children } = props;
    return (
        <div className={classNames(
            "card-bonus",
            "skin",
            `gem-${children}`
        )} />
    )
}

function CardCost(props) {
    const { gem_id, children } = props;

    if (children === 0)
        return null;

    return (
        <div className={classNames(
            "card-cost-container",
            "skin",
            `cardcosts-${gem_id}`
        )}>
            <div className={classNames(
                "card-cost-counter",
                "skin",
                `numbers-${children}`
            )} />
        </div>
    );
}


export default Card;
