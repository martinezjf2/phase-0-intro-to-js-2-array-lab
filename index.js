// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    return cats.push(name)
}

function destructivelyPrependCat(name) {
    return cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    return cats.pop()

}

function destructivelyRemoveFirstCat() {
    return cats.shift()
}


function appendCat(name) {
    return [...cats, name]
}

function prependCat(name) {
    return [name, ...cats]
}

function removeLastCat() {
    // returns a new array of all elements besides the last element
    return cats.slice(0, cats.length - 1)

}

function removeFirstCat() {
    // returns a new array starting from index 1 and after
    return cats.slice(1)
}