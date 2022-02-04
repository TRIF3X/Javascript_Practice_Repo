/*
Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

Examples
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1]
Notes
All test arrays will have at least one element and are valid.
*/

function minMax(arr) {
	let max = arr[0]
	let min = arr[0]
	arr.map(num => num <= min ? min = num : null)
	arr.map(num => num >= max ? max = num : null)
	return [min, max]
}

console.log(minMax([5,6,1,4,10,323,23]))