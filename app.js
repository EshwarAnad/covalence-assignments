name = 'abhishek'
// var name
let name // using let, we get reference error because of not following hoisting rules!
console.log(name)
// Hoisting is applicable just for var variables and not for let or const keywords

// Hoisting follows in this order:
// First all the functions gets hoisted at the top of the scope, and all the variables
// (only the var one's) are getting hoisted below to the functions and then all the assignments 
// and other functions are getting hoisted.

// Note: Inside of a function also, all hoisted in the same order as mentioned above!

