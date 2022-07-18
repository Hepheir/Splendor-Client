import classNames from "classnames";
import React from "react";

import "./style.css";
import TILES from "../../data/tiles.json";
import TILES_COSTS from "../../data/tile.costs.json";


class Tile extends React.Component {
    constructor(props) {
        super(props);

        const { children: tileId } = props;

        const tile = TILES.find(t => t.id === tileId);
        const tile_costs = TILES_COSTS.filter(t => t.tile_id === tileId);

        this.state = {
            tile: tile,
            cost: tile_costs,
        };
    }


    render() {
        const { children: tileId } = this.props;
        const { tile, cost } = this.state;
        if (tileId === null)
            return (
                <div className="tile">
                </div>
            );
        else
            return (
                <div className="tile">
                    <TileArt>{tile.background}</TileArt>
                    <TileTemplate />
                    <TileScore>{tile.score}</TileScore>

                    <div className="tile-bottom">
                        {cost.map(tile_cost =>
                            <TileCost gem_id={tile_cost.gem_id}>{tile_cost.count}</TileCost>
                        )}
                    </div>

                </div>
            );
    }
}


function TileArt(props) {
    const { children } = props;
    return (
        <div className={classNames(
            "tile-art",
            "skin",
            `tiles-${children}`
        )} />
    );
}


function TileTemplate(props) {
    return (
        <div className="tile-template" />
    )
}


function TileScore(props) {
    const { children } = props;
    return (
        <div className={classNames(
            "tile-score",
            "skin",
            `numbers-${children}`
        )} />
    )
}


function TileCost(props) {
    const { gem_id, children } = props;

    if (children === 0)
        return null;

    return (
        <div className="tile-cost-container">
            <div className={classNames(
                "tile-cost-art",
                "skin",
                `gem-theme-${gem_id}`,
            )} />
            <div className={classNames(
                "tile-cost-counter",
                "skin",
                `numbers-${children}`,
            )} />
        </div>
    );
}


export default Tile;
