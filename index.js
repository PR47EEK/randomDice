var p1=Math.floor(Math.random()*6)+1;
var p2=Math.floor(Math.random()*6)+1;
var diceName1="images/dice"+p1+".png";
var diceName2="images/dice"+p2+".png";
var image1=document.querySelector(".img1");
var image2=document.querySelector(".img2");
image1.setAttribute("src",diceName1);
image2.setAttribute("src",diceName2);
if(p1>p2)
document.querySelector("h1").innerHTML="Player 1 wins";
else if(p1===p2)
document.querySelector("h1").innerHTML="try again";
else
document.querySelector("h1").innerHTML="Player2 Wins";
