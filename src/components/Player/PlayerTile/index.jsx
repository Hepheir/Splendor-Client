import classNames from "classnames";

import "../../../skins/style.css";
import "./style.css";


function PlayerTile(props) {
    // children is tile id.
    const { children } = props;
    return (
        <div className={classNames(
            "player-tile",
            `skin tiles-${children}`,
            {"is-empty": !children},
        )}/>
    )
}


export default PlayerTile;
