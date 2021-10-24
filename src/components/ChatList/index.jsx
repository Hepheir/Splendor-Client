import React from "react";

import "./style.css";
import socket from "../../socket";


class ChatList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [],
        };
        this.messageEnd = null;
    }

    componentDidMount() {
        socket.on('chat/history', state => this.setState(state));
        socket.on('chat/new', chat => this.pushMessage(chat.date, chat.author, chat.description));

        socket.on("disconnect", () => this.pushSystemMessage('You were disconnected.'));
        socket.on('message', (message) => this.pushSystemMessage(message));

        socket.connect();
    }

    componentDidUpdate() {
        this.messageEnd.scrollIntoView({ behavior: "smooth" });
    }

    pushMessage(date, author, description) {
        const history = this.state.history;
        history.push({
            date: date,
            author: author,
            description: description,
        });
        this.setState({ history: history });
    }

    pushSystemMessage(description) {
        const now = new Date(Date.now());
        this.pushMessage(
            `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`,
            '[SYSTEM]',
            description
        );
    }

    render() {
        const { history } = this.state;
        return (
            <div className="chat-list">
                {history.map((value, index) =>
                    <ChatListItem
                        author={value.author}
                        date={value.date}
                        description={value.description}
                        key={`chat-${index}`}
                    />
                )}

                {/* Dummy node for scroll to bottom feature. */}
                <div ref={(el) => { this.messageEnd = el; }} />
            </div>
        );
    }
}


function ChatListItem(props) {
    const { author, date, description } = props;
    return (
        <div className="item">
            <span className="date">[{date}]</span>
            <span className="author"> {author}: </span>
            <span className="desc">{description}</span>
        </div>
    );
}


export default ChatList;
