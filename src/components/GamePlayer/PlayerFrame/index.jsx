import classNames from "classnames";

import "./style.css";


function PlayerFrame(props) {
    const { children, isActive } = props;
    return (
        <div className={classNames(
            "player-frame",
            {"is-active": isActive},
        )}>
            {children}
        </div>
    );
}


export default PlayerFrame;
