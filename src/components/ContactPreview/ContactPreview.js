import React, { Component } from 'react';
import './ContactPreview.css';

class ContactPreview extends Component {

    selectContact = () => {
        this.props.contactSelected(this.props.contact)
    }
    render() {
        return (
            <div>
                <section className="contact-preview" onClick={this.selectContact} key={this.props.contact._id}>
                    <img src={`https://robohash.org/${this.props.contact.name}.png`} />
                    {this.props.contact.name}
                </section>
            </div>
        )
    }
}


export default ContactPreview;
