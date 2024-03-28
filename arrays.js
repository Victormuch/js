/**
 * Data structures
 * - allow us to represent other forms of data
 * like lists(arrays) and collections(objects)
 */

// Arrays - list of values enclose using square brackets --> []
// The values can be of any data types

// Creating arrays
//1. Array constructor
const students = new Array("Victor", "Imani", "Lewis");

console.log(students);

//2. square brackets
const cars = ["Audi", "Range Rover", "BMW"];

console.log(cars);

// Index - position of an element/value in an array
// ! the 

// we can use the index to access elements inside an array
console.log(cars[0])
console.log(students[1])

cars[2] ="Porshe" // updating
cars[3]= 'Bugati' // adding new items
console.log(cars.length)

// Array methods - allows us to manipulate arrays
const colors = ['red', 'green']

/**
 * Adding elements
 */

//1. .push() -> add one or more elements at the end
colors.push('blue', 'violet')

console.log(colors)

//2. . unshif() -> add one or more element at the beginning 
colors.unshift('purple', 'yellow')
colors.unshift('pink')
console.log(colors)

/**
 * Removing elements
 */

// 1. pop()- removes the last element
colors.pop()
console.log(colors)

//2. shift()--removes the first element
colors.shift()
colors.pop()
console.log(colors)

/**
 * SLICE -> non destructive (does not mutate the origine array)
 * 
 * Can make a copy of the original array
 * Delete element in an array
 */

const people = ['kamau', 'Olive', 'Imani', 'Victor', 'Evans']

//1. make a copy of people
//! as long as no argument are passed slice will always make a copy
const copyOfPeople = people.slice()
console.log(copyOfPeople)

//spread operator -> makes a copy too [...]
const secondcopy =[...people]

console.log(secondcopy)

//2. Deleting values
const deletedPeople = people.slice(1, 4)
console.log(deletedPeople)

/**
 * SPLICE destructive 
 * 
 * delete elements
 * add new elements
 * update elements
 */

// 1. delete elements
const days =['Monday', 'tue', 'wed', 'thur', 'fri']

console.log(days)

const deletedDays = days.splice(0, 2)

console.log(deletedDays)

console.log(days)

//adding elements
// ! the second argument should be always be zero 0
days.splice(0, 0, 'Mon', 'Tue' )
days.splice(5, 0, 'sat')
console.log(days.length, 0, "sun")
console.log(days)

//3. updating
days.splice(0, 1, "monday" )
days.splice(2, 1, 'wednesday')
console.log(days)

// Array iteration
// ITERATION - run statements once for each element
//LOOPING- run statements repetitively until a certain condition is met


const scores = [40, 35, 36, 37, 38, 67]
// for... loop
for (let i = 0; i < scores.length; i++){
      console.log(i)
      const score = scores[i]
      console.log(score)
}
//for ...of 
for (let score of scores){
    console.log(score)
}
for (let letter of 'code'){
    console.log(letter)
}

//Object iteration using for....in
const yooh= {
    firstName: "Victor",
    lastName:"Nyingi"
}
for( const iterator in yooh){
    console.log(iterator)
    console.log(yooh[iterator])
}

//Array iteration method
const copyofScores = [...scores]
console.log(copyofScores)
// 1. indexOf()-> it finds the position of a given element and returns the index,
//or returns a -1 if the element is not found
console.log(copyofScores.indexOf(40))
const indexOfWednesday = days.indexOf('monday')
console.log(indexOfWednesday)

//2. find() -> returns the first element in an arraythat meets a certain condition


const anotherscore = scores.find((scores) => scores > 30)

console.log(anotherscore)
function filter (num){
    if (num >60){
        return num
    }
}

const scoreGreaterThan60 = scores.find(filter)


console.log(scoreGreaterThan60)

//3. filter() -> finds and returns a list of elements that meet a certain condition
const scoresOver50 = scores.filter(score => score > 50)

console.log(scores)
console.log(scoresOver50)



//4. map() -> iterates through the whole array modifying each elementand
// returns the modifed array

const modifiedScores = scores.map(score => score + 2)
const modifedStudents =

console.log(modifiedScores)
console.log(scores)

//5. reduce() -> create a summary or aggregation of values in an array
const sum = scores.reduce((prevValue, currValue, index) =>{
    console.log(index)
    console.log(prevValue)
    console.log(currValue)
    return prevValue + currValue
} , 0)
console.log(sum)

//6. forEach()

scores.forEach((score, index) => {
    console.log(score)
    console.log(index)
})