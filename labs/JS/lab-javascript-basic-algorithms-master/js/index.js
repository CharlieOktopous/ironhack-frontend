// Iteration 1: Names and Input

let hacker1;
let hacker2;

hacker1 = "Dimitri";
hacker2 = "Bertra"
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

//
// Iteration 2: Conditionals
if (driverNameLength > navigatorNameLength) {
  console.log("The driver has the longest name, it has " + driverNameLength + " characters");
  shortestNameLength = navigatorNameLength;
} else if (navigatorNameLength > driverNameLength) {
  console.log("Yo, navigator got the longest name, it has " + navigatorNameLength + " characters");
} else {
  console.log("wow, you both got equally long names, " + driverNameLength + " characters!!")
}

// Iteration 3: Loops


var spacedDriverName = '';
var driverUppercase = hacker1.toUpperCase();
for (var i = 0; i < driverNameLength; i++) {
  spacedDriverName += driverUppercase[i] + ' ';
}
spacedDriverName = spacedDriverName.trim();

var reversedNavigatorName = '';
for (i = navigatorNameLength - 1; i >= 0; i--) {
  reversedNavigatorName += hacker2[i];
}
console.log(spacedDriverName);
console.log(reversedNavigatorName);
var comparisonDone = false;
for (i = 0; i < shortestNameLength; i++) {
  if (hacker1[i] < hacker2[i]) {
    console.log("The driver's name goes first");
    comparisonDone = true;
    break;
  } else if (hacker1[i] > hacker2[i]) {
    console.log("Yo, the navigator goes first definitely");
    comparisonDone = true;
    break;
  }
}
if (!comparisonDone) {
  console.log("What?! You both got the same name?");
}

var palindrome = prompt("Please type a palindrome: ");
var cleanPalindrome = palindrome.toLowerCase().replace(/\W/g, '');
var loopEndCondition = cleanPalindrome.length % 2 ? (cleanPalindrome.length - 1) / 2 : cleanPalindrome / 2;

console.log(loopEndCondition);

//for (i = 0, j= cleanPalindrome.length; ) {}



