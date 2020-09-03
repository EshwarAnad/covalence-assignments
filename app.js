// Part 1 Hoisting

// name = 'abhishek'
// var name // Only the declarations using the var keyword are hoisted
// let name // using let, we get reference error because of not following hoisting rules!
// console.log(name)
// Hoisting is applicable just for var variables and not for let or const keywords

// Hoisting follows in this order:
// First all the functions gets hoisted at the top of the scope, and all the variables
// (only the var one's) are getting hoisted below to the functions and then all the assignments 
// and other functions are getting hoisted.

// Note: Inside of a function also, all hoisted in the same order as mentioned above!

// setName()
// function setName() {
//     var name = 'abhishek'
//     console.log(name)
// }
// works as expected!

// console.log('some text');
// let avg = findAvg(2, 2);
// console.log('some text', avg);
// function findAvg(a, b) {
//     console.log('some text');
//     var answer = ( a + b) / 2;
//     return answer;
// }


// Part 2 Scoping

// let name = ['abhishek', 'bunga', 'naidu']
// // let favName
// function printName() {
//     let favName = name[2]
//     console.log(name[0])
// }

// function printFavName() {
//     console.log(favName)
// }

// printName()
// printFavName()

// favName item is showing refError, because of scopping!

