import classNames from "classnames";
import React from "react";
import socket from "../../socket";
import "./style.css";
import "../../skins/style.css";


class HandResources extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coins: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
            cards: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
        };
    }

    componentDidMount() {
        socket.on('hand/resources', state => this.setState(state));
    }

    render() {
        const { coins, cards } = this.state;

        return (
            <div className="hand-resources">
                <Slot gem_id={1} coins={coins[1]} cards={cards[1]} />
                <Slot gem_id={2} coins={coins[2]} cards={cards[2]} />
                <Slot gem_id={3} coins={coins[3]} cards={cards[3]} />
                <Slot gem_id={4} coins={coins[4]} cards={cards[4]} />
                <Slot gem_id={5} coins={coins[5]} cards={cards[5]} />
                <Slot gem_id={6} coins={coins[6]} cards={null} />
            </div>
        );
    }
}


function Slot(props) {
    const { gem_id, coins, cards } = props;

    function pay() {
        socket.emit('hand/resources', { gem_id: gem_id });
    }

    return (
        <div className={`slot skin gem-theme-${gem_id}`} onClick={() => pay()}>
            <Coins gem_id={gem_id} count={coins} />
            <Cards gem_id={gem_id} count={cards} />
        </div>
    );
}


function Coins(props) {
    const { gem_id, count } = props;

    return (
        <div className={classNames("coins", {"depleted": count === 0})}>
            <div className={`coin skin coins-${gem_id}`} />
            <div className={`count skin numbers-${count}`} />
        </div>
    );
}


function Cards(props) {
    const { gem_id, count } = props;

    if (count === null) return null;

    return (
        <div className={classNames("cards", {"depleted": count === 0}, `skin gem-theme-${gem_id}`)}>
            <div className={`count skin numbers-${count}`} />
        </div>
    );
}


export default HandResources;
