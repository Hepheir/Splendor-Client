import classNames from "classnames";
import React from "react";

import "./style.css";
import CARDS from "../../data/cards.json";
import CARDS_COSTS from "../../data/card.costs.json";


class MiniCard extends React.Component {
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
            <div className="mini-card">
                <MiniCardArt>{card.background}</MiniCardArt>
                <MiniCardTemplate />
                <MiniCardScore>{card.score}</MiniCardScore>
                <MiniCardBonus>{card.bonus}</MiniCardBonus>

                <div className="mini-card-bottom">
                    {cost.map(card_cost =>
                        <MiniCardCost gem_id={card_cost.gem_id}>{card_cost.count}</MiniCardCost>
                    )}
                </div>

            </div>
        );
    }
}


function MiniCardArt(props) {
    const { children } = props;
    return (
        <div className={classNames(
            "mini-card-art",
            "skin",
            `card-background-${children}`
        )} />
    );
}


function MiniCardTemplate(props) {
    return (
        <div className="mini-card-template" />
    )
}


function MiniCardScore(props) {
    const { children } = props;
    return (
        <div className={classNames(
            "mini-card-score",
            "skin",
            `numbers-${children}`
        )} />
    )
}


function MiniCardBonus(props) {
    const { children } = props;
    return (
        <div className={classNames(
            "mini-card-bonus",
            "skin",
            `gem-${children}`
        )} />
    )
}

function MiniCardCost(props) {
    const { gem_id, children } = props;

    if (children === 0)
        return null;

    return (
        <div className={classNames(
            "mini-card-cost-container",
            "skin",
            `cardcosts-${gem_id}`
        )}>
            <div className={classNames(
                "mini-card-cost-counter",
                "skin",
                `numbers-${children}`
            )} />
        </div>
    );
}


export default MiniCard;
