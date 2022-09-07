// Playing Page

const question = document.querySelector('#question');
const answerText = Array.from(document.querySelector('#answer-text'));
const nextButton = document.querySelector('#next-btn');
const questionNumberText = document.querySelector('#question-number');
const points = document.querySelector('#points')

console.log(questions);
let questionNumber;
let pointsCounter;
const MAX_QUESTIONS = 10;
const SCORE = 20;

function runGame() {
    questionNumber = 0;
    points = 0;
    availableQuestions = getRandomQuestions(questions, MAX_QUESTIONS)
}

const getRandomQuestions = (arr, n) => {
    let leng = arr.length;
    if (n > leng){
        throw new RangeError(
            "getRandomQuestions: more elements taken than available"
        );
    }

    const shuffled = arr.sort(() => 0.5 - Math.random());

    return (selected = shuffled.slice(0, n));
}

function restartGame() {

}

function shuffle() {

}

function IncrementPoints() {

}

function IncrementQuestions() {

}

function nextQuestion(e) {

}

function checkAnswer(e){

}

next_btn.onclick = () => {
    if(questionNumber < questions.length - 1) {
        questionNumber++;
    } else {
        showResult();
    }
}

const questions = [
    {
        id: '1',
        question: 'What was founded first?',
        answers: [
        { text: 'Oxford University', correct: true},
        { text: 'Aztec Empire', correct: false},
        { text: 'Cambridge University', correct: false},
        { text: 'Inca Empire', correct: false} ],

        id: '2',
        question: 'What was seen first?',
        answers: [
        { text: '1', correct: true},
        { text: '2', correct: false},
        { text: '3', correct: false},
        { text: '4', correct: false} ],

        id: '3',
        question: 'What was founded first?',
        answers: [
        { text: '5', correct: true},
        { text: '6', correct: false},
        { text:'7', correct: false},
        { text: '8', correct: false} ],

        id: '4',
        question: 'What was founded first?',
        answers: [
        {1: '9', correct: true},
        {2: '10', correct: false},
        {3: '11', correct: false},
        {4: '12', correct: false} ],

        id: '5',
        question: 'What was founded first?',
        answers: [
        {1: '13', correct: true},
        {2: '14', correct: false},
        {3: '15', correct: false},
        {4: '16', correct: false} ],

        id: '6',
        question: 'What was founded first?',
        answers: [
        {1: '17', correct: true},
        {2: '22', correct: false},
        {3: '86', correct: false},
        {4: '69', correct: false} ],

        id: '7',
        question: 'What was hatched first?',
        answers: [
        {1: '45', correct: true},
        {2: '74', correct: false},
        {3: '92', correct: false},
        {4: '36', correct: false} ],

        id: '8',
        question: 'What was created first?',
        answers: [
        {1: '564', correct: true},
        {2: '23', correct: false},
        {3: '479', correct: false},
        {4: '28', correct: false} ],

        id: '9',
        question: 'What was founded first?',
        answers: [
        {1: 'OU', correct: true},
        {2: 'AE', correct: false},
        {3: 'CU', correct: false},
        {4: 'IE', correct: false} ],

        id: '10',
        question: 'What was founded first?',
        answers: [
        {1: '98', correct: true},
        {2: '384', correct: false},
        {3: '395', correct: false},
        {4: '937', correct: false} ],
    }
]