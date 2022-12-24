// used to understand the if statements 
const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}
// shows we can add multiple diff if statements in a row
if (cold) {
  console.log("Make sure you pick out a scarf!");
}
console.log("Now you're ready to go outside!");
/* since its raining, return comes out to say 
"dont forget umbrella" and "Now ur ready to go outside". */

// this tests out the use of if and else statemnet.
const colds = false;

if (colds) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}
//since colds is false, returns "Short sleeves r fine"

//using the if, else and else if statement.
const temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
/* returns: "Short sleeves won't cut it" and 
"Now ur ready to go outside" */