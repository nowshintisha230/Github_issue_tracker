# Differance between let,var and const
- var – function-scoped, can be redeclared & updated, hoisted.  
- let – block-scoped, can be updated, cannot be redeclared in the same block.  
- const – block-scoped, cannot be updated or redeclared, must be initialized.

# Spread opeartor(...):Expands arrays or objects.  
 ## js example:
const arr1 = [1,2,3]; 
const arr2 = [...arr1,4,5]; // [1,2,3,4,5]  

# Differance between map(),filter(),and foreach():
**map()** – Transforms each element and returns a new array.  
**filter()** – Returns a new array with elements that pass a condition.  
**forEach()** – Executes a function on each element, does not return a new array.

# Arrow function:  A shorter way to write functions using `=>`. 
## js example:
const add = (a, b) => a + b; // same as function add(a, b) { return a + b; }

# Template Literals – Strings using backticks `` ` `` that can embed variables or expressions.    
## js example:
const name = "Tisha";
const greeting = `Hello, ${name}!`; // "Hello, Tisha!"
const sum = `2 + 3 = ${2 + 3}`;    // "2 + 3 = 5"
