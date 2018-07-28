// Let's start with an array of our favorite topics

topics = [
  "data science",
  "neuroscience",
  "art history",
  "economics",
  "synthetic biology",
  "squats",
  "philosophy"
];

// The JS for loop you'll always see in JS intro is the following:

//create an index variable (better to use let than var; while the index is less than the length of our topics array, do the following; after going through the loop once, make our index increase by one)
for (var i; i < topics.length; i++) {
  console.log("what are some good books for " + topics[i] + "?");
}

//a simpler (and more recent) way of writing this type of loop is the following:

for (var i in topics) {
  console.log("You're looking at a future master of " + topics[i] + ". (⌐■_■)");
}

// If you don't want to deal with the index, there's a new (ECMAScript 2015) type of loop which accesses the element directly:
//for more info check out https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

for (var thing of topics) {
  console.log("Bro, do you even " + thing + "?");
}

//Like Python, JavaScript has useful break and continue statements if certain conditions are met.
// For more advanced break/continue with labels, check out https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#break_statement

for (let thing of topics) {
  if (thing == "squats") {
    console.log("...okay I guess we're done with studying");
    break;
  }
  console.log("I have homework in " + thing);
}

for (let i in topics) {
  console.log("How do you spell " + topics[i] + "?");
  //Now we're looping thru each letter in the topics
  if (topics[i].length > 7) {
    console.log("Idk, google it");
    continue;
  }
  for (j in topics[i]) {
    console.log(topics[i][j]); //print the jth letter of the ith word in our topics array
  }
}
