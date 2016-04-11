import {
    Template
} from 'meteor/templating';

import {
    Contacts
} from '../api/contacts.js';

import './contact.js';

import './body.html';

Template.body.helpers( {
    contacts() {
        return Contacts.find();
    }
} );

// if ( Contacts.find().count() === 0 ) {
//     Contacts.insert( {
//         name: 'Pierre Nanterme',
//         job: 'Chairman and CEO',
//         company: 'Accenture'
//     } );
//     Contacts.insert( {
//         name: 'Kumar Birla',
//         job: 'Chairman',
//         company: 'Aditya Birla Group'
//     } );
//     Contacts.insert( {
//         name: 'Evan G. Greenberg',
//         job: 'CEO',
//         company: 'ACE Limited'
//     } );
// }
