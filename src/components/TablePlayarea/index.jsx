import classNames from "classnames";
import React from "react";

import "./style.css";
import "../../skins/style.css";
import socket from "../../socket";


class TablePlayarea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            card: {
                id: null,
                is_reservable: false,
                is_buyale: false,
            },
            coins: [],
        };
    }

    componentDidMount() {
        socket.on('table/playarea', state => this.setState(state));
    }

    render() {
        const { coins } = this.state;

        if (coins.length == 0) {
            return null;
        }

        return (
            <div className="table-playarea">
                {coins.map((value, index) =>
                    <Item gem_id={value} key={`table-playarea/${index}`} />
                )}
            </div>
        );
    }
}


function Item(props) {
    const { gem_id } = props;

    function onClick(event) {
        socket.emit('table/playarea', { gem_id: gem_id });
    }

    return (
        <div className={`item skin coins-${gem_id}`} onClick={onClick}/>
    );
}


export default TablePlayarea;
