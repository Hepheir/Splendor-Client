import classNames from "classnames";
import React from "react";

import socket from "../../socket";
import "./style.css";
import "../../skins/style.css";



function Player(props) {
    const { children } = props;
    const { user, hand } = children;

    return (
        <div className={classNames(
            "player",
            {"is_active": user.is_playing},
        )}>
            <Name name={user.username} />
            <Score score={hand.score} />

            <CoinList coins={hand.coins} />
            <CardList cards={hand.cards} />

            <ReserveList reserves={hand.reserves} />
            <TileList tiles={hand.tiles} />
        </div>
    );
}


function Name(props) {
    const { name } = props;
    return (
        <div className="player-name">{name}</div>
    );
}

function Score(props) {
    const { score } = props;
    return (
        <div className="player-score">{score} PP</div>
    );
}


function CardList(props) {
    const { cards } = props;
    return (
        <div className="player-card-list">
            <Card gem_id={1} count={cards[1]} />
            <Card gem_id={2} count={cards[2]} />
            <Card gem_id={3} count={cards[3]} />
            <Card gem_id={4} count={cards[4]} />
            <Card gem_id={5} count={cards[5]} />
        </div>
    );
}


function Card(props) {
    const { gem_id, count } = props;
    return (
        <div className={classNames(
            "player-card",
            { "depleted": count === 0 },
            "skin",
            `gem-theme-${gem_id}`
        )}>
            <div className={classNames(
                "number",
                "skin",
                `numbers-${count}`
            )} />
        </div>
    );
}


function CoinList(props) {
    const { coins } = props;
    return (
        <div className="player-coin-list">
            <Coin gem_id={1} count={coins[1]} />
            <Coin gem_id={2} count={coins[2]} />
            <Coin gem_id={3} count={coins[3]} />
            <Coin gem_id={4} count={coins[4]} />
            <Coin gem_id={5} count={coins[5]} />
            <Coin gem_id={6} count={coins[6]} />
        </div>
    );
}


function Coin(props) {
    const { gem_id, count } = props;
    return (
        <div className={classNames(
            "player-coin",
            { "depleted": count === 0 }
        )}>
            <div className={classNames(
                "coin-bg",
                "skin",
                `coins-${gem_id}`
            )} />
            <div className={classNames(
                "number",
                "skin",
                `numbers-${count}`
            )} />
        </div>
    );
}



function ReserveList(props) {
    const { reserves } = props;
    return (
        <div className="player-reserve-list">
            <ReservedCard level={reserves[0]} />
            <ReservedCard level={reserves[1]} />
            <ReservedCard level={reserves[2]} />
        </div>
    );
}


function ReservedCard(props) {
    const { level } = props;
    return (
        <div className={classNames(
            "player-reserve",
            {"depleted": level === null},
            "skin",
            `card-background-${level}`
        )} />
    );
}


function TileList(props) {
    const { tiles } = props;
    return (
        <div className={classNames(
            "tile-list"
        )}>
            <Tile tile_id={tiles[0]} />
            <Tile tile_id={tiles[1]} />
            <Tile tile_id={tiles[2]} />
            <Tile tile_id={tiles[3]} />
            <Tile tile_id={tiles[4]} />
        </div>
    );
}


function Tile(props) {
    const { tile_id } = props;
    if (tile_id === undefined) {
        return null;
    }
    return (
        <div className={classNames(
            "tile",
            "skin",
            `tiles-${tile_id}`
        )} />
    );
}


export default Player;
