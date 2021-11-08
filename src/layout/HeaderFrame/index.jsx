import classNames from "classnames";

import "./style.css";


function HeaderFrame(props) {
    const { children, isVertical, hasSidebar } = props;
    return (
        <div className={classNames(
            "header-frame",
            {"is-virtical": isVertical},
            {"has-sidebar": hasSidebar},
        )}>
            {children}
        </div>
    )
}


export default HeaderFrame;
