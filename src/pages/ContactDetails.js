import React, { Component } from 'react';
import ContactService from '../services/ContactService'
import { HashRouter  as Router, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";


class ContactDetails extends Component {
    state = { contact: null }

    async componentDidMount() {
        console.log(this.props)
        const contact = await ContactService.getContactById(this.props.contactId);
        this.setState({ contact });
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
                <Link to="/contact">Back</Link>
              </section>

            )
        )
    }

}




export default ContactDetails;
