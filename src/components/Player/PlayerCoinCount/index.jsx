import classNames from "classnames";

import "../../../skins/style.css";
import "./style.css";


function PlayerCoinCount(props) {
    // children is count.
    const { children, gemId } = props;
    return (
        <div className={classNames(
            "player-coin-count",
            {"depleted": children === 0},
        )}>
            <div className={`player-coin-count-coin skin coins-${gemId}`}/>
            <div className={`player-coin-count-number skin numbers-${children}`}/>
        </div>
    )
}


export default PlayerCoinCount;
