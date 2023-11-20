listOfProfession = ["programmer", "accountant", "doctor", "teacher"];
listOfLocation = ["Taraz", "Almaty", "Astana"];
people = ["Aigul", "Anar", "Zhanna"];
numberOfChildren = [1, 2, 3, 4, 5, 6];

function tellFortune(x, y, z, n) {
  console.log(
    `You will be a ${x} in ${y}, and married to ${z} with ${n} kids.`
  );
}

let x = randomChoice(listOfProfession);
let y = randomChoice(listOfLocation);
let z = randomChoice(people);
let n = randomChoice(numberOfChildren);

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

tellFortune(x, y, z, n);

function calculateDogAge(dogAgeInHumanYears, humanAgeInDogYears) {
  console.log(`dog is ${dogAgeInHumanYears * 7} years old in Dog years.`);
  console.log(
    `human is ${Math.round(humanAgeInDogYears / 7)} years old in Himan years`
  );
}

calculateDogAge(2, 100);
