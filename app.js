'use strict';

var counter = 0;

alert('Hello. Please answer some questions to learn a little bit about me!');
var answerOne = prompt('Do I like spam? Please answer yes or no.').toLowerCase();
var responseOne = 'Yes'.toLowerCase();
if (answerOne === responseOne){
  alert('yes, you are correct, one point for you!');
  counter++;
} else {
  alert('Who doesn\'t like spam? You get no points!');
}
console.log('spam', answerOne);
console.log('yes', responseOne);

var answerTwo = parseInt(prompt('How many toes do I have?').toLowerCase());
var responseTwo = 10;
if (answerTwo === responseTwo){
  alert('That\'s right, I have 10 toes.');
  counter++;
} else {
  alert('No, I have 10 toes.');
}
console.log('10', answerTwo);
console.log('10', responseTwo);

var answerThree = prompt('What is my favorite food?').toLowerCase();
var responseThree = 'Vietnamese'.toLowerCase();
if (answerThree === responseThree) {
  alert('Yes, I love it!');
  counter++;
} else {
  alert('No, it\'s Vietnamese food');
}
console.log('VietnameseFood', answerThree);
console.log('VietnameseFood', responseThree);

var answerFour = prompt('What is my favorite show right now?').toLowerCase();
var responseFour = '90 Day Fiance'.toLowerCase();
if (answerFour === responseFour) {
  alert('Yes that\'s right!');
  counter++;
} else {
  alert('Nah you wrong');
}
console.log('90DayFiance', answerFour);
console.log('90 Day Fiance', responseFour);

var answerFive = prompt('Am I good at sports? Please answer yes or no.').toLowerCase();
var responseFive = 'No';
if (answerFive === responseFive) {
  alert('That\'s correct!');
  counter++;
} else {
  alert('That\'s incorrect.');
}
console.log('No', answerFive);
console.log ('No', responseFive);

var answerSix = parseInt(prompt('How many siblings do I have?').toLowerCase());
var responseSix = 6;
if (answerSix === responseSix) {
  alert('That\'s right! How did you know?');
  counter++;
} else {
  alert('That\'s wrong!!!!');
}
console.log('7', answerSix);
console.log('7', responseSix);

function seventhQuestion() {
  var answerSeven = prompt('What is my favorite color?').toLowerCase();
  var responseSeven = ['purple', 'pink', 'grey'];
  var colorCounter = 0;
  var correct = false;
  console.log('favoriteColor', answerSeven);
  console.log('responseSeven', responseSeven);

  while (correct === false && colorCounter < 5) {
    for (var i = 0; i < responseSeven.length; i++) {
      if (answerSeven === responseSeven[i]){
        correct = true;
      } if (answerSeven === responseSeven[i]) {
        alert('That\'s right!!!!');
        correct = true;
        counter++;
        break;
      } else {
        responseSeven = prompt('Try Again.');
        colorCounter++;
        break;
      }
    }
  }
}

seventhQuestion();

alert('Thanks! You got ' + counter + ' out of 7 right! ');
