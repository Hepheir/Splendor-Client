import classNames from "classnames";
import React from "react";
import Splendor from "../../splendor";


class CoinPile extends React.Component {
    constructor(props) {
        super(props);
        const { gem_id } = props;
        this.state = {
            gem_id: gem_id,
            amount: Splendor.table.getCoin(gem_id)
        };
        this.onTake = this.onTake.bind(this);
    }

    onTake(event) {
        const { gem_id } = this.state;
        Splendor.action.takeCoin(gem_id);
    }

    render() {
        const { amount, gem_id } = this.state;
        return (
            <div className="coin-pile">
                {[1,2,3,4,5,6,7].map((index) =>
                    <div className="placeholder">
                        <div className={classNames(
                            "coin",
                            {"depleted": index > amount},
                            "skin",
                            `coins-${gem_id}`
                        )} />
                    </div>
                )}
                <button className="skin button take-button" onClick={this.onTake}>Take</button>
            </div>
        );
    }
}


export default CoinPile;
