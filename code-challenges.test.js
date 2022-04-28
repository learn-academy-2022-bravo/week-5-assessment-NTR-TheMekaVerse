// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) 

// Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.


// Create a test - function name: matrixLingo
// Input: any string
    // Convert string to coded string via changes below: 
        // 'a' --> 4
        // 'e' --> 3
        // 'i' --> 1
        // 'o' --> 0
    // Replace function?
// Output: secret coded version of the input string


describe("matrixLingo", (string) => {
    it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {
    const secretCodeWord1 = "Lackadaisical"
    const secretCodeWord2 = "Gobbledygook"
    const secretCodeWord3 = "Eccentric"
        expect(matrixLingo(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(matrixLingo(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(matrixLingo(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// ******* RED FAILURE *******
// ReferenceError: matrixLingo is not defined


// b) Create the function that makes the test pass.

matrixLingo = (string) => {
    return string.replace(/a/gi, "4").replace(/e/gi, "3").replace(/i/gi, "1").replace(/o/gi, "0")
}

// ******* GREEN FAILURE *******
// Although my first though was to use a loop, the built-in string method (.replace()) can perform its actions on all of the instances of the letters (throughout the word and case insensitive) by using the '/gi' ending in the first param.

    // PASS  ./code-challenges.test.js
    // matrixLingo
    //   ✓ takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0 (1 ms)

    // Test Suites: 1 passed, 1 total
    // Tests:       1 passed, 1 total


// ******* REFACTOR *******
// I believe this may be the cleanest version of this function.



// ---------------------------------------------------------------



// 2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

// Create a test - function name: arrayContains
// Input: Array of words + single letter
    // Find method? (works on array, returns value at the matching index)
    // Filter?
// Output: Words from the array that contain the single letter


describe("arrayContains", () => {
    it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
        const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
        const letterA = "a"
        const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
        const letterE = "e"
            expect(arrayContains(arrayOfWords1, letterA)).toEqual(expect.arrayContaining(["Apple", "Banana", "Orange"]))
            expect(arrayContains(arrayOfWords2, letterE)).toEqual(expect.arrayContaining(["Cherry", "Blueberry", "Peach"]))
    })
})

// ******* RED FAILURE *******
// ReferenceError: arrayContains is not defined



// b) Create the function that makes the test pass.

arrayContains = (array, letter) => {
    return includesLetter = array.filter((value) => value.includes(letter) || value.includes(letter.toUpperCase()))
}

// ******* GREEN FAILURE *******
// Ended up using the includes method.
// The find method would not work. I believe that is because it is meant to reference a function, rather than the single variable in this instance.

    // PASS  ./code-challenges.test.js
    // arrayContains
    //   ✓ takes in an array of words and a single letter and returns all the words that contain that particular letter (1 ms)

    // Test Suites: 1 passed, 1 total
    // Tests:       1 passed, 1 total


// ******* REFACTOR *******
// I believe this may be the cleanest version of this function.


// --------------------3) 


// Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.


// Create a test - function name: fullHouseChecker
// Input: array of 5 numbers
    // Sort the numbers before checking for match?  --  function(a, b){return a-b}
// Output: Boolean value based upon whether the array meets full house criteria
    // Full house criteria: one pair and three of a kind
        // first 3 match && last 2 match
        // first 2 match && last 3 match

describe("fullHouseChecker", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a “full house”", () => {
        const hand1 = [5, 5, 5, 3, 3]
        const hand2 = [5, 5, 3, 3, 4]
        const hand3 = [5, 5, 5, 5, 4]
        expect(fullHouseChecker(hand1)).toEqual(true)
        expect(fullHouseChecker(hand2)).toEqual(false)
        expect(fullHouseChecker(hand3)).toEqual(false)
    })
})


// ******* RED FAILURE *******
// ReferenceError: fullHouseChecker is not defined


// b) Create the function that makes the test pass.

fullHouseChecker = (array) => {
    let card1 = array[0]
    let card2 = array[1]
    let card3 = array[2]
    let card4 = array[3]
    let card5 = array[4]
   
    if (card1 == card2 && card2 == card3 && card4 == card5){
        return true
    } else if (card1 == card2 && card3 == card4 && card4 == card5) {
        return true
    } else {
        return false
    }
}


// ******* GREEN FAILURE *******
// Initially thought to use the sort method, however it does not appear to contribute to shortening the code, therefore it was not used. I feel like a map method would work for this problem but I haven't figured out the solution for such.

    // PASS  ./code-challenges.test.js
    // fullHouseChecker
    // ✓ takes in an array of 5 numbers and determines whether or not the array is a “full house” (1 ms)

    // Test Suites: 1 passed, 1 total
    // Tests:       1 passed, 1 total


// ******* REFACTOR *******
// There should be a way to reference each index in the array without instantiating variables but I couldn't figure out how to get it to work when establishing the conditionals.


  

    
