import React from "react";

import "./style.css";
import "../../skins/style.css";
import socket from "../../socket";
import CARDS from "../../data/cards.json";
import CARDS_COSTS from "../../data/card.costs.json";


class HandReserves extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [null, null, null],
        };
    }

    componentDidMount() {
        socket.on('hand/reserves', state => this.setState(state));
    }

    componentWillUnmount() {
        socket.off('hand/reserves');
    }

    render() {
        const { cards } = this.state;

        return (
            <div className="hand-reserves">
                <Slot card_id={cards[0]} />
                <Slot card_id={cards[1]} />
                <Slot card_id={cards[2]} />
            </div>
        );
    }
}


function Slot(props) {
    const { card_id } = props;

    if (card_id === null) {
        return <div className="slot depleted" />;
    }
    else {
        return (
            <div className="slot">
                <Card card_id={card_id} />
            </div>
        );
    }
}


function Card(props) {
    const { card_id } = props;

    const card = CARDS.find(c => c.id === card_id);
    const card_costs = CARDS_COSTS.filter(c => c.card_id === card_id);

    return (
        <div className={`card skin card-background-${card.background}`}>
            <CardHeader bonus={card.bonus} score={card.score} />
            {card_costs.map((value, index) =>
                <CardCost
                    gem_id={value.gem_id}
                    count={value.count}
                    key={`card-cost.${value.card_id}.${index}`}
                />
            )}
        </div>
    );
}


function CardHeader(props) {
    const { bonus, score } = props;

    return (
        <div className="header">
            <div className={`score skin numbers-${score}`} />
            <div className={`bonus skin gem-${bonus}`} />
        </div>
    );
}


function CardCost(props) {
    const { gem_id, count } = props;

    if (count === 0) return null;

    return (
        <div className={`cost skin cardcosts-${gem_id}`}>
            <div className={`number skin numbers-${count}`} />
        </div>
    );
}


export default HandReserves;
