const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const startSurvey = () => survey1();

const survey1 = () => {
  rl.question('1. What do you think of Node.js? ', (answer1) => {
    console.log(`Thank you for your valuable feedback: ${answer1}`),
      rl.question('2. What is up? ', (answer2) => {
        console.log(`Agreed! ${answer2}`),
        rl.question('3. Why is up? ', (answer3) => {
          console.log(`Certainly ${answer3}..`),
          survey2();
      })
    })
  });
};

const survey2 = () => {
  rl.question('4. This is question 4? ', (answer4) => {
    console.log(`4: ${answer4}`),
    rl.question('5. One more for good measure? ', (answer5) => {
      console.log(`You did it! ${answer5}`),
      rl.close();
    });
  });
};

startSurvey();