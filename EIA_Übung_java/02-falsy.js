let x = false

// falsy values
// - false
// - 0
// -''
// undefined
// null

if (x) {
    console.log('I will never be run...');  // wird niemals ausgeführt werden weil x = false
}

let a = 23
let b = 42

let resultOr = a || b; // => 23 
//wenn a = 0 dann =>42

let resultAnd = a && b; // => 42, zuletzt ausgegebener Wert wird angegeben


