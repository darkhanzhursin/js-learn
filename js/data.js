const persons = [
  {
    id: 325326,
    firstname: "Dan",
    lastname: "Tiger",
    image: "url",
    birthday: "03.18.1990",
    gender: "Male",
    hobbie: ["Football", "Reading"],
    nationality: "switzerland",
    friends: [325330, 325334],
    residence: 10041,
  },
  {
    id: 325326,
    firstname: "Fan",
    lastname: "Tiger",
    image: "url",
    birthday: "03.18.2005",
    gender: "Male",
    hobbie: ["Football", "Reading"],
    nationality: "switzerland",
    friends: [325330, 325334],
    residence: 10041,
  },
  {
    id: 325330,
    firstname: "Frank",
    lastname: "Lion",
    image: "url",
    birthday: "10.05.1991",
    gender: "male",
    hobbie: ["walking", "basketball"],
    nationality: "syria",
    friends: ["", "", ""],
    residence: 10041,
  },
  {
    id: 325334,
    firstname: "Bilal",
    lastname: "Zakki",
    image: "url",
    birthday: "08.19.1999",
    gender: "male",
    hobbie: ["swimming", "walking"],
    nationality: "canda",
    friends: [325330, 325326],
    residence: 10012,
  },
  {
    id: 325335,
    firstname: "Test",
    lastname: "Test",
    image: "url",
    birthday: "08.19.1999",
    gender: "male",
    hobbie: ["swimming", "walking"],
    nationality: "canda",
    friends: [325330, 325326],
    residence: 100963,
  },
];

const persons2 = [
  {
    id: 325326,
    firstname: "Dan",
    lastname: "Tiger",
    image: "url",
    birthday: "03.18.1990",
    gender: "Male",
    hobbie: ["Football", "Reading"],
    nationality: "switzerland",
    friends: [325330, 325334],
    residence: 10041,
  },
  {
    id: 325326,
    firstname: "Fan",
    lastname: "Tiger",
    image: "url",
    birthday: "03.18.2005",
    gender: "Male",
    hobbie: ["Football", "Reading"],
    nationality: "switzerland",
    friends: [325330, 325334],
    residence: 10041,
  },
  {
    id: 325330,
    firstname: "Frank",
    lastname: "Lion",
    image: "url",
    birthday: "10.05.1991",
    gender: "male",
    hobbie: ["walking", "basketball"],
    nationality: "syria",
    friends: ["", "", ""],
    residence: 10041,
  },
  {
    id: 325334,
    firstname: "Bilal",
    lastname: "Zakki",
    image: "url",
    birthday: "08.19.1999",
    gender: "male",
    hobbie: ["swimming", "walking"],
    nationality: "canda",
    friends: [325330, 325326],
    residence: 10012,
  },
  {
    id: 325335,
    firstname: "Test",
    lastname: "Test",
    image: "url",
    birthday: "08.19.1999",
    gender: "male",
    hobbie: ["swimming", "walking"],
    nationality: "canda",
    friends: [325330, 325326],
    residence: 100963,
  },
];

const countries = [
  {
    city: "Zurich",
    Land: "Switzerland",
    residence: 10041,
  },
  {
    city: "Damascus",
    Land: "Syria",
    residence: 100963,
  },
  {
    city: "Toronto",
    Land: "Canada",
    residence: 10012,
  },
];

function findByName(lastName, firstName, arr) {
  console.log(arr.length);
  for (let i = 0; i < arr.length; i++) {
    console.log("Cicle");
    if (lastName == arr[i].lastname && firstName == arr[i].firstname) {
      console.log("here");
      return arr[i];
    }
  }
  //return undefined;
}

console.log(findByName("Zakki", "Bilal", persons2));

// function getFullname(person) {
//   let first = person.firstname;
//   let last = person.lastname;
//   let name = first + " " + last;
//   return name;
// }

// function getAllFullnames(persons) {
//   const personNames = [];

//   persons.forEach((person) => {
//     const name = getFullname(person);
//     personNames.push(name);
//     console.log(name);
//   });

//   return personNames;
// }

// function fullnameWithReduce1(persons) {
//   return persons.reduce(
//     (acc, person) => {
//       let fullname = getFullname(person);
//       acc.push(fullname);
//       return acc;
//     },
//     ["Darkhan"]
//   );
// }

// function fullnameWithReduce02() {
//   let fullname = (objArr, property) => {
//     return objArr.reduce((names, objects) => {
//       let keys = objects[property];
//       names[keys] = [];
//       return names;
//     }, {});
//   };
//   let objectGroups = fullname(persons, "firstname");
//   return objectGroups;
// }

// //console.log(getAllFullnames(persons));
// console.log(fullnameWithReduce1(persons));
// //console.log(fullnameWithReduce02());

// // function findPerson(lastName, firstName) {
// //   for (let i = 0; i < persons.length - 1; i++) {
// //     if (lastName == persons[i].lastname && firstName == persons[i].firstname) {
// //       return persons[i];
// //     } else {
// //       console.log(undefined);
// //     }
// //   }
// // }
// // console.log(findPerson("Dan", "Tiger"));

// // function findPerson2(lastname, firstname, array) {
// //   const found = array.find(
// //     (person) => lastname === person.lastname && firstname === person.firstname
// //   );
// //   return found;
// // }

// // console.log(findPerson2("Tiger", "Dan", persons));

// function findPerson3(lastname, firstname, array) {
//   const found = array.filter(
//     (person) => lastname === person.lastname && firstname === person.firstname
//   );
//   return found;
// }

// console.log(findPerson3("Tiger", "Dan", persons));

function countriesWithPersons() {
  const countriesCopy = JSON.parse(JSON.stringify(countries));

  return countriesCopy.map((country) => {
    country.persons = persons.filter((person) => {
      return person.residence === country.residence;
    });

    return country;
  });
}

//console.log(countriesWithPersons());

function personsGroup() {
  // for (let country in countries) {
  //   countries[country].persons = [];
  // }
  countries.forEach((country) => {
    country.persons = [];
  });

  for (let person in persons) {
    for (let country in countries) {
      if (persons[person].residence === countries[country].residence) {
        countries[country].persons.push(persons[person]);
      }
    }
  }

  // 1. Alle Countries durchgehen
  // 2. Pro Country alle Personen finden
  // 3. Gefunden Personen in Country speichern

  return countries;
}

console.log(personsGroup());
