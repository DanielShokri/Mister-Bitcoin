import React, { Component } from 'react';
import ContactList from '../components/ContactList/ContactList';
// import ContactDetails from './ContactDetails';


export class ContactPage extends Component {
    state = { selectedContact: undefined }

    contactSelected = (selectedContact) => {
        console.log(selectedContact);
        this.setState({ selectedContact });
    }
    addNewContact = () => {
        this.props.history.push('/contact/edit');
    }
    render() {
        return (
            <div>
                <button style={{margin: 23 + 'px'}} class="waves-effect waves-light btn-small" onClick={this.addNewContact}>Add new contact</button>
            <ContactList contactSelected={this.contactSelected}></ContactList>}
            </div>
        )
    };
}