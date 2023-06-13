//Pyramid Printer
//This challenge consists of multiple levels
//Use console.log() inside of the function to print the results
//no return value
//One parameter: height
//Level 1:
// Create a right triangle of characters:
// example:
// X
// XX
// XXX
// XXXX
// XXXXX
// XXXXXX
// XXXXXXX

function triangle(inputValue) {

    for (i=0; i<=inputValue; i++) {
        console.log('x'.repeat(i));

    }
}

triangle(6)