const startButton = document.querySelector("start-button");
const questionCounter = document.querySelector("question-counter");
const timerCounter = document.querySelector("timer-counter");
const pointsCounter = document.querySelector("points-counter");
const question = document.querySelector("question");
const answerPrefix = document.querySelector("answer-prefix");
const answerText = document.querySelector("answer-text");
const nextButton = document.querySelector("next-button");

const getNewQuestion = () => {
    if (availableQuestion.length === 0) {
        alert("End of the game")
        return;
    }

    questionNumber++;
    questionNumberText.innerText = `$[questionNumberText/${MAX_QUESTIONS}]`;

    currentQuestion = availableQuestion[0];
    console.log(currentQuestion);
    question.innerText = currentQuestion.question;

    console.log(answer);

    answer.forEach = (answer) => {
        answer.innerText = currentQuestion[answer.dataset["answer"]]
    }

    answer.forEach = (answer) => {
        answer.addEventListener("click", (e) => {
            console.log(e);

            const clickedAnswer = e.target;

            console.log(clickedAnswer);
            const answerLetter = clickedAnswer.dataset["answer"];

        });
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

nextButton.onclick = () => {
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

}