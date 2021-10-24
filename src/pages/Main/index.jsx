import React from "react";

import "./style.css";
import ChatInput from "../../components/ChatInput";
import ChatList from "../../components/ChatList";
import HandReserves from "../../components/HandReserves";
import HandResources from "../../components/HandResources";
import Players from "../../components/Player";
import TableCards from "../../components/TableCards";
import TableCoins from "../../components/TableCoins";
import TablePlayarea from "../../components/TablePlayarea";
import TableTiles from "../../components/TableTiles";


class Room extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="layout-body">

                <header className="layout-header">
                    <div className="players">
                        <Players />
                    </div>
                </header>

                <main className="layout-center">
                    <div className="table">
                        <TableTiles />
                        <TableCoins />
                        <TableCards />
                        <TablePlayarea />
                    </div>
                </main>
                <aside className="layout-side_right">
                    <div className="chat">
                        <ChatInput />
                        <ChatList />
                    </div>
                </aside>
                <footer className="layout-footer">
                    <div className="hand">
                        <HandResources />
                        <HandReserves />
                    </div>
                </footer>
            </div>
        );
    }
}

export default Room;
