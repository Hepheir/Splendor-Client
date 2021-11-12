import classNames from "classnames";

import Coin from "../../Coin";
import { getCoin } from "../../../data";

import "./style.css";


function ActionCoin(props) {
    const { children: coinId, isActive } = props;
    const coin = getCoin(coinId);
    return (
        <div className={classNames(
            "action-coin",
            {"is-active": isActive},
        )}>
            <Coin>{coin.gem_id}</Coin>
        </div>
    );
}


export default ActionCoin;
