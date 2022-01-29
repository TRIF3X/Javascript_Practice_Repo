/* 
Create a function that takes two arrays and 
insert the second array in the middle of the first array.

tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]

tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]] 

The first array always has two elements.
Use the spread syntax to solve this challenge.
*/

function tuckIn(arr1, arr2) {
	arr1.splice(1, 0, ...arr2)
	return arr1
}


console.log(tuckIn([[1,2], [5,6]], [3,4]))
console.log(tuckIn([1,5], [2,3,4,]))


// NOTES: Uses splice and spread operator