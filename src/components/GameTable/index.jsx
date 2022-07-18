import React from "react";

import {
    LeftShelf,
    RightShelf,
} from "../../layout/ShelvesFrame";

import {
    TableCoinFrame,
    TableCoinRowFrame,
    TableCoin,
    TableCoinCounter,
    TableCoinButton,
} from "../TableCoin";
import {
    TableTileFrame,
    TableTileRowFrame,
    TableTile,
} from "../TableTile";
import {
    TableCardFrame,
    TableCardRowFrame,
    TableCardColumnFrame,
} from "../TableCard";
import {
    Card,
    Drawpile,
} from "../Card";

import { rest } from "../../splendor";
import { getCoin } from "../../data";

import "./style.css";


class GameTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards_by_level: {
                1: [0, null, null, null, null],
                2: [0, null, null, null, null],
                3: [0, null, null, null, null],
            },
            coin_ids: [],
            tile_ids: [],
        };

        this.selectCard = this.selectCard.bind(this);
        this.selectCoin = this.selectCoin.bind(this);
    }


    componentDidMount() {
        rest('/table', {}, 'GET')
            .then(json => this.setState(json))
            .catch(console.log);
    }

    selectCard(cardId) {
        rest('/table', { card_id: cardId }, 'PATCH')
            .catch(console.log);
    }

    selectCoin(coinId) {
        rest('/table', { coin_id: coinId }, 'PATCH')
            .catch(console.log);
    }


    render() {
        const debug_isMini = false;

        const coinsByGemId = {
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
        };

        this.state.coin_ids.forEach(coin_id => {
            const coin = getCoin(coin_id);
            coinsByGemId[coin.gem_id].push(coin.id);
        });

        return (
            <div className="game-table">
                <div className="game-table-container">
                    {/* CARDS */}

                    <TableCardFrame>
                        {Object.keys(this.state.cards_by_level).map(level =>
                            <TableCardRowFrame>
                                {this.state.cards_by_level[level].map((cardIdOrDrawpileCount, index) => {
                                    if (index === 0)
                                        return (
                                            <TableCardColumnFrame>
                                                <Drawpile level={level} isMini={debug_isMini}>
                                                    {cardIdOrDrawpileCount}
                                                </Drawpile>
                                            </TableCardColumnFrame>
                                        );
                                    else
                                        return (
                                            <TableCardColumnFrame>
                                                <Card isMini={debug_isMini}>{cardIdOrDrawpileCount}</Card>
                                            </TableCardColumnFrame>
                                        );
                                })}
                            </TableCardRowFrame>
                        )}
                    </TableCardFrame>

                    {/* LEFT SHELF */}

                    <LeftShelf>
                        <TableCoinFrame>
                            {Object.keys(coinsByGemId).map(gemId =>
                                <TableCoinRowFrame isHidden={false || gemId == 6}>
                                    <TableCoin>{gemId}</TableCoin>
                                    <TableCoinCounter>{coinsByGemId[gemId].length}</TableCoinCounter>
                                    <TableCoinButton>+</TableCoinButton>
                                </TableCoinRowFrame>
                            )}
                        </TableCoinFrame>
                    </LeftShelf>

                    {/* RIGHT SHELF */}

                    <RightShelf>
                        <TableTileFrame>
                            {this.state.tile_ids.map(tileId =>
                                <TableTileRowFrame>
                                    <TableTile>{tileId}</TableTile>
                                </TableTileRowFrame>
                            )}
                        </TableTileFrame>
                    </RightShelf>
                </div>
            </div>
        );
    }
}


export default GameTable;
