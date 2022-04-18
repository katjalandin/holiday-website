/*skapar funktion navSlide för toddle menyn*/
const navSlide = () => {
	/*hittar den första elementen som matchar ".burger", ".nav-links"
	 och placera den i en variabel burger och nav respektive */ 
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav-links");
	//för animation: hitta alla elementer li som ingår i ".nav-links" och placera de i en variabel navLInks//
	const navLinks=document.querySelectorAll(".nav-links li");
	//koppla ihop händelse "click" med elementen "nav-active", som switchar till toggle menyn//
	burger.addEventListener("click", () => {
		nav.classList.toggle("nav-active");
	
	/*animation listor: skapa en funktion. gå igenom navLinks med method forEach för att 
	tilldela animation parameter*/
	navLinks.forEach((link, index) => {

		if (link.style.animation){
			link.style.animation = "";
		} else {
					link.style.animation =  `navLinkFade 0.5s ease forwards ${index/7+1}s `;
	}
	});
	/*för active menyn förändras skylten till en kors*/
	burger.classList.toggle("toggle");
	});
}

navSlide();


let test = document.getElementById("burger_1");
  

  
// This handler will be executed only once when the cursor
// moves over the unordered list
test.addEventListener("mouseenter", function( event ) {   
  // highlight the mouseenter target
  event.target.style.color = "purple";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

// This handler will be executed every time the cursor
// is moved over a different list item
test.addEventListener("mouseover", function( event ) {   
  // highlight the mouseover target
  event.target.style.color = "orange";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

/*for slide-show*/
var i=0;
var images = [];
var time = 3000;

//Bild listan
images[0]="images/asia.jpg";
images[1]="images/channel.jpg";
images[2]="images/mountains.jpg";
images[3]="images/night_city.jpg";
//förändra bilder
function changeImg(){
	document.slide.src=images[i];
	if(i<images.length-1){
		i++;
	}else{
		i=0;
	}
	setTimeout("changeImg()", time);
}
window.onload=changeImg;