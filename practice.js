let a; //undefined
console.log(a)
console.log(a+7)
console.log(a + 'hello')
a = 7; 
console.log(a)

// Remainder operator
console.log(22%2 == 0) // 0 is equal to even
console.log(17%2 == 1) //1 is equal to odd

// Math library, floor rounds down and ceil rounds up
console.log(Math.floor(2.45))
console.log(Math.ceil(2.2))

// shorthand addition, subtraction, multiplication, and division
console.log(a+=10)
console.log(a-=1)
console.log(a*=5)
console.log(a/=2)

// Escaping literal quotes in strings
let myStr = "I am a \"double quoted\" string inside \"double quotes\"."
console.log(myStr)

// Concatenate a string onto the end of an existing variable
let myConcatenatedString = "Hello my name is "
myConcatenatedString += "Conner"

console.log(myConcatenatedString)

// Return the letter at any position starting with 0
console.log(myConcatenatedString[3]) 

// Return the last letter in a string
let lastLetter = myConcatenatedString[myConcatenatedString.length - 1]
console.log(lastLetter)

// Return the nTh-to-last letter in a string
lastLetter = myConcatenatedString[myConcatenatedString.length - 5]
console.log(lastLetter)


// Practice function: return a position in an array using a loop if even or odd
myFunction = () => {
    let arr = ['zero', 'one', 'two', 'three', 'four']
    for (let i = 0; i < 5; i++) {
        if ( i % 2 == 0 ) {
            console.log(arr[i])
        }
        if ( i % 2 == 1) {
            console.log(arr[i])
        }
     }
}
myFunction()

let array = [0,1,2,3,4,5,6,7,8,9,10]

// Easily filters an array and creates a new array
let arr2 = array.filter(number => number % 2 == 0)
console.log(arr2)

// Takes each item in array and performs the provided function on it
let mapArr = array.map( x => x * 5)
console.log(mapArr)

// creating map function without array method
const mapArr2 = (x) => {
    let newArr = []
    for (let i = 0 ; i < x.length; i++) {
       newArr.push(5 * x[i])
    }
    return newArr;
}

console.log(mapArr2(array))

// create the fibonacci sequence
const myFibonacci = (length) => {
    let sequence = [0,1]
        for (let i = 0; i < length - 1; i++) {
            sequence.push(sequence[i] + sequence[i+1])
        }
    return sequence
}

console.log(myFibonacci(7))



