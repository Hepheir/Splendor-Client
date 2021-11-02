import React from "react";

import "./style.css";
import socket from "../../socket";

import CARDS_COSTS from "../../data/card.costs.json";

import HandReserves from "../../components/HandReserves";
import HandResources from "../../components/HandResources";
import Lobby from "../../components/Lobby";
import TableCards from "../../components/TableCards";
import TableCoins from "../../components/TableCoins";
import TablePlayarea from "../../components/TablePlayarea";
import TableTiles from "../../components/TableTiles";

import Coin from "../../components/Coin";
import Card from "../../components/Card";
import Tile from "../../components/Tile";
import GameChat from "../../components/GameChat";
import Supply from "../../components/Supply";
import HitBox from "../../components/HitBox";
import FlatButton from "../../components/FlatButton";
import CardStack from "../../components/CardStack";
import CoinStack from "../../components/CoinStack";
import CoinDrawer from "../../components/CoinDrawer";
import TileDrawer from "../../components/TileDrawer";
import CounterBadge from "../../components/CounterBadge";
import CardRow from "../../components/CardRow";

import Player from "../../components/Player";
import GameHand from "../../components/GameHand";

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            meta: {
                id: null,
                title: '',
                min_players: 2,
                max_players: 4,
            },
            flags: {
                game_started: false,
                my_turn: false,
            },
            table: {
                cards: {
                    1: {
                        drawpile: 0,
                        column: [null, null, null, null],
                    },
                    2: {
                        drawpile: 0,
                        column: [null, null, null, null],
                    },
                    3: {
                        drawpile: 0,
                        column: [null, null, null, null],
                    },
                },
                coins: {
                    1: 1,
                    2: 2,
                    3: 7,
                    4: 7,
                    5: 0,
                    6: 5,
                },
                tiles: [null, null, null],
            },
            playarea: {
                card: {
                    id: null,
                    reserved: false,
                },
                take: [],
                pay: [],
            },
            players: [
                {
                    user: {
                        id: 1,
                        username: 'test client',
                        is_online: true,
                        is_player: true,
                        is_playing: false,
                        is_round_starter: true,
                    },
                    hand: {
                        score: 12,
                        cards: {
                            1: 1,
                            2: 2,
                            3: 3,
                            4: 4,
                            5: 5,
                        },
                        coins: {
                            1: 2,
                            2: 4,
                            3: 0,
                            4: 7,
                            5: 0,
                            6: 0,
                        },
                        tiles: [],
                        reserves: [1, 38, 80],
                    }
                },
                {
                    user: {
                        id: 2,
                        username: 'test 2',
                        is_online: true,
                        is_player: true,
                        is_playing: false,
                        is_round_starter: true,
                    },
                    hand: {
                        score: 12,
                        cards: {
                            1: 1,
                            2: 2,
                            3: 3,
                            4: 4,
                            5: 5,
                        },
                        coins: {
                            1: 2,
                            2: 4,
                            3: 0,
                            4: 7,
                            5: 0,
                            6: 0,
                        },
                        tiles: [],
                        reserves: [1, 38, 80],
                    }
                },
                {
                    user: {
                        id: 3,
                        username: 'test 3',
                        is_online: true,
                        is_player: true,
                        is_playing: true,
                        is_round_starter: true,
                    },
                    hand: {
                        score: 8,
                        cards: {
                            1: 1,
                            2: 2,
                            3: 3,
                            4: 4,
                            5: 5,
                        },
                        coins: {
                            1: 2,
                            2: 4,
                            3: 0,
                            4: 7,
                            5: 0,
                            6: 0,
                        },
                        tiles: [],
                        reserves: [1, 38, 80],
                    }
                },
                {
                    user: {
                        id: 4,
                        username: '김동균',
                        is_online: true,
                        is_player: true,
                        is_playing: false,
                        is_round_starter: false,
                    },
                    hand: {
                        score: 8,
                        cards: {
                            1: 0,
                            2: 2,
                            3: 3,
                            4: 0,
                            5: 0,
                        },
                        coins: {
                            1: 2,
                            2: 4,
                            3: 0,
                            4: 0,
                            5: 1,
                            6: 0,
                        },
                        tiles: [],
                        reserves: [1, 38, 80],
                    }
                },
            ],
            chats: [],
        }

        this.isCoinTakeable = this.isCoinTakeable.bind(this);
        this.doTakeCoin = this.doTakeCoin.bind(this);
        this.undoTakeCoin = this.undoTakeCoin.bind(this);

        this.isCoinPayable = this.isCoinPayable.bind(this);
        this.doPayCoin = this.doPayCoin.bind(this);
        this.undoPayCoin = this.undoPayCoin.bind(this);
    }


    componentDidMount() {
        socket.on('start game', this.doNothing);
        socket.on('end game', this.doNothing);

        socket.on('begin turn', this.doNothing);
        socket.on('begin extra turn', this.doNothing);
        socket.on('end turn', this.doNothing);

        socket.on('update board', this.doNothing);
    }

    getPlayerState() {
        const { userId } = this.props;
        const { players } = this.state;
        return players.find(p => p.user.id === userId);
    }


    getCurrentActionType() {
        const { playarea } = this.state;

        if (playarea.take.length > 0)
            return 'take coin';

        if (playarea.card.id && playarea.pay.length || playarea.card.reserved)
            return 'buy card';

        if (playarea.card.id)
            return 'reserve card';

        if (playarea.pay.length)
            return 'choose card';

        return null;
    }


    dynamicButtonText() {
        switch (this.getCurrentActionType()) {
            case 'take coin':
                return 'TAKE COINS';

            case 'buy card':
                return 'BUY CARD';

            case 'reserve card':
                return 'RESERVE CARD';

            case 'choose card':
                return 'CHOOSE CARD';

            default:
                return 'YOUR TURN';
        }
    }


    dynamicButtonAction() {

    }


    doNothing() {
        console.log(arguments);
    }


    ////////////////////////////////////////////////////////////////
    // Player Actions
    ////////////////////////////////////////////////////////////////


    // Taking Coins from Table

    isCoinTakeable(gemId) {
        const { playarea, table } = this.state;

        // 황금 토큰은 가져올 수 없음.
        if (gemId === 6) return false;

        // 고갈된 코인일 경우 가져올 수 없음.
        if (!table.coins[gemId]) return false;

        // 카드 구매/예약을 진행중이라면 코인을 가져올 수 없음.
        if (playarea.pay.length > 0) return false;
        if (playarea.card.id) return false;


        // 지금까지 가져온 코인을 고려하여 새로운 코인이 선택 가능한지 체크.

        let n_of_coins = 0;
        let n_of_coin_types = 0
        let visited = [false, false, false, false, false, false];

        // 지금 선택한 코인을 지불했다고 가정할 경우,
        n_of_coins++;
        n_of_coin_types++;
        visited[gemId] = true;

        playarea.take.forEach(gid => {
            if (!visited[gid]) {
                n_of_coin_types++;
                visited[gid] = true;
            }
            n_of_coins++;
        });

        // 서로 다른 코인을 1개씩 가져갔을 때.
        if (n_of_coins <= 3 && n_of_coins === n_of_coin_types)
            return true;

        // 한 종류의 코인을 2개 가져갔을 때.
        if (n_of_coins == 2 && n_of_coin_types === 1)
            return true;

        return false;
    }


    doTakeCoin(gemId) {
        // 선택이 불가능하다면 당연히 가져올 수도 없음.
        if (!this.isCoinTakeable(gemId)) return;

        const { table, playarea } = this.state;

        table.coins[gemId]--;
        playarea.take.push(gemId);

        this.setState({table: table, playarea: playarea});
    }

    undoTakeCoin(index) {
        const { table, playarea } = this.state;

        const gemId = playarea.take.splice(index, 1)[0];
        table.coins[gemId]++;

        this.setState({table: table, playarea: playarea});
    }

    // Paying Coins from Hand


    isCoinPayable(gemId) {
        const { playarea } = this.state;
        const player = this.getPlayerState();

        // TODO: 자신을 특정할 수 없는 경우...
        if (!player) return false;

        // 테이블에서 코인을 가져오는 중이면 자신의 코인을 지불할 수 없음.
        if (playarea.take.length > 0) return false;

        // 고갈된 코인은 지불할 수 없음
        if (!player.hand.coins[gemId]) return false;

        return true;
    }

    doPayCoin(gemId) {
        if (!this.isCoinPayable(gemId)) return;

        const { playarea, players } = this.state;
        const player = this.getPlayerState();
        // getPlayerState() 가 레퍼런스를 가져옴을 이용하여 간접적으로 플레이어의 상태를 수정함.

        player.hand.coins[gemId]--;
        playarea.pay.push(gemId);

        this.setState({playarea: playarea, players: players});
    }

    undoPayCoin(index) {
        const { playarea, players } = this.state;
        const player = this.getPlayerState();
        const gemId = playarea.pay.splice(index, 1)[0];
        player.hand.coins[gemId]++;

        this.setState({playarea: playarea, players: players});
    }

    // Selecting a Card from Table or Hand(reserved)

    isCardSelectable(cardId) {
        if (!cardId) return false;

        const { playarea } = this.state;

        // 다른 액션 중인지 체크
        if (playarea.take.length > 0)
            return false;

        // 이미 선택한 카드인지 확인
        if (playarea.card.id === cardId)
            return false;

        console.log(playarea, cardId)

        return true;
    }

    doSelectCard(cardId, isReserved) {
        const { playarea } = this.state;
        playarea.card.id = cardId;
        playarea.card.reserved = isReserved;
        this.setState({playarea: playarea});
    }

    undoSelectCard() {
        const { playarea } = this.state;
        playarea.card.id = null;
        this.setState({playarea: playarea});
    }

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////



    buyCard(cardId) {
        console.log('buy card', cardId);
    }

    // Extra Turn Actions

    payCoin(gemId) {

    }

    returnCoin(gemId) {

    }

    chooseTile(tileId) {

    }

    //

    isCardAvailable(cardId) {
        const { playarea } = this.state;

        // 다른 액션 중인지 체크
        if (playarea.take.length > 0)
            return false;

        const cardCosts = CARDS_COSTS.filter(c => c.card_id === cardId);
        const costs = {1:0, 2:0, 3:0, 4:0, 5:0};

        let jokers = 0;
        let lacks = 0;

        // 카드의 원래 가격을 확인
        cardCosts.forEach(cost => {
            costs[cost.gem_id] += cost.count;
        });

        // TODO: 내가 가진 카드 보너스 적용하기

        // 내가 현재까지 낸 코인 확인
        playarea.pay.forEach(gemId => {
            (gemId == 6) ? jokers++ : costs[gemId]--;
        });

        // 과하게 낸 코인이 있는지 확인
        for (let i=1; i<=5; i++) {
            if (costs[i] < 0)
                return false;
            lacks += costs[i];
        }

        // 조커 코인까지 적용 후, 올바르게 코인을 냈는지 최종적으로 확인.
        return jokers === lacks;
    }


    render() {
        const { table, playarea, players } = this.state;

        const isMini = true;

        const player = this.getPlayerState();

        return (
            <div className="game-page skin background">
                <GamePlayers>
                    {players.map(player =>
                        <Player>{player}</Player>
                    )}
                </GamePlayers>

                <GameArea>

                    <CardRow>
                        {[ <Card isFlipped={true} isMini={isMini}>{3}</Card> ].concat(
                            [75, 72, 88, 83].map(cardId =>
                                <HitBox onClick={() => this.doSelectCard(cardId)}>
                                    <Card isActive={this.isCardSelectable(cardId)} isFlipped={false} isMini={isMini}>{cardId}</Card>
                                </HitBox>
                            )
                        )}
                    </CardRow>

                    <CardRow>
                        {[ <Card isFlipped={true} isMini={isMini}>{2}</Card> ].concat(
                            [45, 52, 58, 43].map(cardId =>
                                <HitBox onClick={() => this.doSelectCard(cardId)}>
                                    <Card isActive={this.isCardSelectable(cardId)} isFlipped={false} isMini={isMini}>{cardId}</Card>
                                </HitBox>
                            )
                        )}
                    </CardRow>

                    <CardRow>
                        {[ <Card isFlipped={true} isMini={isMini}>{1}</Card> ].concat(
                            [15, 32, null, 3].map(cardId =>
                                <HitBox onClick={() => this.doSelectCard(cardId)}>
                                    <Card isActive={this.isCardSelectable(cardId)} isFlipped={false} isMini={isMini}>{cardId}</Card>
                                </HitBox>
                            )
                        )}
                    </CardRow>


                    <div>
                    </div>
                    <PlayStack>

                        {(playarea.card.id || playarea.pay.length) ?
                            <HitBox onClick={() => this.undoSelectCard()}>
                                <Card isActive={true && playarea.card.id}>{playarea.card.id}</Card>
                            </HitBox>
                        : null}

                        {playarea.take.map((gemId, index) =>
                            <HitBox onClick={() => this.undoTakeCoin(index)}>
                                <Coin isActive={true}>{gemId}</Coin>
                            </HitBox>
                        )}
                        {playarea.pay.map((gemId, index) =>
                            <HitBox onClick={() => this.undoPayCoin(index)}>
                                <Coin isActive={true}
                                >{gemId}</Coin>
                            </HitBox>
                        )}
                    </PlayStack>

                    <StatusBar>
                        {/* <FlatButton>AUTOPLAY TOKENS</FlatButton> */}

                    </StatusBar>


                    {/* Dynamic Button */}
                    <DynamicButton onClick={this.dynamicButtonAction}>
                        {this.dynamicButtonText()}
                    </DynamicButton>

                    {player ?
                        <GameHand>
                            <CoinStack>
                                {[1,2,3,4,5,6].map(gemId =>
                                    <HitBox onClick={() => this.doPayCoin(gemId)}>
                                        <CounterBadge value={player.hand.coins[gemId]}>
                                            <Coin isActive={this.isCoinPayable(gemId)}>{gemId}</Coin>
                                        </CounterBadge>
                                    </HitBox>
                                )}
                            </CoinStack>
                            <CardStack>
                                {player.hand.reserves.map(cardId =>
                                    <HitBox isActive={this.state.playarea.card.id === cardId} onClick={() => this.doSelectCard(cardId, true)}>
                                        <Card isActive={this.isCardSelectable(cardId)}>{cardId}</Card>
                                    </HitBox>
                                )}
                            </CardStack>
                        </GameHand>
                    : null}

                    <div></div>

                    <TileDrawer>
                        {[1,2,3,4,5].map(tileId =>
                            <Tile>{tileId}</Tile>
                        )}
                    </TileDrawer>

                    <CoinDrawer>
                        {[1,2,3,4,5,6].map(gemId =>
                            <HitBox isActive={this.isCoinTakeable(gemId)} onClick={() => this.doTakeCoin(gemId)}>
                                <CounterBadge value={table.coins[gemId]}>
                                    <Coin isActive={this.isCoinTakeable(gemId)}>
                                        {gemId}
                                    </Coin>
                                </CounterBadge>
                            </HitBox>
                        )}
                    </CoinDrawer>

                </GameArea>


                <SideBar>
                    <GameChat />
                </SideBar>

            </div>
        );
    }
}

function GamePlayers(props) {
    const { children } = props;
    return (
        <div className="game-players">
            {children}
        </div>
    );
}

function GameArea(props) {
    const { children } = props;
    return (
        <div className="game-area-container">
            <div className="game-area">
                {children}
            </div>
        </div>
    );
}


function StatusBar(props) {
    const { children } = props;

    return (
        <div className="game-status-bar">
            {children}
        </div>
    );
}

function PlayStack(props) {
    const { children } = props;
    return (
        <div className="game-play-stack">{children}</div>
    )
}

function DynamicButton(props) {
    const { children, onClick } = props;
    return (
        <div className="game-dynamic-button">
            <FlatButton onClick={onClick}>{children}</FlatButton>
        </div>
    )
}

function SideBar(props) {
    const { children } = props;
    return (
        <div className="side-bar">
            {children}
        </div>
    )
}

function HeroBar(props) {
    const { children } = props;
    return (
        <div className="hero-bar">
            {children}
        </div>
    );
}


function GameTile(props) {

}


function PlayHand(props) {
    const { children } = props;
    return (
        <div className="game-play-hand">
            {children}
        </div>
    );
}


export default Game;
