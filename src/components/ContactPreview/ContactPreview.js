import React, { Component } from 'react';
import './ContactPreview.css';
import { Link } from 'react-router-dom'
import M from 'materialize-css';

class ContactPreview extends Component {

    selectContact = () => {
        this.props.contactSelected(this.props.contact)
    }

    render() {
        return (
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                    <img src={`https://robohash.org/${this.props.contact.name}.png`} alt="" />

                    <div class="card-content">
                        <span class="card-title  grey-text text-darken-4">{this.props.contact.name}</span>
                        <p><Link to={`/contact/${this.props.contact._id}`}>Contact Details</Link></p>
                    </div>
                    <div class="card-action">
                        <Link class="waves-effect waves-light btn-small" to={`/contact/edit/${this.props.contact._id}`}>Edit</Link>
                        <button class="waves-effect waves-light btn-small" >Delete</button>
                    </div>
                </div>
            </div>


        )
    }
}


export default ContactPreview;
