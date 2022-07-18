import React from "react";

import HandFrame from "./HandFrame";
import HandColumnFrame from "./HandColumnFrame";
import HandCard from "./HandCard";
import HandCardCount from "./HandCardCount";
import HandCoinCount from "./HandCoinCount";

import { getCard, getCoin } from "../../data";
import { rest } from "../../splendor";


class Hand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coin_ids: [],
            card_ids: [],
            reserve_ids: [],
        };
    }


    componentDidMount() {
        rest('/hand', {}, 'GET')
            .then(json => this.setState(json))
            .catch(e => console.log(e));
    }


    render() {
        const { card_ids, coin_ids, reserve_ids } = this.state;
        const card_counts = { 1:0, 2:0, 3:0, 4:0, 5:0 };
        const coin_counts = { 1:0, 2:0, 3:0, 4:0, 5:0, 6:0 };

        for (let cardId of card_ids) {
            const card = getCard(cardId);
            card_counts[card.bonus]++;
        }

        for (let coinId of coin_ids) {
            const coin = getCoin(coinId);
            coin_counts[coin.gem_id]++;
        }

        return (
            <HandFrame>
                <HandColumnFrame>
                    <HandCoinCount gemId={1}>{coin_counts[1]}</HandCoinCount>
                    <HandCardCount gemId={1}>{card_counts[1]}</HandCardCount>
                </HandColumnFrame>
                <HandColumnFrame>
                    <HandCoinCount gemId={2}>{coin_counts[2]}</HandCoinCount>
                    <HandCardCount gemId={2}>{card_counts[2]}</HandCardCount>
                </HandColumnFrame>
                <HandColumnFrame>
                    <HandCoinCount gemId={3}>{coin_counts[3]}</HandCoinCount>
                    <HandCardCount gemId={3}>{card_counts[3]}</HandCardCount>
                </HandColumnFrame>
                <HandColumnFrame>
                    <HandCoinCount gemId={4}>{coin_counts[4]}</HandCoinCount>
                    <HandCardCount gemId={4}>{card_counts[4]}</HandCardCount>
                </HandColumnFrame>
                <HandColumnFrame>
                    <HandCoinCount gemId={5}>{coin_counts[5]}</HandCoinCount>
                    <HandCardCount gemId={5}>{card_counts[5]}</HandCardCount>
                </HandColumnFrame>
                <HandColumnFrame>
                    <HandCoinCount gemId={6}>{coin_counts[6]}</HandCoinCount>
                </HandColumnFrame>
                {reserve_ids.length > 0 ?
                    <HandColumnFrame>
                        <HandCard>{reserve_ids[0]}</HandCard>
                    </HandColumnFrame>
                    : null}
                {reserve_ids.length > 1 ?
                    <HandColumnFrame>
                        <HandCard>{reserve_ids[1]}</HandCard>
                    </HandColumnFrame>
                    : null}
                {reserve_ids.length > 2 ?
                    <HandColumnFrame>
                        <HandCard>{reserve_ids[2]}</HandCard>
                    </HandColumnFrame>
                    : null}
            </HandFrame>
        );
    }
}


export {
    Hand,
    HandFrame,
    HandColumnFrame,
    HandCard,
    HandCardCount,
    HandCoinCount,
};
