import React, { Component } from 'react';
import ContactService from '../../services/ContactService'
import ContactPreview from '../ContactPreview/ContactPreview'
import ContactFilter from '../ContactFilter/ContactFilter'
import ContactDetails from '../../pages/ContactDetails'
import './ContactList.css';


class ContactList extends Component {
    state = { contacts: [], selectedContact: null, filterBy: { term: '' } };

    async componentDidMount() {
        const contacts = await ContactService.getContacts();
        this.setState({ contacts });
    }

    handleChangeTxt = async (event) => {
        this.setState({ filterBy: { term: event.target.value } });
        const contacts = await ContactService.getContacts(this.state.filterBy);
        this.setState({ contacts });
    }

    

    render() {
        const { contacts } = this.state;
        return (
            <div>
                <ContactFilter key={0} {...this.state} handleChangeTxt={this.handleChangeTxt}></ContactFilter>
                <section key={1} className="contacts-list">
                    {contacts.map((currContact) => (
                        <ContactPreview contactSelected={this.props.contactSelected}
                            key={currContact._id} contact={currContact}></ContactPreview>
                    ))}
                </section>

            </div>
        )
    }
}


export default ContactList;
