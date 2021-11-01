import classNames from "classnames";

import "./style.css";


function CoinDrawer(props) {
    const { children } = props;
    return (
        <div className="coin-drawer">
            {children.map(child =>
                <div className={classNames(
                    "coin-drawer-item",
                    {"active": child.props.isActive},
                )}>
                    {child}
                </div>
            )}
        </div>
    );
}


export default CoinDrawer;
