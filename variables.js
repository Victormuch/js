// varable- a container in which we can store values for later retrieval

/** rules when creating variables in js
 * 1. Use camelCase naming convection
 * 2. Case senstitive 
 * 3. We should not use key words
 * 4. Should not start with a number
 */

//1. Immutable variable using const
// declaring a variable
const fullName = 'Jane Doe'

console.log(fullName)

2// mutable variables
let age = 30

console.log(age)

//reassign 
age =34

console.log(age)


/// 
function greetings(firstName, timeOfYear){
console.log(`Good ${firstName} ${timeOfYear}, have a nice day `)
}

greetings('morning', 'Victor');
