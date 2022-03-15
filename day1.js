function userDetails(firstName, lastName) {

    return "First name: " + firstName + "\nLastname: " + lastName;
}


let add = (a, b) => a + b; // es6 feature

function add1(a, b) {
    return a + b;
}

let difference = (a, b) => a > b ? (a - b) : (b - a);

function difference1(a, b) {
    if (a > b) {
        return a - b;
    } else if (b >= a) {
        return b - a;
    }
}

let fName = "Cyril";
let lName = "Ngwerume";

// if (lName === fName) {
//     console.log("hmmmmmmm!");
// }
// console.log('uhmmmmmm');

lName !== fName ? console.log("hmmmmmmm!") : console.log('uhmmmmmm');

console.log(difference(5, 9));

console.log(add(3, 5));

console.log(userDetails("Cyril", "Ngwerume"));

// let factorial = (a) => {
//     if (a == 0) {
//         return 1;
//     }
//     return factorial(a - 1) * a; // O(n^2);
// }

let fact = (a) => {
    return a == 0 ? 1 : fact(a - 1) * a;
}

var a = 5;
var f[] = 0;

for (let i = 0; i < a.length; i++) {
    a[i] *= a[i - 1];
}

console.log(a)

console.log(fact(5));