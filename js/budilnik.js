function wakeUp(obj) {
  if (obj.days.includes(obj.day) && obj.isPersonWork) {
    console.log(`Wake up ${obj.name} at ${obj.time}!`);
  } else {
    console.log(`Sleep on baby! ${obj.drink(obj.herName)}`);
  }
}

const she = {
  name: "Azhar",
  time: 7,
  day: "Monday",
  days: ["Monday"],
  isPersonWork: true,
  drink: function () {
    return "Drink coffee!";
  },
};

const he = Object.create(she);
he.name = "Darkhan";
he.herName = "Azhar";
he.isPersonWork = false;
he.go = function () {
  return "go out!";
};
he.drink = function (herName) {
  return `Will kiss ${herName} first! I love tary coffee! Prepare it to me honey, please. After we will make a love!`;
};

wakeUp(he);
