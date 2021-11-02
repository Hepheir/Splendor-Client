import classNames from "classnames";

import "./style.css";


function HeaderFrame(props) {
    const { children, isVertical } = props;
    return (
        <div className={classNames(
            "header-frame",
            {"is-virtical": isVertical},
        )}>{children}</div>
    )
}


export default HeaderFrame;
