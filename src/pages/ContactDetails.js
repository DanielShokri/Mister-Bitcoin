import React, { Component } from 'react';
import ContactService from '../services/ContactService'

class ContactDetails extends Component {
    state = { contact: null }

    async componentDidMount() {
        const contact = await ContactService.getContactById(this.props.selectedContactId);
        this.setState({ contact });
        console.log(this.state.contact)
    }

    render(){
        const { contact } = this.state;
        return(
            contact &&(
                <section className="contact-details">
                <h1>{contact.name}</h1>
                <h2>{contact.email}</h2>
                <h3>{contact.phone}</h3>
                <img src={`https://robohash.org/${contact.name}.png`} alt="profile" />
                <button onClick={this.props.onClose}>Back</button>
              </section>

            )
        )
    }

}




export default ContactDetails;
