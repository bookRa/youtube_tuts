// keys

var t = ["a", "variable", "key", "and", "array", "value"];

var obj = {
  a: "first string", //a string key without putting it in quotes
  a: "first string duplicate", // JS treats 'a' the same as a when it comes to keys and will override our first key
  "3": 42, //this 'number' is actually a string
  3: 424242, //and this int will be evaluated the same as "3"
  true: { this: "is", a: true, object: undefined }, //booleans can be used as a key (may be useful if you want to lookup values for anything that is true/untrue)
  null: "doesnt exist", //same with nulls and undefined
  undefined: "try again",
  b: t //JS will store the array t as the value for the key b
  // t: 'some value' ** this is commented out b/c JS will not evaluate the variable t as a key
};

/* some tests */
console.log(obj.a);
console.log(obj.true);
console.log(obj[q]); // q undefined
var q = 3;
console.log(obj[q]); // q refrences 3
