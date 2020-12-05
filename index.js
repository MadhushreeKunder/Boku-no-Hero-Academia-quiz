var readlineSync = require('readline-sync');
const chalk = require('chalk'); //for interesting colors!

//welcome user
var userName = readlineSync.question(chalk.bgCyan("Enter your name! "));
console.log(chalk.yellowBright("Welcome "+userName+"! Get ready to take this awesome quiz on Bokuno Hero Academia! =)"));

//starting the game
console.log("                     ");
var start =  readlineSync.question("Press any key to start! ");
console.log("                     ");
var score = 0;

// function for quiz questions & verification of answer
function quizz(question, answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer){
    score = score+ 2;
    console.log(chalk.green("You got that right! ;)"));
    console.log(".................................");

  }else{
    score--;
    console.log(chalk.red("Wrong Answer.. :("));
    console.log(".................................");

  }
};

//quiz questions
var questions=[{
  question: "Which Pro Hero is the homeroom teacher of U.A.'s Class 1-A? ",
  answer: "shoto aizawa"
},{
  question: "What is Kacchan's(Katsuki Bakugo) quirk? ",
  answer: "explosion"
},{
  question: "Which Pro Hero has the quirk Fierce Wings? ",
  answer: "hawks"
},{
  question: "Which villian from the 'League of Villians' is rumoured to be blood-related to one of the U.A. students? ",
   answer: "dabi"
},{
  question: "What is Eijiro Kirishima's hero name? ",
  answer: "red riot"
},{
  question: "From whom did All Might receive the 'One For All' quirk? ",
  answer: "nana shimura"
},{
  question: "Which Pro Hero is known to have outstanding hearing capabilities and simultaneously attacks, dodges, and concludes information about the enemies? ",
  answer: "mirko"
},{
  question: "With Mirio Togata, in U.A. School Festival, who smiled for the first time? ",
  answer: "eri",
},{
  question: "Who appears to be a possible combination of several different animals, including a dog, a mouse, and a bear, which would make him a chimera? ",
  answer: "nezu"
},{
  question: "Which U.A. student has the same birthday as Mirio? ",
  answer: "izuku midoriya"
}];

//keeping track of questions
for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  quizz(chalk.cyanBright(currentQuestion.question), currentQuestion.answer);
};

//printing highscore
if (score>5){
  console.log(chalk.bgYellow(" Yaaayy! Your score is "+score));
}else{
  console.log(chalk.bgRedBright("Hmmmm, your score is "+score+". You should rewatch Boku no Hero Academia"));
}
