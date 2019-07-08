'use strict';

alert('Hello. Answer some questions to learn a little bit about me');
var answerOne = prompt('Do I like spam? Please answer yes or no.').toLowerCase();
var responseOne = 'Yes'.toLowerCase();
if (answerOne === responseOne){
  alert('yes, you are correct, one point for you!');
}
else {
  alert('Who doesn\'t like spam? You get no points!');
}
console.log('spam', answerOne);
console.log('yes', responseOne);

var answerTwo = prompt('How many toes do I have?').toLowerCase();
var responseTwo = '10'.parseInt();
if (answerTwo === responseTwo){
  alert('That\'s right, I have 10 toes.');
}
else {
  alert('No, I have 10 toes.');
}
console.log('two', answerTwo);
console.log('10', responseTwo);


alert('I have 10');
var answerThree = prompt('What is my favorite food?').toLowerCase();
console.log('vietnameseFood', answerThree);
alert('Christmas is alright, Thanksgiving is where it\'s at');
var answerFour = prompt('What is my favorite show right now?').toLowerCase();
console.log('90DayFiance', answerFour);
alert('Water consumption is definitely necessary. Otherwise, you die.');
var answerFive = prompt('Am I good at sports?').toLowerCase();
console.log('gills', answerFive);
alert('No, but that\'s your opinion');
