import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Message from './Message';
import '../styles/contact.css';

export default class Mail extends React.Component {
    state = {
        text: '',
        copied: false
    }

    hideMessage = () => {
        this.setState(() => ({ copied: false }));
    }

    render() {
        return (
            <div>
                {this.state.copied && <Message copied={this.state.copied} hideMessage={this.hideMessage} />}
                <CopyToClipboard 
                    text="jaabusir@ucdavis.edu" 
                    onCopy={() => {
                        this.setState({copied: true})
                        }
                    }
                >
                    <a href="https://mail.google.com/mail/u/0/?fs=1&view=cm&shva=1&su&to=jaabusir@ucdavis.edu&tf=1">
                        <img className="mail-icon" src="./images/mail.png" alt="mail" height={50} width={50}/>
                    </a>
                </CopyToClipboard>
            </div>
        );
    }
}