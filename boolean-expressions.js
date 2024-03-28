/**
 * boolean expressions
 *
 * Anything that evaluates to true/false
 */
console.log(Boolean(0));
console.log(Boolean(false));
console.log(Boolean(1));
console.log(Boolean());

//1.comparision operators- compare equality of values

/**
 * i. strict equality operator (===)
 * compares values and data types
 *
 */
console.log(23 === 23);
console.log("23" === "23");
console.log(23 === "23");

/**
 * ii. strict inequality operator (!==)
 * checks if the values are not equal plus the datatype
 */
console.log(23 !== "23");
console.log(23 !== 23);

/**
 * iii. loose equality (==) & inequality (!=) operator
 * compares the values only
 */
console.log(23 == '23')
console.log(23 != 24)

//2.Number operators
console.log(12 > 13)
console.log(23 >= 20)

//3.logical operators

//i. NOT     /bang operator (!) - returns the opposite
console.log(!true)
console.log(!false)

//ii. Double bang operator (!!)- it is used instead of the boolean structure
console.log(!!0)
console.log(!! 1)

//iii. AND (&&)- used to combine statement
const age = 12 
const name = "Ian"

console.log(age > 18 && name === "Ian")

//iv. The OR operator (||)- double pipe
console.log(age >10 || name === 23)