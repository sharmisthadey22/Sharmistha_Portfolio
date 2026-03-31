import fs from 'fs';
import readline from 'readline';
import chalk from 'chalk';

//load questions
const questions = JSON.parse(fs.readFileSync('questions.json', 'utf-8'));

//CLI setup
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Quiz logic
let score = 0;
let index = 0;

console.log(chalk.yellow("Welcome to the Quiz App!"));

function askQuestion() {
    if (index < questions.length) {
        const q = questions[index];
        console.log(chalk.blue(`\nQ${index + 1}: ${q.question}`));
        q.options.forEach((option, i) => {
            console.log(chalk.green(`${i + 1}. ${option}`));
        });
    rl.question(chalk.cyan('Your answer (number): '), (answer) => {
        const userAnswer = parseInt(answer);
        if (userAnswer === q.answer) {
            console.log(chalk.green('Correct!'));
            score++;
        } else {
            console.log(chalk.red(`Wrong! The correct answer was: ${q.answer}`));
        }
        index++;
        askQuestion();
    });
    } else {
        console.log(chalk.yellow.bold(`\nQuiz Over! Your final score: ${score}/${questions.length}`));
        rl.close();
    }
}

askQuestion();