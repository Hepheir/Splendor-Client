import classNames from "classnames";
import React from "react";
import socket from "../../socket";
import "./style.css";
import "../../skins/style.css";


class Players extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            players: [],
        };
    }

    componentDidMount() {
        socket.on(`players/players`, state => this.setState(state));
    }

    render() {
        const { players } = this.state;

        return (
            <div className="player">
                {players.map((value, index) =>
                    <Slot player_id={value} key={`player/slot/${index}`} />
                )}
            </div>
        );
    }
}


class Slot extends React.Component {
    constructor(props) {
        super(props);

        const { player_id } = props;

        this.state = {
            player_id: player_id,
            is_active: false,

            name: null,
            score: 0,
            cards: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
            coins: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
            tiles: [],
            reserves: [],
        };
    }


    componentDidMount() {
        const { player_id } = this.state;
        socket.on(`players/state`, state => {
            if (player_id === state.player_id)
                this.setState(state);
        });
    }


    render() {
        return (
            <div className={classNames(
                "slot",
                {"is_active": this.state.is_active},
            )} style={{
                order: this.state.order,
            }}>
                <Name name={this.state.name} />
                <Score score={this.state.score} />

                <CoinList coins={this.state.coins} />
                <CardList cards={this.state.cards} />

                <ReserveList reserves={this.state.reserves} />
                <TileList tiles={this.state.tiles} />
            </div>
        );
    }
}


function Name(props) {
    const { name } = props;
    return (
        <div className="name">{name}</div>
    );
}

function Score(props) {
    const { score } = props;
    return (
        <div className="score">{score} PP</div>
    );
}


function CardList(props) {
    const { cards } = props;
    return (
        <div className="card-list">
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
            "card",
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
        <div className="coin-list">
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
            "coin",
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
        <div className="reserve-list">
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
            "reserve",
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



export default Players;
