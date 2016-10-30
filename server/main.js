import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});


console.log( testServerFunction() );
console.log( clientAndServerFunction() );
console.log( fakeName() );
console.log( faker1.internet.email() );