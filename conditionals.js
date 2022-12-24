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

// testing out the (&&)AND logical operators
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}
//returns: "You are eligible to vote."
/* we checked if both isCitizen and age 
are true for the if statement overall. if the
2 conditions are false, the whole expression is false. */

//looking at the (||)OR operator 

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}
/*if statement is true when temp is either below or above.
Returns: "Maybe going outside isn't such a great idea" */

if (!raining) {
  console.log("Leave your umbrella at home!");
}