import classNames from "classnames";
import React from "react";

import "./style.css";
import socket from "../../socket";
import CARDS from "../../data/cards.json";
import CARDS_COSTS from "../../data/card.costs.json";


class TableCards extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            drawpiles: {
                1: 0,
                2: 0,
                3: 0,
            },
            cards: {
                1: [null, null, null, null],
                2: [null, null, null, null],
                3: [null, null, null, null],
            },
        };
    }


    componentDidMount() {
        socket.on('table/cards', state => this.setState(state));
    }


    render() {
        const { cards, drawpiles } = this.state;
        return (
            <div className="card-list">
                <div className="row">
                    <DrawPile level={1} count={drawpiles[1]} />
                    <Card card_id={cards[1][0]} />
                    <Card card_id={cards[1][1]} />
                    <Card card_id={cards[1][2]} />
                    <Card card_id={cards[1][3]} />
                </div>
                <div className="row">
                    <DrawPile level={2} count={drawpiles[2]} />
                    <Card card_id={cards[2][0]} />
                    <Card card_id={cards[2][1]} />
                    <Card card_id={cards[2][2]} />
                    <Card card_id={cards[2][3]} />
                </div>
                <div className="row">
                    <DrawPile level={3} count={drawpiles[3]} />
                    <Card card_id={cards[3][0]} />
                    <Card card_id={cards[3][1]} />
                    <Card card_id={cards[3][2]} />
                    <Card card_id={cards[3][3]} />
                </div>
            </div>
        );
    }
}


function DrawPile(props) {
    const { count, level } = props;
    return (
        <div className={classNames(
            "draw-pile",
            {"depleted": count === 0}
        )}>
            <Background background={level} />
            <Counter value={count} />
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



function Card(props) {
    const { card_id } = props;

    if (card_id === null) {
        return (
            <div className="card depleted" />
        );
    }

    const card = CARDS.find(c => c.id === card_id);
    const card_costs = CARDS_COSTS.filter(c => c.card_id === card_id);

    function onClick(event) {
        socket.emit('table/cards', {
            card_id: card_id,
        });
    }

    return (
        <div className="card" onClick={onClick}>
            <Background background={card.background} />
            <Header score={card.score} bonus={card.bonus} />
            <div className="costs">
                {card_costs.map((value, index) =>
                    <Cost
                        gem_id={value.gem_id}
                        count={value.count}
                        key={`card-${card_id}.cost.${index}`}
                    />
                )}
            </div>
            <button className="reserve-button skin button">Reserve</button>
            <button className="buy-button skin button">Buy</button>
        </div>
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

function Cost(props) {
    const { gem_id, count } = props;
    if (count === 0) {
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
                `numbers-${count}`
            )}/>
        </div>
    );
}



export default TableCards;
