import classNames from "classnames";
import React from "react";

import "./style.css";
import CARDS from "../../data/cards.json";
import CARDS_COSTS from "../../data/card.costs.json";


class Card extends React.Component {
    constructor(props) {
        super(props);

        const { card_id } = props;

        const card = CARDS.find(c => c.id === card_id);
        const card_costs = CARDS_COSTS.filter(c => c.card_id === card_id);

        this.state = {
            card: card,
            cost: card_costs,
        };
    }


    render() {
        const { card, cost } = this.state;
        return (
            <div className="card">
                <CardArt>{card.background}</CardArt>
                <CardTemplate />
                <CardScore>{card.score}</CardScore>
                <CardBonus>{card.bonus}</CardBonus>

                <div className="card-bottom">
                    {cost.map(card_cost =>
                        <CardCost gem_id={card_cost.gem_id}>{card_cost.count}</CardCost>
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
