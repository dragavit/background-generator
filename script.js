var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
// а можно не прописывать addEventListener и добавить функцию непосредственно в HTML код:
// 	<input onimput="setGradient()" class="color1" type="color" name="color1" value="#0000ff">
// но из-за ceparation of concerns так лучше не делать
