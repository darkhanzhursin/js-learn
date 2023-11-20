var securityQuestions = [
  {
    question: "What was your first pet’s name?",
    expectedAnswer: "FlufferNutter",
  },
  {
    question: "What was the model year of your first car?",
    expectedAnswer: "1985",
  },
  {
    question: "What city were you born in?",
    expectedAnswer: "NYC",
  },
];

function createObj(jsonStr) {
  let myObj = JSON.parse(jsonStr);
  return myObj;
}

function chksecurityQuestions(securityQuestions, question, answer) {
  for (let i = 0; i < securityQuestions.length; i++) {
    const myObj = createObj(JSON.stringify(securityQuestions[i]));
    if (question === myObj.question && answer === myObj.expectedAnswer) {
      return true;
    } else {
      return false;
    }
  }
}
//Test case1:
var ques = "What was your first pet’s name?";
var ans = "FlufferNutter";
var status1 = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status1); // true
//Test case2:
var ques = "What was your first pet’s name?";
var ans = "DufferNutter";
var status2 = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status2); // flase

// let str =
//   '{"question":"What was the model year of your first car?","expectedAnswer":"1985"}';
// console.log(createObj(str));
