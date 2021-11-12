import React from "react";

import PlayerFrame from "./PlayerFrame";
import PlayerRowFrame from "./PlayerRowFrame";
import PlayerColumnFrame from "./PlayerColumnFrame";
import PlayerName from "./PlayerName";
import PlayerScore from "./PlayerScore";
import PlayerCardCount from "./PlayerCardCount";
import PlayerCoinCount from "./PlayerCoinCount";
import PlayerTile from "./PlayerTile";
import PlayerCard from "./PlayerCard";

import { getCard, getCoin, getTile } from "../../data";
import { rest } from "../../splendor";


class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                id: null,
                username: null,
                game_id: null,
                game_next_player: null,
                is_online: null,
                is_player: null,
                is_playing: null,
                is_round_starter: null,
            },
            card_ids: [],
            coin_ids: [],
            tile_ids: [],
            reserve_levels: [],
        };
    }

    componentDidMount() {
        const { children: id } = this.props;
        try {
            rest('/player', { user_id:id }, 'GET').then(json => this.setState(json));
        }
        catch(e) {
            console.log(e);
        }
    }

    render() {
        const { user, card_ids, coin_ids, tile_ids, reserve_levels } = this.state;
        const card_counts = { 1:0, 2:0, 3:0, 4:0, 5:0 };
        const coin_counts = { 1:0, 2:0, 3:0, 4:0, 5:0, 6:0 };
        let score = 0;

        for (let cardId of card_ids) {
            const card = getCard(cardId);
            card_counts[card.bonus]++;
            score += card.score;
        }

        for (let coinId of coin_ids) {
            const coin = getCoin(coinId);
            coin_counts[coin.gem_id]++;
        }

        for (let tileId of tile_ids) {
            const tile = getTile(tileId);
            score += tile.score;
        }

        return (
            <PlayerFrame isActive={user.is_playing}>
                <PlayerRowFrame>
                    <PlayerColumnFrame>
                        { user.is_round_starter ?
                            <PlayerName>[S]&nbsp;</PlayerName>
                            : null }
                        <PlayerName>{user.username}</PlayerName>
                    </PlayerColumnFrame>

                    <PlayerColumnFrame>
                        <PlayerScore>{score} PP</PlayerScore>
                    </PlayerColumnFrame>
                </PlayerRowFrame>

                <PlayerRowFrame>
                    <PlayerColumnFrame>
                        <PlayerCardCount gemId={1}>{card_counts[1]}</PlayerCardCount>
                        <PlayerCardCount gemId={2}>{card_counts[2]}</PlayerCardCount>
                        <PlayerCardCount gemId={3}>{card_counts[3]}</PlayerCardCount>
                        <PlayerCardCount gemId={4}>{card_counts[4]}</PlayerCardCount>
                        <PlayerCardCount gemId={5}>{card_counts[5]}</PlayerCardCount>
                    </PlayerColumnFrame>
                </PlayerRowFrame>

                <PlayerRowFrame>
                    <PlayerColumnFrame>
                        <PlayerCoinCount gemId={1}>{coin_counts[1]}</PlayerCoinCount>
                        <PlayerCoinCount gemId={2}>{coin_counts[2]}</PlayerCoinCount>
                        <PlayerCoinCount gemId={3}>{coin_counts[3]}</PlayerCoinCount>
                        <PlayerCoinCount gemId={4}>{coin_counts[4]}</PlayerCoinCount>
                        <PlayerCoinCount gemId={5}>{coin_counts[5]}</PlayerCoinCount>
                        <PlayerCoinCount gemId={6}>{coin_counts[6]}</PlayerCoinCount>
                    </PlayerColumnFrame>
                </PlayerRowFrame>

                <PlayerRowFrame>
                    <PlayerColumnFrame>
                        <PlayerCard>{reserve_levels[0]}</PlayerCard>
                        <PlayerCard>{reserve_levels[1]}</PlayerCard>
                        <PlayerCard>{reserve_levels[2]}</PlayerCard>
                    </PlayerColumnFrame>

                    <PlayerColumnFrame>
                        <PlayerTile>{tile_ids[4]}</PlayerTile>
                        <PlayerTile>{tile_ids[3]}</PlayerTile>
                        <PlayerTile>{tile_ids[2]}</PlayerTile>
                        <PlayerTile>{tile_ids[1]}</PlayerTile>
                        <PlayerTile>{tile_ids[0]}</PlayerTile>
                    </PlayerColumnFrame>
                </PlayerRowFrame>
            </PlayerFrame>
        );
    }
}


export {
    PlayerFrame,
    PlayerRowFrame,
    PlayerColumnFrame,
    PlayerName,
    PlayerScore,
    PlayerCardCount,
    PlayerCoinCount,
    PlayerTile,
    PlayerCard,
    Player,
};
