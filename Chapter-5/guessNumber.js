// Generate random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

let input = prompt("Please guess the number");
input = Number.parseInt(input);

let score = 100;

while (input != randomNumber) {
  if (input < randomNumber) {
    console.log("Your guess is less than the original number");
    input = prompt("Please guess the number");
    input = Number.parseInt(input);
  } else if (input > randomNumber) {
    console.log("Your guess is greater than the original number");
    input = prompt("Please guess the number");
    input = Number.parseInt(input);
  }

  score -= 1;
}

console.log(`Your guess is correct and your score is ${score}`);
