import classNames from "classnames";

import "./style.css";


function PlayerCard(props) {
    // children is card level.
    const { children } = props;
    return (
        <div className={classNames(
            "player-card",
            `skin card-background-${children}`,
            {"is-empty": !children},
        )}/>
    );
}


export default PlayerCard;
