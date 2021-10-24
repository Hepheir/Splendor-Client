import React from "react";

import "./style.css";
import socket from "../../socket";


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
            <form className="chat-input" onSubmit={this.onSubmit}>
                <input className="_input"

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


export default ChatInput;
