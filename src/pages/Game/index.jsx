import React from "react";

import "./style.css";
import socket from "../../socket";

import GameChat from "../../components/GameChat";

import CenteredRowFrame from "../../layout/CenteredRowFrame";
import {
    SidebarFrame,
    NonSidebarFrame,
} from "../../layout/SidebarFrame";

import {
    BottomShelf,
} from "../../layout/ShelvesFrame";

import {
    Hand,
} from "../../components/Hand";
import GameTable from "../../components/GameTable";
import {
    Action,
} from "../../components/Action";
import {
    S3RHeaderLayout,
    S3RBodyLayout,
    S3RFooterLayout,
} from "../../layout/Split3Rows";
import {
    Player
} from "../../components/GamePlayer";

import { rest } from "../../splendor";


class Game extends React.Component {
    constructor(props) {
        super(props);
        const { children: gameId } = this.props;
        this.state = {
            game: {
                id: gameId,
                title: null,
                min_players: null,
                max_players: null,
                is_ingame: null,
            },
            player_ids: [],
            spectator_ids: [],
        };
    }


    componentDidMount() {
        const { game } = this.state;
        rest('/game', {game_id: game.id}, 'GET')
            .then(this.setState)
            .catch(console.log);
        socket.on('update board', () => console.log("do nothing."));
    }


    render() {
        return (
            <div className="game-page skin background">
                <NonSidebarFrame>
                    <S3RHeaderLayout>
                        <CenteredRowFrame>
                            {this.state.player_ids.map(player_id =>
                                <Player>{player_id}</Player>
                            )}
                        </CenteredRowFrame>
                    </S3RHeaderLayout>
                    <S3RBodyLayout>
                        <div className="game-page-container">
                            <div className="game-page-table">
                                <GameTable />
                            </div>
                            <div className="game-page-action">
                                <Action/>
                            </div>
                        </div>
                    </S3RBodyLayout>
                    <S3RFooterLayout>
                        <BottomShelf>
                            <Hand/>
                        </BottomShelf>
                    </S3RFooterLayout>
                </NonSidebarFrame>

                <SidebarFrame>
                    <GameChat />
                </SidebarFrame>
            </div>
        );
    }
}


export default Game;
