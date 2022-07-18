import React from "react";

import { rest, API_SERVER_HOST } from "../../splendor";
import { Card, CardArt, CardFrame } from "../Card";
import { getCoin } from "../../data";

import ActionFrame from "./ActionFrame";
import ActionGuideFrame from "./ActionGuideFrame";
import ActionCardFrame from "./ActionCardFrame";
import ActionCoinFrame from "./ActionCoinFrame";
import ActionCoin from "./ActionCoin";
import ActionButtonFrame from "./ActionButtonFrame";
import ActionButton from "./ActionButton";
import socket from "../../socket";


class Action extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coin_ids: [],
            card_id: null,
            drawpile_level: null,
            // tile_id: null,

            guide: '임시 가이드 문구입니다.',

            is_reservable: false,
            is_buyable: false,
            is_takeable: false,
            is_returnable: false,
        };

        this.onClick = this.onClick.bind(this);
        this.update = this.update.bind(this);
    }


    update() {
        rest('/action', {}, 'GET')
            .then(json => this.setState(json))
            .catch(e => console.log(e));
    }


    onClick() {
        rest('/action', this.state, 'PUT')
            .catch(console.log);
    }


    componentDidMount() {
        socket.on('update', this.update);
        this.update();
    }


    render() {
        const discount = { 1:0, 2:0, 3:0, 4:0, 5:0 };
        this.state.coin_ids.forEach(coin_id => {
            const coin = getCoin(coin_id);
            discount[coin.gem_id]++;
        });
        return (
            <ActionFrame>
                <ActionCardFrame>
                    { this.state.card_id ?
                        <Card discount={discount}>{this.state.card_id}</Card>
                        : null }
                    { this.state.drawpile_level ?
                        <CardFrame>
                            <CardArt>{this.state.drawpile_level}</CardArt>
                        </CardFrame>
                        : null }
                </ActionCardFrame>

                <ActionGuideFrame>{this.state.guide}</ActionGuideFrame>

                <ActionCoinFrame>
                    {this.state.coin_ids.map(coin_id =>
                        <ActionCoin isActive={true}>{coin_id}</ActionCoin>
                    )}
                </ActionCoinFrame>

                <ActionButtonFrame>
                    <ActionButton onClick={this.onClick} isActive={this.state.is_takeable}>TAKE COIN</ActionButton>
                    <ActionButton onClick={this.onClick} isActive={this.state.is_reservable}>RESERVE CARD</ActionButton>
                    <ActionButton onClick={this.onClick} isActive={this.state.is_buyable}>BUY CARD</ActionButton>
                    <ActionButton onClick={this.onClick} isActive={this.state.is_returnable}>RETURN CARD</ActionButton>
                </ActionButtonFrame>
            </ActionFrame>
        );
    }
}


export {
    Action,
    ActionFrame,
    ActionGuideFrame,
    ActionCoinFrame,
    ActionCoin,
    ActionButtonFrame,
    ActionButton,
};
