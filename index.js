var randomnumber1=Math.floor(Math.random()*6)+1;
var randomDiceimage="dice"+randomnumber1+".png";
var randomImageSource="images/"+randomDiceimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomDiceimage2="dice"+randomnumber2+".png";
var randomImageSource2="images/"+randomDiceimage2;
var image2=document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

function myFunction() {
  location.reload();
}
