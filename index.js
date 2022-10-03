//Day 4 practice from eloquent javascript textbook

let result = 1;
let counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}
console.log(result);


// FizzBuzz

let fizzbuzz = (n) => {
    if (n % 3 == 0) {
        return "Fizz";
    }
    if (n % 5 == 0 && !(n % 3 == 0)) {
        return "Buzz";
    }
}


console.log(fizzbuzz(25));

// Day 5

const hummus = (factor) => {
    const ingredient = (amount, unit, name) => {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

hummus(2);

// Day7 100 days of challenge


// filtering array

function filter(array, test) {
    passed = [];
    for (element in array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}


// Day 10

// Object mutability
console.log("\n\nCurrent score");
let score = { joel: 1, Brice: 120, Brico: 200 };
console.table(score);

score.Brice = 20;
score.joel = 45;
score.Brico = 78;

console.log("New score");

let upDateScore = score;

console.table(score);

// The lycanthrope's log

let journal = []

function addEntry(event, squirrel) {
    journal.push({ event, squirrel });
}

let entries = addEntry(["work", "touched tree", "pizza", "running",
    "television"], false);

console.log(entries);

// day 12
const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
];

function routeRobot(state, memory) {
    if (memory.length == 0) {
        memory = mailRoute;
    }
    return ({
        direction: memory[0], memory: memory.slice(1)
    });
}

routeRobot();


function findRoute(graph, from, to) {
    let work = [{ at: from, route: [] }];

    for (let i = 0; i < work.length; i++) {
        let { at, route } = work[i];
        for (let place of graph[at]) {
            if (place == to) return route.concat(place);
            if (!work.some(w => w.at == place)) {
                work.push({ at: place, route: route.contact(place) })
            }
        }
    }
}


function goalorientedRobot({ place, parcels }, route) {
    if (route.length == 0) {
        let parcel = parcels[0];
        if (parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
        }
        else {
            route = findRoute(roadGraph, place, parcel.address);
        }
        return { direction: route[0], memory: route.slice(1) };
    }
}