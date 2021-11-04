import classNames from "classnames";

import TableCoin from "../TableCoin";
import "../../../skins/style.css";
import "./style.css";


function TableCoinRowFrame(props) {
    const { children, gemId, isHidden } = props;
    return (
        <div className={classNames(
            "table-coin-row-frame",
            {"is-hidden": isHidden},
        )}>
            {children}
        </div>
    );
}


export default TableCoinRowFrame;
