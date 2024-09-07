// Welcome to the TypeScript Playground, this is a website
// which gives you a chance to write, share and learn TypeScript.

// You could think of it in three ways:
//
//  - A location to learn TypeScript where nothing can break
//  - A place to experiment with TypeScript syntax, and share the URLs with others
//  - A sandbox to experiment with different compiler features of TypeScript

const anExampleVariable = "Hello World"
console.log(anExampleVariable)

// To learn more about the language, click above in "Examples" or "What's New".
// Otherwise, get started by removing these comments and the world is your playground.

// Boolean
let isItTrue = true;
let isItFalse: boolean = true;

// string

let itsAString = "Words and stuff";
let itsATSString: string = "More words and stuff";

// number

let aNumber = 8;
let anotherNumber: number = 9;

// an array of booleans (hint: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)

let booleans = [true, false, true, true];
let booleansTS: boolean[] = [true, true, false];

// an array of numbers

let numbers = [1, 2, 33, 4, 5, 6];
let numbersTS: number[] = [1, 2, 3, 4, 5, 6, 7];

// an array of strings

let strings = ["a", "b"];
let stringsTS: string[] = ["a", "b"];

// sum function

function sum(num1: number, num2: number) {
    let total: number = num1 + num2;
    return total
}

// Declare a new type that describes an object
interface Checkout {
    amount: number;
    uniqueId: string;
    isValid: boolean;
    addressLines: string[];
}

// Declare a new type alias named Colour which is either: "BLUE" or "YELLOW"
type Colour = "BLUE" | "YELLOW";

let isItBlueOrYellow: Colour = "BLUE";