import React from "react";

import CardFrame from "./CardFrame";
import CardArt from "./CardArt";
import CardHeaderFrame from "./CardHeaderFrame";
import CardScore from "./CardScore";
import CardBonus from "./CardBonus";
import CardCostFrame from "./CardCostFrame";
import CardCost from "./CardCost";

import "./style.css";
import CARDS from "../../data/cards.json";
import CARDS_COSTS from "../../data/card.costs.json";


function Card(props) {
    const { children: cardId, isActive, isMini } = props;

    if (!cardId)
        return (
            <CardFrame isActive={isActive} isMini={isMini}/>
        );

    const card = CARDS.find(card => card.id === cardId);
    const card_costs = CARDS_COSTS.filter(card_cost => card_cost.card_id === cardId);

    return (
        <CardFrame isActive={isActive} isMini={isMini}>
            <CardArt>{card.background}</CardArt>
            <CardHeaderFrame>
                <CardScore>{card.score}</CardScore>
                <CardBonus>{card.bonus}</CardBonus>
            </CardHeaderFrame>
            <CardCostFrame>
                {card_costs.map(cost =>
                    cost.count > 0 ?
                        <CardCost gemId={cost.gem_id}>{cost.count}</CardCost>
                        : null
                )}
            </CardCostFrame>
        </CardFrame>
    );
}

function Drawpile(props) {
    const { level, children: count, isActive, isMini } = props;
    return (
        <div className="card-drawpile">
            <CardFrame isActive={isActive} isMini={isMini}>
                <CardArt>{level}</CardArt>
            </CardFrame>
            <div className="card-drawpile-count">{count}</div>
        </div>
    );
}


export {
    Card,
    Drawpile,
    CardFrame,
    CardArt,
    CardHeaderFrame,
    CardScore,
    CardBonus,
    CardCostFrame,
    CardCost,
};
