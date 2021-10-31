import classNames from "classnames";
import React from "react";

import "./style.css";


class Supply extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { is_available, count, children, onClick } = this.props;

        return (
            <div className={classNames(
                "supply",
                {"available":is_available},
            )} onClick={onClick}>
                {children}
                <SupplyCounter>{count}</SupplyCounter>
                {is_available ? <SupplyButton /> : null }
            </div>
        );
    }
}



function SupplyCounter(props) {
    const { children } = props;

    if (!children)
        return null;

    return (
        <div className="supply-counter">{children}</div>
    );
}


function SupplyButton(props) {
    return (
        <div className="supply-button">+</div>
    );
}

export default Supply;
