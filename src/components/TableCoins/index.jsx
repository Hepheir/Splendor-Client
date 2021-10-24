import classNames from "classnames";
import React from "react";

import "./style.css";
import socket from "../../socket";


class TableCoins extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            picked: {1:0, 2:0, 3:0, 4:0, 5:0, 6:0 },
            placed: {1:0, 2:0, 3:0, 4:0, 5:0, 6:0 },
        };
    }


    componentDidMount() {
        socket.on('table/coins', state => this.setState(state));
    }


    render() {
        const { picked, placed } = this.state;
        return (
            <div className="coin-list">
                {Object.keys(placed).map((value) =>
                    <CoinPile
                        gem_id={value}
                        picked={picked[value]}
                        placed={placed[value]}
                        key={`table.coin.${value}`}
                    />
                )}
            </div>
        );
    }
}


function CoinPile(props) {
    const { gem_id, picked, placed } = props;

    const coin_list = [];

    if (!placed)
        coin_list.push( <DepletedCoin gem_id={gem_id} /> );

    for (let i = 0; i < picked + placed + 1; i++) {
        let coin;
        let key = `table/coins/${gem_id}.${i}`;

        if (i < placed)
            coin = <PlacedCoin gem_id={gem_id} key={key} />
        else if (i == placed)
            coin = <Seperator key={key}/>;
        else
            coin = <PickedCoin gem_id={gem_id} key={key} />;

        coin_list.push(coin);
    }

    return (
        <div className="coin-pile">
            {coin_list}
        </div>
    );
}


function DepletedCoin(props) {
    const { gem_id } = props;
    return (
        <div className="placeholder">
            <div className={`coin depleted skin coins-${gem_id}`} />
        </div>
    );
}


function PickedCoin(props) {
    const { gem_id } = props;

    function onClick(event) {
        socket.emit('table/coins', { gem_id: gem_id, is_picking_up: false });
    }

    return (
        <div className="placeholder">
            <div className={`coin skin coins-${gem_id}`} onClick={onClick} />
        </div>
    );
}


function PlacedCoin(props) {
    const { gem_id } = props;

    function onClick(event) {
        socket.emit('table/coins', { gem_id: gem_id, is_picking_up: true });
    }

    return (
        <div className="placeholder">
            <div className={`coin skin coins-${gem_id}`} onClick={onClick} />
        </div>
    );
}


function Seperator(props) {
    return (
        <div className="seperator"/>
    );
}


export default TableCoins;
