const chalk = require('chalk');
var readlineSync = require('readline-sync');

var score = 0;
console.log(chalk.bgCyan(" Welcome to CLI DragonBall-Z Trivia"));
var userName = readlineSync.question(chalk.bold("Please Enter your Name? "));
console.log(chalk.magenta("Hi " + userName + "," + " Let's play the DBZ Trivia" + "!"));
console.log(chalk.yellow("Rules:- \n"));
console.log(chalk.yellow("In this quiz, for each correct answer  you will be awarded 1 point .\n"));
console.log(chalk.yellow("Answer should be entered from the options given.\n"));
console.log(chalk.yellow("If you scored High-Score,then your name will be displayed on the Leader-Board.\n"));
console.log(chalk.yellow("Let's see you are a true Dragon Ball fan or not.\n"));
console.log(chalk.yellow("Let's Start the Game! \n"));

var leaderBoard = [{ name: "Sai", score: 8 }, { name: "Deepak", score: 7 }, { name: "Yeswanth", score: 4 }];

q1 = {
  ques: "What was Goku's name before he came to Earth as a baby??" + "\n" +
    "Options:" + chalk.red("A. Gohan") + " " + chalk.green("B. Kakarot") + " " + chalk.yellow("C. Saiyan") + "  ",

  ans: "Kakarot"
}
q2 = {
  ques: "Raditz is Goku's ______?" + "\n" +
    "Options:" + chalk.red("A. master") + " " + chalk.green("B. father") + " " + chalk.yellow("C. brother") + "  ",
  ans: "brother"
}
q3 = {
  ques: "What planet do Kami and Piccolo come from?" + "\n" + "Options:" + chalk.red("A. Namek") + " " + chalk.green("B. Saiyan") + " " + chalk.yellow("C. Tuffle") + "  ",
  ans: "Namek"
}
q4 = {
  ques: "What do all the dragon balls have inside?" + "\n" + "Options:" + chalk.red("A. Crystals") + " " + chalk.green("B. Stars") + " " + chalk.yellow("C. Dragons") + "  ",
  ans: "Stars"
}
q5 = {
  ques: "Krillin trained under ______?" + "\n" + "Options:" + chalk.red("A. Piccolo") + " " + chalk.green("B. Tien") + " " + chalk.yellow("C. Master Roshi") + "  ",
  ans: "Master Roshi"

}
q6 = {
  ques: "This wise-cracking little pig-creature can shapeshift (well, for a few minutes):" + "\n" + "Options:" + chalk.red("A. Oolong") + " " + chalk.green("B. Ox King") + " " + chalk.yellow("C. King Yemma") + "  ",
  ans: "Oolong"
}
q7 = {
  ques: "Garlic Jr.'s power is greatest when he's closest to ________" + "\n" +
    "Options:" + chalk.red("A. Kami") + " " + chalk.green("B. Shenron") + " " + chalk.yellow("C. the Makyo Star") + "  ",
  ans: "the Makyo Star"
}
q8 = {
  ques: "Dr. Gero works for _______?" + "\n" + "Options:" + chalk.red("A. The Red Ribbon Army") + " " + chalk.green("B. The Spice Boys") + " " + chalk.yellow("C. Androids 19 and 20") + "  ",
  ans: "The Red Ribbon Army"


}
q9 = {
  ques: "When Goku's energy level goes way up, his eyes turn ______?" + "\n" +
    "Options:" + chalk.red("A. Red") + " " + chalk.green("B. Green") + " " + chalk.yellow("C. Gold") + "  ",

  ans: "Green"
}
q10 = {
  ques: " Like his father, Gohan had this when he was little:_____?" + "\n" +
    "Options:" + chalk.red("A. a cat") + " " + chalk.green("B.  flying disc") + " " + chalk.yellow("C. a tail") + "  ",

  ans: "a Tail"
}
var trivia = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
for (var i = 0; i < trivia.length; i++) {
  var question = trivia[i];
  var answer = readlineSync.question(chalk.blue(question.ques));
  if (answer == question.ans) {
    score++;
    console.log(chalk.green("Correct Answer"));
  } else {
    console.log(chalk.red("Wrong Answer"));
  }
}
console.log(chalk.magenta("Your Score is " + score));
if (score > leaderBoard[2].score) {
  var newScore = {
    name: userName,
    score: score
  }
  leaderBoard.push(newScore);
  leaderBoard.sort(function(a, b) {
    return b.score - a.score
  });
  console.log(chalk.cyan("Congratulations!! New High-Score "));
  console.log(chalk.cyan("LEADER-BOARD:"));
  console.log(chalk.bgYellow(leaderBoard[0].name + " " + leaderBoard[0].score));
  console.log(chalk.bgYellow(leaderBoard[1].name + " " + leaderBoard[1].score));
  console.log(chalk.bgYellow(leaderBoard[2].name + " " + leaderBoard[2].score));
} else {
  console.log(chalk.cyan("LEADER-BOARD:"));
  console.log(chalk.bgYellow(leaderBoard[0].name + " " + leaderBoard[0].score));
  console.log(chalk.bgYellow(leaderBoard[1].name + " " + leaderBoard[1].score));
  console.log(chalk.bgYellow(leaderBoard[2].name + " " + leaderBoard[2].score));


}


