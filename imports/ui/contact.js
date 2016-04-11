import {
    Template
} from 'meteor/templating';

import {
    Contacts
} from '../api/contacts.js';

import './contact.html';

Template.contact.events( {
    'click tr' () {
        Contacts.update( this._id, {
            $set: {
                checked: !this.checked
            },
        } );
    }
} );
