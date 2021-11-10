import classNames from "classnames";

import "../../../skins/style.css";
import "./style.css";


function PlayerCardCount(props) {
    // children is count.
    const { children, gemId } = props;
    return (
        <div className={classNames(
            "player-card-count",
            `skin gem-theme-${gemId}`,
            {"depleted": children === 0},
        )}>
            <div className={`player-card-count-number skin numbers-${children}`}/>
        </div>
    );
}


export default PlayerCardCount;
