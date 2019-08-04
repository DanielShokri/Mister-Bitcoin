import React, { Component } from 'react';
import ContactService from '../../services/ContactService';
import './ContactEdit.css';

import {
    HashRouter as Router,
    Route,
    Switch,
    NavLink,
    Redirect
} from "react-router-dom";


class ContactEdit extends Component {
    state = { contact: { name: "", phone: '', email: '' } }

    async componentDidMount() {
        if (this.props.contactId) {
            const contact = await ContactService.getContactById(this.props.contactId)
            this.setState({ contact })
        }
    }

    saveContact = async () => {
        if (!this.state.contact.name || !this.state.contact.email || !this.state.contact.phone) return;
        const contact = await ContactService.saveContact(this.state.contact)
        return <Redirect to="/contact" />
    }

    handleInputs = (event) => {
        const { value, name } = event.target;
        this.setState((state) => { return { contact: { ...state.contact, [name]: value } } })
    }

    render() {
        const { contact } = this.state
        return (
            <div className="edit-page">
                {!this.props.contactId && (
                    < div >
                        <h1>Add Contact</h1>
                    </div>
                )}
                {this.props.contactId && (
                    <div>
                        <h1>Edit Contact</h1>
                    </div>
                )}

                <span className="edit-text">Name:</span> <input type="text" onChange={this.handleInputs} value={contact.name} name="name" />
                <span className="edit-text">Phone:</span> <input type="text" onChange={this.handleInputs} value={contact.phone} name="phone" />
                <span className="edit-text">E-mail:</span>  <input type="text" onChange={this.handleInputs} value={contact.email} name="email" />
                <button className="waves-effect waves-light btn-small" onClick={this.saveContact}>Save</button>
            </div>
        )
    }
}

export default ContactEdit;