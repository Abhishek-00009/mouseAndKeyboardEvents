function hello() { 
	alert("hi");
       };
 function bye() {
      alert("bye");
       };
 function mouseover() {
      console.log("mouse over");
       };
function mouseout() {
      console.log("mouse out");
       };
function keypress() {
      console.log("Key press");
       };
function keydown() {
      console.log("Key down");
       };

function keydetect(event) {
      console.log("key down",event.keyCode);
       };


var hi=document.querySelector(".btn2");

hi.addEventListener("click",hello);
hi.addEventListener("click",bye);

var divOuter=document.getElementById('outer');
divOuter.addEventListener('mouseover',mouseover);
divOuter.addEventListener('mouseout',mouseout);

/*var key=document.getElementById('search');
key.addEventListener('keypress',keypress);*/

//like u are designing a game u want your entire document use the keyboard to move the snake then use the below code


/*document.addEventListener('keypress',keypress);*/


//keypress= keydown + key up event

/*document.addEventListener('keydown',keydown);*/

//in order to know which key is pressed u have to pass the event as  well
document.addEventListener('keydown',keydetect);