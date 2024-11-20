// Single line comment

/*
    Multi-line-comment

    DATA
        Five primitive data types:
            Number => (3, 1.3443, -64)
            String=> "Hello World", "4", 'Hello World'
            Boolean => true, false
            Undefined =>
            Null
*/

console.log(8 + 5);
console.log(8 - 5);
console.log(8 * 5);
console.log(8 / 5);
console.log(8 ** 5);
console.log(8 % 5);

/*
    Number

    Any numeric character that can be calculated
    Numbers can be used to write expressions

    + => Addition (8 + 5)
    - => Subtraction (8 - 5)
    * => Multiplication (8 * 5)
    / => Division (8 / 5)
    ** => Exponent (8 ** 5)
    % => Modulous (8 % 5)

    Can also order operations
*/

console.log((8 - 3) / 5 + 8*3);

console.clear();

/*
    String
        Character text => any value/key on the keyboard
    Strings are represented by quotations-  single ('') or double ("")
    "Hello World" - White space is included in strings

    Concatenation => combining two or more strings
*/

console.log("Connor");
console.log("Hello World");
console.log("Hello               World");
console.log('8');
console.log(8);

console.log(8 + 5);
console.log('8 + 5');
console.log('Hello' + "World"); //single or double quotes does not matter
console.log("Hello" + ' ' + "World");

// console.log('You can't do this!')
console.log('You can\'t not do this'); //We call this an escape. Like how I want to escape this
console.log("You can't not do this too");
console.log("Coach \nsaid \t'You can use escapes!'");

/*
    Boolean => True or False
*/
console.log(false);
console.log(true);


/*
    Undefined
*/
console.log(undefined);

/*
    Null
*/
console.log(null);

// --------------------------------------------------------------------------- //
/* 
    Data storage => variables

    var, let, const

    syntax:
        var varName = data;

    var keyword
        naming rules and conventions
            - Cannot begin with a number or contain a special charater; must begin with a letter
            - Generally begins with a lowercase; camelCase
            - No spaces or hyphens, use camelCase or underscores
            - var names should mean/represent the refered data
*/
console.clear();

var myName = 'Connor';
console.log(myName);

var foo; //initializes a variable
foo = 8; //asigns data to a variable. ONLY DO WITH INITIALIZED VARIABLE
console.log(foo);

var littleB = 'b'
var bigB = 'B'

console.log(littleB < bigB); //true
console.log(littleB.charCodeAt(0), bigB.charCodeAt(0));

foo = 12;
console.log(foo);
// Nice //
foo = foo + 5;
console.log(foo);

console.clear();

var subtotal = 44.99;
var taxRate = 0.07;

var total = subtotal + (subtotal * taxRate);
console.log(total);

/*
Temperature converter
    Take a temperature in fahrenheith (fah) and convert into celcius (cel)
*/

var fah = 78;
var cel = (fah - 32) * (5/9);
console.log (cel);

var cel = 88
var fah = (cel * (9/5)) + 32
console.log (fah)