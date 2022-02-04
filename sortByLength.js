function sortByLength(arr) {
    let key = {}
    let temp = []
    let result = []
    arr.map(x => key[x] = x.length)
    for (let i = 0; i < arr.length; i++) {
        temp.push(key[arr[i]])
    }
    temp.sort()
    console.log(key)
    console.log(temp)
    console.log(Object.entries(key)[0][1]) 
    do {
        for (let i = 0; i < temp.length; i++) {
            if (key[i].length == temp[0].length) {
                temp.shift()
                
            }
        }
    } while (temp.length > )
    temp.shift()
    console.log(temp)
    // find the matching key: valve in key push to result and shift from temp
    console.log(result)
}

console.log(sortByLength(["Google", "Apple", "Microsoft"]))