
var pass = 50; //Pass mark
var score = 90;//score

//Check if the user has passes
var hasPassed = score >=  pass;

//Write the message into the page
var el = document.getElementById('answer');
el.textContent = "Level passed: " + hasPassed;

//Comparing Two Experssions
var score1 = 90; //Round 1 score
var score2 = 95; //Round 2 score
var highScore1 = 75; //Round 1 high score
var highScore2 = 95; //Round 2 high score

//Check if scores are high than current high scores
var comparison = (score1 + score2) > (highScore1 + highScore2);
//Write message into the page
var el = document.getElementById('answer1');
el.textContent = "New High Score: " + comparison;

//Using Logical And
var score1 = 8;//Round 1 score
var score2 = 8;//Round 2 score
var pass1 = 6;//Round 1 Pass mark
var pass2 = 6;//Round 2 Pass mark
//See if user passed both round, store result in variable
var passBoth = (score1 >= pass1) && (score2 >= pass2);
//Create message
var msg = "Both rounds pass: " + passBoth;
//Write message into page
var el = document.getElementById('answer2');
el.textContent = msg;

//Using Logical or & Logical not
var scores1 = 14;//Round 1 scores
var scores2 = 14;//Round 2 scores
var passes1 = 16;//Round 1 pass mark
var passes2 = 16;//Round 2 pass mark
//Check is user has passed either one of the two rounds, stores
var minPass = ((scores1 >= passes1) || (scores2 >= passes2));
//Create message
var message = "Revist required: " + !(minPass);
//Write message into page
var ele = document.getElementById('answer4');
ele.textContent = message;

//Using IF Statments
var score = 75;
var msg;

if (score >= 50) {//If score is greater than 50
  msg = "Congratulations!";
  msg += " Proceed to the next round";
}
var el = document.getElementById('answer5');
el.textContent = msg;

//Using IF...Else statements
var pass = 50;
var scored = 75;
var mgs;

//Select message to write based on the score
if (scored >= pass) {
  mgs = "Congratulations, you passed it ";
} else {
  mgs = "Have another try";
}
var pTag = document.getElementById('answer6');
pTag.textContent = mgs;

//Using Switch Statements
var msg; //message
var level = 2;//level

//Determine message based on level
switch (level) {
  case 1:
    msg = "Good luck on the first test";
    break;

  case 2:
    msg = "Second of three - keep going";
    break;

  case 3:
    msg = "Final round, almost there";
    break;

  default:
    msg = "Good luck!";
    break;
}
//Write message into the page
var text = document.getElementById('answer7');
text.textContent = msg;

//The For loop
for (var i = 0; i < 10; i++){
  prompt(i);
}

//The For loop
var scores = [24,34,31];//Array of scores
var arrayLength = scores.length;//Items in arrau
var roundNumber = 0;//Current round
var msg = "";//Message
var i;//Counter
//loop through items in array
for (i = 0; i < arrayLength; i++){
  //Add 1 to the current round
  roundNumber = (i + 1);
  //Write the current round to message
  msg += "Round " + roundNumber + ": ";
  //Get the score from the scores array
  msg += scores[i] + "<br />";
}
var textEl = document.getElementById('answer8');
textEl.textContent = msg;
