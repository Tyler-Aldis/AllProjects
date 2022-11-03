/*var userName = ''
const x = "tyler"
const Mod = y 
const outPut2 = 1
var y = outPut2 + y
var Output= x + y;
const mOutput = x || y
console.log(userName.length)
console.log(`Hello ${x} welcome`)
console.log(y)*/

let button = document.querySelector("shakeBtn");
let answer = document.querySelector("#questionArea");
button.addEventListener("click", function() {
alert("clicked");
});

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
let userQuestion ='will i save the wirld'

console.log(`${userName} has asked -${userQuestion}`)
let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

let eightBall = 'Not today'
switch(randomNumber){
  case 0 :
  eightBall = 'Try Again Later' ;
  break;
   case 1 :
  eightBall = 'I dont care' ;
  break;
   case 2 :
  eightBall = 'Let Me Think...' ;
  break;
   case 3 :
  eightBall = 'Maybe not' ;
  break;
   case 4 :
  eightBall = 'Yes' ;
  break;
   case 5 :
  eightBall = 'Of course' ;
  break;
   case 6 :
  eightBall = 'No' ;
  break;
   case 7 :
  eightBall = 'Sure' ;
  break;
}


