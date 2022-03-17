const readline = require('readline');


const questions = {
  0:"What's your name? Nicknames are also acceptable :)",
  1:"What's an activity you like doing?",
  2:"What do you listen to while doing that?",
  3:"Which meal is your favourite (eg: dinner, brunch, etc.)",
  4:"What's your favourite thing to eat for that meal?",
  5:"Which sport is your absolute favourite?",
  6:"What is your superpower? In a few words, tell us what you are amazing at!",
}
const answr = {
  0:"",
  1:"",
  2:"",
  3:"",
  4:"",
  5:"",
  6:"",
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
  let i = 0;
  const survey = function () {
    if (i < 7) {
      rl.question(`${questions[i]} \n`,  (answer) => {
        answr[i] = answer;
        i++;
        survey();
      });
  }else{
  rl.close();
  console.log("This is your new profile:")
  console.log(`${answr[0]} likes ${answr[1]} and listens to ${answr[2]} while doing it.${answr[0]}'s favourite meal is ${answr[3]} and loves to eat ${answr[4]}!${answr[0]}'s favourite sport is ${answr[5]} and claims their superpower is ${answr[6]}!`);
  }

}
survey();