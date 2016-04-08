import {
    Template
} from 'meteor/templating';

import './body.html';

Template.body.helpers( {
    contacts: [
        {
            name: 'Pierre Nanterme',
            job: 'Chairman and CEO',
            company: 'Accenture'
    },
        {
            name: 'Evan G. Greenberg',
            job: 'CEO',
            company: 'ACE Limited'
    },
        {
            name: 'Kumar Birla',
            job: 'Chairman',
            company: 'Aditya Birla Group'
    },
  ],
} );
