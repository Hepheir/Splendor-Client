import classNames from "classnames";

import "./style.css";


function HandCardCount(props) {
    // children is count.
    const { children, gemId } = props;
    return (
        <div className={classNames(
            "hand-card-count",
            `skin gem-theme-${gemId}`,
            {"depleted": children === 0},
        )}>
            <div className={`hand-card-count-number skin numbers-${children}`}/>
        </div>
    );
}


export default HandCardCount;
