/*
Write two functions:

toArray(), which converts a number to an array of its digits.
toNumber(), which converts an array of digits back to its number.
Examples
toArray(235) ➞ [2, 3, 5]

toArray(0) ➞ [0]

toNumber([2, 3, 5]) ➞ 235

toNumber([0]) ➞ 0
Notes
All test cases will be weakly positive numbers: >= 0
*/

function toArray(num) {
	return num.toString().split('').map(Number)
}

function toNumber(arr) {
	let str = ''
	arr.map(num => str+=num)
	return parseInt(str)
}

console.log(toArray(564))
console.log(toNumber([5,4,2]))