import classNames from "classnames";

import Coin from "../../Coin";
import "./style.css";


function ActionCoin(props) {
    const { children, isActive } = props;
    return (
        <div className={classNames(
            "action-coin",
            {"is-active": isActive},
        )}>
            <Coin>{children}</Coin>
        </div>
    );
}


export default ActionCoin;
