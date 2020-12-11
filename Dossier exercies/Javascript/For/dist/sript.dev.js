"use strict";

var message = '';
var ticket = ['eco', 'eco', 'first', 'second', 'first', 'eco', 'second', 'eco', 'eco', 'first', 'second', 'first', 'eco', 'second'];

for (var index = 0; index < ticket.length; index++) {
  switch (ticket[index]) {
    case 'eco':
      message = 'Vous etes en classe éco';
      break;

    case 'second':
      message = 'Vous étes en seconde classe';
      break;

    case 'first':
      message = 'Vous étes en première classe';
      break;

    default:
      message = 'Votre ticket svp';
  }

  console.log(index + ' : ' + message);
}