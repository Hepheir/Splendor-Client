import classNames from "classnames";

import "./style.css";


function ActionButton(props) {
    const { children, isActive } = props;
    return (
        <div className={classNames(
            "action-button",
            {"is-active": isActive},
        )}>
            {children}
        </div>
    );
}


export default ActionButton;
