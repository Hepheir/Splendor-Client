import React from "react";

import socket from "../../socket";
import "./style.css";


class GameChat extends React.Component {
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

        // socket.connect();
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
            <div className="game-chat">
                <ToggleContainer>
                    ss
                </ToggleContainer>

                <ChatDisplay>
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

                </ChatDisplay>

                <ChatInput></ChatInput>
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


function ToggleContainer(props) {
    const { children } = props;
    return (
        <div className="game-chat-toggle-container">{children}</div>
    );
}


function ChatDisplay(props) {
    const { children } = props;
    return (
        <div className="game-chat-display">{children}</div>
    );
}


function ChatLine(props) {

}


// TODO: 보낼 수 있는 문자열 길이 제한
class ChatInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buffer: '',
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onChange(event) {
        const { value } = event.target;
        this.setState({ buffer: value.trimStart() });
    }


    onSubmit(event) {
        const message = this.state.buffer.trimEnd();

        event.preventDefault();

        if (!message) return;

        switch (message.split(' ')[0]) {
            case '/login':
                socket.emit('login', {
                    username: window.prompt('Username'),
                    password: window.prompt('Password'),
                });
                break;

            case '/debug':
                socket.emit('debug');
                break;

            default:
                socket.emit('chat/new', message);
                break;
        }

        this.setState({ buffer: '' });
    }


    render() {
        const { buffer } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <input className="game-chat-input"

                    name="message"
                    type="text"
                    value={buffer}

                    placeholder="Message"

                    onChange={this.onChange}

                    autoFocus={true}
                    autoComplete="off"
                />
            </form>
        );
    }
}


export default GameChat;
