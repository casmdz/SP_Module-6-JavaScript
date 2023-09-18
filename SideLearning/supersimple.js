var first_name = 'Bill'
// Display our value to the JS Console
console.log(first_name)

console.log('$28.94')

// strings also follow order of operations
// 1)  (...)
// 2)  * /
// 3)  + -

'$' + (20.95 + 7.99)
// best practice is to calculate in cents and then convert to dollars

'$' + (2095 + 799) /100


'Items (' + (1 + 1) + '): $' + (2095+799) /100;

//alert('Items (' + (1 + 1) + '): $' + (2095+799) /100);

console.log(some_random_variable)
var some_random_variable = 'this is a random string';
console.log(some_random_variable)

const super_hero = 'Ironman';
console.log(super_hero);
// //// super_hero = 'Captain America'; Uncaught TypeError: Assignment to constant variable.
// at supersimple.js:33:12

// 3 ways to create a string
//'...'
//"..."
//`...` BACKTICKS
// backticks = template strings
// INTERPOLATION allows injecting variables, function calls, arithmetic expressions directly into a string

`Items (${1 + 1}): $${(2095+799) /100}`;
// 'Items (2): $28.94'

`some
text`
// >>> 'some\ntext'