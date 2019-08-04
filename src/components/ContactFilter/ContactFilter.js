import React from 'react';
import './ContactFilter.css'

class ContactFilter extends React.Component {
    
    render() {
        return (
            <div>
                <input type="text" className="search-box" value={this.props.filterBy.term} onChange={this.props.handleChangeTxt} placeholder="Search contact..." />
            </div>
        );
    }
}

export default ContactFilter;

