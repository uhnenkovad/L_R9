var userScore = 0;
var compScore = 0;
var iteration =0;
var father = document.getElementById("usersCard");
var father1 = document.getElementById("compCard");

function writeName(){
	var user = prompt("Input your name");
	document.getElementById('user').textContent = user;
	if(user == "")
	user = "user";
	document.getElementById('user').textContent = user;
}

function game(){
	



 var arrDiamonds = ["Diamonds/6.png","Diamonds/7.png","Diamonds/8.png","Diamonds/9.png","Diamonds/10.png","Diamonds/Jack.png","Diamonds/Queen.png","Diamonds/King.png","Diamonds/Ace.png"];
 var arrHearts = ["Hearts/6.png","Hearts/7.png","Hearts/8.png","Hearts/9.png","Hearts/10.png","Hearts/Jack.png","Hearts/Queen.png","Hearts/King.png","Hearts/Ace.png"] ;
 var arrClubs = ["Clubs/6.png","Clubs/7.png","Clubs/8.png","Clubs/9.png","Clubs/10.png","Clubs/Jack.png","Clubs/Queen.png","Clubs/King.png","Clubs/Ace.png"];
 var arrSpades = ["Spades/6.png","Spades/7.png","Spades/8.png","Spades/9.png","Spades/10.png","Spades/Jack.png","Spades/Queen.png","Spades/King.png","Spades/Ace.png"];
 var randomSuit = Math.floor(Math.random()*4);
 var randomCard = Math.floor(Math.random()*9);



 if (iteration == 0) {
 var img = document.createElement("img");
 img.width = '250';
 img.height = '250';
 if (randomSuit==1) {
 	img.src = arrDiamonds[randomCard];
 }
 else if(randomSuit==2){
 	img.src = arrHearts[randomCard];
 }
 else if(randomSuit==3){
 	img.src = arrClubs[randomCard];
 }
 else{
 	img.src = arrSpades[randomCard];
 }
 document.getElementById("usersCard").appendChild(img);
 
}
else{
	document.getElementById("usersCard").removeChild(father.firstChild);
	var img = document.createElement("img");
 	img.width = '250';
 	img.height = '250';
	if (randomSuit==1) {
 	img.src = arrDiamonds[randomCard];
 }
 else if(randomSuit==2){
 	img.src = arrHearts[randomCard];
 }
 else if(randomSuit==3){
 	img.src = arrClubs[randomCard];
 }
 else{
 	img.src = arrSpades[randomCard];
 }
 document.getElementById("usersCard").appendChild(img);
}





 var randomSuitC = Math.floor(Math.random()*4);
 var randomCardC = Math.floor(Math.random()*9);
if (iteration == 0) {
 var img1 = document.createElement("img");
 img1.width = '250';
 img1.height = '250';
 if (randomSuitC==1) {
 	img1.src = arrDiamonds[randomCardC];
 }
 else if(randomSuitC==2){
 	img1.src = arrHearts[randomCardC];
 }
 else if(randomSuitC==3){
 	img1.src = arrClubs[randomCardC];
 }
 else{
 	img1.src = arrSpades[randomCardC];
 }
 document.getElementById("compCard").appendChild(img1);
 iteration++;
}
else{
	document.getElementById("compCard").removeChild(father1.firstChild);
	var img1 = document.createElement("img");
 	img1.width = '250';
 	img1.height = '250';
	if (randomSuitC==1) {
 	img1.src = arrDiamonds[randomCardC];
 }
 else if(randomSuitC==2){
 	img1.src = arrHearts[randomCardC];
 }
 else if(randomSuitC==3){
 	img1.src = arrClubs[randomCardC];
 }
 else{
 	img1.src = arrSpades[randomCardC];
 }
 document.getElementById("compCard").appendChild(img1);
}
iteration++;


if(randomCardC == 0){
		compScore+=6;
}
else if(randomCardC == 1){
		compScore+=7;
	}
else if(randomCardC == 2){
		compScore+=8;
	}
else if(randomCardC == 3){
		compScore+=9;
	}
else if(randomCardC == 4){
		compScore+=10;
	}
else if(randomCardC == 5){
		compScore+=2;
	}
else if(randomCardC == 6){
		compScore+=3;
	}
else if(randomCardC == 7){
		compScore+=4;
	}
else if(randomCardC == 8){
		compScore+=11;
	}

///
if(randomCard == 0){
		userScore+=6;
}
else if(randomCard == 1){
		userScore+=7;
	}
else if(randomCard == 2){
		userScore+=8;
	}
else if(randomCard == 3){
		userScore+=9;
	}
else if(randomCard == 4){
		userScore+=10;
	}
else if(randomCard == 5){
		userScore+=2;
	}
else if(randomCard == 6){
		userScore+=3;
	}
else if(randomCard == 7){
		userScore+=4;
	}
else if(randomCard == 8){
		userScore+=11;
	}
	

	document.getElementById('uRanValue').textContent=userScore;
	document.getElementById('cRanValue').textContent=compScore;
	if (iteration == 4) {
		if (userScore>compScore) {
		alert("My congratulations, you win");
		return;
	}
	if(userScore<compScore){
		alert("You lose, try to win next time");
		return;
	}
	
	if(userScore==compScore){
		alert("Draw");
		return;
	}
	}
if (iteration >= 4){
	alert("Game over, press F5 and test your luck again");
		return;
}	
}


