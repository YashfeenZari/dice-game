// alert ("working");  ..just to check if file is linked 

// section--random no .1
var randomNumber1=Math.floor(Math.random()*6)+1; //no 1-6
   
// images/dice6.png --- as format is like this 
var randomDicesImg1="dice"+randomNumber1+".png"; // img dice1 to dice6
var randomImg1="images/"+randomDicesImg1;        // inside file images .. images/dice1.png to images/dice2.png

var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImg1);


// document.querySelectorAll("img")[1].setAttribute("src",randomImg); ---can not do ..bcz both will get same values 

// esction random Node. 2 -- in shortcut way
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImg2 = "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImg2);




if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins!";
}else {
    document.querySelector("h1").innerHTML="Draw";
}

