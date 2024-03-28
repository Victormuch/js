/**
 * Objects - it is a collection of data consisting of key value pairs ()
 * and separated by comma {} 
 * syntax used are the {} brackets and use colon
 */

const firstName = "John"
const lastName = "Doe"

const person ={
    firstName: 'John',
    lastName: 'Doe',
    //unconvectional keys 
    ['full name']: 'Joe Doe',
    age: 34,
    address: {
        county: 'Nairobi',
        subCounty: 'Kinoo',
        postalCode: 2000
    },
    children: ['Jane', {fullName: 'Allan Gitonga', age: 20}]
};

//Accessing values inside an object
//1. Dot notation (.)
console.log(person.children[1].age)
console.log(person.address.subCounty)

//2. Square bracket notation []
console.log(person['full name'])
console.log(person.address['county'])
console.log(person['address']['subCounty'])

// Adding properties
person.birthday = 2004,
person['job']= 'Software Engineer'


console.log(person)

// Update properties
person.firstName= 'Victor'
person['full name'] = 'Victor Nyingi'

// Deleting properties
delete person.job
delete person['lastName']

console.log(person)
