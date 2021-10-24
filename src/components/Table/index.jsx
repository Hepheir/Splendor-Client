import Card from "./Card.jsx";
import CACHE from "../../cache";
import classNames from "classnames";
import CoinPile from "./CoinPile.jsx";
import Splendor from "../../splendor.js";
import DrawPile from "./DrawPile.jsx";
import React from "react";
import "../../skins/style.css";
import "./style.css";


class Table extends React.Component {
    onActionTakeCoin() {

    }

    onActionReserveFromPile() {

    }

    onActionReserveCard() {

    }

    onActionBuyCard() {

    }

    render() {
        const { className } = this.props;
        return (
            <div className={classNames(
                "table",
                className
            )}>
                <TileList />
                <CoinList />
                <CardList />
            </div>
        );
    }
}



function CardList(props) {
    const { cards, className } = props;
    return (
        <div className={classNames(
            "card-list",
            className
        )}>
            <CardRow level={3} drawpile={14} cards={[3, 13, 23, 29]} />
            <CardRow level={2} drawpile={23} cards={[null, 43, 52, null]} />
            <CardRow level={1} drawpile={38} cards={[71, 73, 81, 87]} />
        </div>
    );
}


function CardRow(props) {
    const { drawpile, cards, level } = props;
    return (
        <div className="row">
            <DrawPile level={level} amount={drawpile} />
            <Card card_id={cards[0]} />
            <Card card_id={cards[1]} />
            <Card card_id={cards[2]} />
            <Card card_id={cards[3]} />
        </div>
    );
}


function CoinList(props) {
    return (
        <div className="coin-list">
            <CoinPile gem_id={1} />
            <CoinPile gem_id={2} />
            <CoinPile gem_id={3} />
            <CoinPile gem_id={4} />
            <CoinPile gem_id={5} />
            <CoinPile gem_id={6} />
        </div>
    );
}



export default Table;
