import classNames from "classnames";

import Card from "../../Card";
import "./style.css";


function TableCard(props) {
    const { children, isSelected } = props;
    return (
        <div className={classNames(
            "table-card-card",
            {"is-selected": isSelected},
        )}>
            <Card>{children}</Card>
        </div>
    );
}


export default TableCard;
