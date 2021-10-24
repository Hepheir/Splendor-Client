import classNames from "classnames";
import React from "react";

import "./style.css";
import socket from "../../socket";
import TILES from "../../data/tiles.json";
import TILES_COSTS from "../../data/tile.costs.json";


class TableTiles extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tiles: [null, null, null, null, null]
        };
    }


    componentDidMount() {
        socket.on('table/tiles', state => this.setState(state));
    }


    render() {
        const { tiles } = this.state;
        return (
            <div className="tile-list">
                {tiles.map((value, index) =>
                    <Tile tile_id={value} key={`tile-list.slot.${index}`}/>
                )}
            </div>
        );
    }
}


function Tile(props) {
    const { tile_id } = props;

    if (tile_id === null) {
        return (
            <div className={classNames(
                "tile",
                "depleted"
            )} />
        );
    }

    const tile = TILES.find(t => t.id === tile_id);
    const tile_costs = TILES_COSTS.filter(t => t.tile_id === tile_id);

    return (
        <div className="tile">
            <div className={classNames(
                "bg-image",
                "skin",
                `tiles-${tile.background}`
            )} />
            <div className="header">
                <TileScore score={tile.score} />

                {tile_costs.map((value, index) =>
                    <TileCost
                        gem_id={value.gem_id}
                        count={value.count}
                        key={`tile-cost.${value.tile_id}.${index}`}
                    />
                )}
            </div>
        </div>
    );
}

function TileScore(props) {
    const { score } = props;
    return (
        <div className={classNames(
            "score",
            "skin",
            `numbers-${score}`
        )} />
    );
}


function TileCost(props) {
    const { gem_id, count } = props;
    if (count === 0) {
        return null;
    }
    return (
        <div className="cost">
            <div className={classNames(
                "cost-bg",
                "skin",
                `gem-theme-${gem_id}`
            )} />
            <div className={classNames(
                "amount",
                "skin",
                `numbers-${count}`
            )} />
        </div>
    );
}



export default TableTiles;
