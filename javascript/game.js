//Variables
//=================================================================
var computerNum = Math.floor(Math.random() * 100 + 20);
var userNum = 0;

//Each crystal button will be set to a random number between 1 and 10
var gem1 = Math.floor(Math.random() * 9 + 1);
var gem2 = Math.floor(Math.random() * 9 + 1);
var gem3 = Math.floor(Math.random() * 9 + 1);
var gem4 = Math.floor(Math.random() * 9 + 1);
 
//Variables for wins losses and score count
var scoreCount = 0;
var winCount = 0;
var lossCount =0;


//Functions
//=================================================================
 //Game will choose a random number on load 
 function gameStart() {
 	$("#randomNum").text("We've collected" + " " + computerNum + " " + "crystals");
 	$("#playerNum").text("You've collected" + " " + userNum + " " + "crystals");
 }

//Resets the game
 function resetGame() {
 	gem1 = Math.floor(Math.random() * 9 + 1);
    gem2 = Math.floor(Math.random() * 9 + 1);
	gem3 = Math.floor(Math.random() * 9 + 1);
	gem4 = Math.floor(Math.random() * 9 + 1);
	computerNum = Math.floor(Math.random() * 100 + 20);
 	userNum = 0;
 	$("#randomNum").text("We've collected" + " " + computerNum + " " + "crystals");
 }

//Incriments wins 
 function winGame() {
 	winCount++;
 	$("#wins").text(winCount);
 	$("#wins").text("Wins" + " " + winCount);
 	resetGame();
 }

//Incriments losses
 function loseGame() {
 	lossCount++;
 	$("#losses").text(lossCount);
 	$("#losses").text("Losses" + " " + lossCount);
 	resetGame();
 }

//Main Proccesses
//=================================================================
$(document).ready(function() {

//$("#fade").hide(0).delay(500).fadeIn(3000);

gameStart();

//Displays the wins, losses, and total score
$("#wins").text("Wins" + " " + winCount);
$("#losses").text("Losses" + " " + lossCount);
//$("#totalScore").text("Total Score" + " " + scoreCount);


//Assign click to corresponding button
$("#gemBtn1").on('click', function() {
	userNum = userNum + gem1;
	$("#playerNum").text("You've collected" + " " + userNum + " " + "crystals");
	//if we win execute win game function
	  if (userNum === computerNum) {
	  	winGame();
	 //if we lose execute lose game function
	  }else if(userNum > computerNum) {
	  	loseGame();
	  }
});

$("#gemBtn2").on('click', function() {
	userNum = userNum + gem2;
	console.log(gem1);
	$("#playerNum").text("You've collected" + " " + userNum + " " + "crystals");
	  if (userNum === computerNum) {
	  	winGame();
	  }else if(userNum > computerNum) {
	  	loseGame();
	  }
});

$("#gemBtn3").on('click', function() {
	userNum = userNum + gem3;
	console.log(gem1);
	$("#playerNum").text("You've collected" + " " + userNum + " " + "crystals");
	  if (userNum === computerNum) {
	  	winGame();
	  }else if(userNum > computerNum) {
	  	loseGame();
	  }
});

$("#gemBtn4").on('click', function() {
	userNum = userNum + gem4;
	console.log(gem1);
	$("#playerNum").text("You've collected" + " " + userNum + " " + "crystals");
	  if (userNum === computerNum) {
	  	winGame();
	  }else if(userNum > computerNum) {
	  	loseGame();
	  }
});

});