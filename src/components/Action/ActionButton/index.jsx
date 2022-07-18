import classNames from "classnames";

import "./style.css";


function ActionButton(props) {
    const { children, isActive, onClick } = props;
    return (
        <div className={classNames(
            "action-button",
            {"is-active": isActive},
        )} onClick={onClick}>
            {children}
        </div>
    );
}


export default ActionButton;
