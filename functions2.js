// functions
//Parameters-variables that are placed inside the function
//ARGUMENTS- this are the values that are placed when calling/invoking

// 1. creating using function keywords
//syntax
function functionName() {
console.log("I am inside a function")
}

function greetings (firstName, timeOfDay){
    console.log(`Good ${timeOfDay} ${firstName} ,  have a nice day`)
}

function greetJane (){
    console.log('Good morning, Jane have a nice day')
}

// in order for a declared function to work ;
// we have to call/invoke
functionName();

functionName();
functionName();
greetings('Tony', 'morning');
greetings('Victor', 'afternoon')

function caps (str){
  //console.log(str[0]);
  //console.log(str.charAt(0).toUpperCase());
  //console.log(str.slice(1))
  return str.charAt(0).toUpperCase() + str.slice(1)
}

console.log(caps('tony stark'))
//2. ARROW FUNCTION
   //syntax
   // number operator are 'greater than >='
   //arrow - function (=>)
const capsT = (str) => str.charAt(0).toUpperCase() + str.slice(1)

console.log(capsT('moringa'))
//objects are a collection of data rep in key/value parts separated by
const car = {
    model: 'Audi',
    yearOfManufacture: 2020,

} 
console.log(car)

//callback function-

    

//work
function isItLetter(letter){
  if (['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 
    'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p',
     'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x',
      'Y', 'y', 'Z', 'z'].includes(letter)){
        return "A letter";
    } else {
        return "Not a letter";
    }
}
console.log(isItLetter('A')); 
console.log(isItLetter('na')); 

// work1.1
function isItLetter2 (word){
    const tell = [...word]
    .every(word => (word >= 'a' && word <= 'z') ||(word >= 'A' && word <= 'B')  );
    console.log(tell);
    return tell
}

isItLetter2('9')

//work1.2
function isItLetter(character) {
    return/[a-zA-Z]/.test(character)
}
console.log(isItLetter("A"));
