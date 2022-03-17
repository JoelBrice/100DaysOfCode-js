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

