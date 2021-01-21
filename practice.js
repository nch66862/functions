const myFavoriteDogBreed = (breed) => {
    let result = ""
    if (breed == "meow") {
        result = "I like cats"
    }
    else {
        result = `My favorite dog breed is ${breed}`
    }
    return result
}

const functionReturn = myFavoriteDogBreed("meow")
console.log(`When it comes to pets, ${functionReturn}`)

const add = (first, second, third) => {
    return first + second + third
}
console.log(add(17, 4, 11))

const go = (direction, speed) => {
    if (speed > 75) {
        console.log(`The car is moving ${direction} at ${speed} mph. SLOW DOWN!`)
    }
    else {
        console.log(`The car is moving ${direction} at ${speed} mph`)
    }
}
go("forward", 76)
go("backward", 15)

const evenOrOdd = (number) => {
    let result = ""
    if (number % 2 == 0) {
        result = "even"
    }
    else {
        result = "odd"
    }
    console.log(result)
}

evenOrOdd(6)
evenOrOdd(7)
evenOrOdd(0)

const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]
/*
Function to filter out `k` words
(Google 'javascript startswith' to get started)
*/
const filterK = (arrayOfStrings) => {
    let filteredArray = []
    for (const string of arrayOfStrings) {
        if (string.startsWith("k") == false){
            filteredArray.push(string)
        }
    }
    return filteredArray
}
/*
    Function to build a single string from the array
    (Google 'javascript combine all items in array' to get started)
 */
const makeSentenceFromArray = (WordsInArray) => {
    let sentence = WordsInArray.join(' ')
    return sentence
}

/*
    Invoke the filtering function and store its return value
 */
const arrayThatDoesntStartWithK = filterK(words)

/*
    Invoke the string building function, and pass the
    return value of the previous function as an argument
*/
const fullSentence = makeSentenceFromArray(arrayThatDoesntStartWithK)

console.log(fullSentence)

const didSvenCatchATuna = () => {
    const result = Math.random() * 3
    let output = ""
    if (result <= 1) {
        output = "Sven hooked a tuna! :)"
    }
    else {
        output = "Sven came up empty-handed. :("
    }
    return output
}

for (let index = 0; index < 10; index++) {
    console.log(didSvenCatchATuna())
}

const orderMeal = (sandwich, side, drink, dessert) => {
    let order = {}
    order.sandwich = sandwich
    order.side = side
    order.drink = drink
    order.dessert = dessert
    return order
}

console.log(orderMeal("Cheeseburger", "fries", "dr. pepper", "hot fudge sundae"))

const twice = number => number * 2
const timesFive = number => number * 5
const square = number => number * number
const bigify = (number, operationFunction) => {
    const result = operationFunction(number)
    return result
}
const number = 7
const by2 = bigify(number, twice)  // 14
const by5 = bigify(number, timesFive)  // 35
const byItself = bigify(number, square)  // 49

const person = {
    firstName: "Donald",
    lastName: "McLelland"
}

const choreOne = person => `${person.firstName} ${person.lastName} went to the grocery store`
const choreTwo = person => `${person.firstName} ${person.lastName} got the engine oil changed`
const choreThree = person => `${person.firstName} ${person.lastName} mowed the yard`
const choreFour = person => `${person.firstName} ${person.lastName} plowed the field`
const choreFive = person => `${person.firstName} ${person.lastName} harvested his rabbits`

const dayPlanner = (firstChore, secondChore, thirdChore, person, day) => {
    let result = `On ${day}, ${firstChore(person)}, and  ${secondChore(person)}, and ${thirdChore(person)}`
    return result
}

console.log(dayPlanner(choreOne, choreTwo, choreThree, person, "Thursday"))