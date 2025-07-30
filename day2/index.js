// test map
array = [2,3,4,5,60]

console.log(array.map(x => x * 2))
console.log(array.filter(x => x % 2 == 0))
// find và findIndex phải đi kèm với một condition

// array.splice(2, 1, 70, 80)
array.splice(array.indexOf(5), 1, 70, 80)
console.log(array)

function isnotEven(x) {
    return !(x % 2 == 0)
}

console.log(array.filter(x => isnotEven(x)))

