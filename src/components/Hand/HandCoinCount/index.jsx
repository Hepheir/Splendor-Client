import classNames from "classnames";

import "../../../skins/style.css";
import "./style.css";


function HandCoinCount(props) {
    // children is count.
    const { children, gemId } = props;
    return (
        <div className={classNames(
            "hand-coin-count",
            {"depleted": children === 0},
        )}>
            <div className={`hand-coin-count-coin skin coins-${gemId}`}/>
            <div className={`hand-coin-count-number skin numbers-${children}`}/>
        </div>
    );
}


export default HandCoinCount;
