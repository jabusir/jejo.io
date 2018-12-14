import React from 'react';
import '../styles/message.css';

export default class Message extends React.Component {
    
    state = {
        copied: true
    }

    hideMessage = () => {
        this.setState(() => ({ copied: false }));
    }

    componentDidMount() {
        setTimeout(() => {
            this.hideMessage();
        }, 1000)
    }

    render() {
        return (
            <div onTransitionEnd={this.props.hideMessage} className={this.state.copied ? 'message message-showing' : 'message message-hidden'}>
                Copied!
            </div>
        )
    }
}
