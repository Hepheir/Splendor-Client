import classNames from "classnames";

import "./style.css";


function CardFrame(props) {
    const { children, isActive, isMini } = props;
    return (
        <div className={classNames(
            "card-frame",
            {"is-active": isActive},
            {"is-mini": isMini},
        )}>
            {children}
        </div>
    );
}


export default CardFrame;
