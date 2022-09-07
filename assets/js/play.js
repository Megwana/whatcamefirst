const question = document.querySelector('.question-title');
const choices = document.querySelector('');
const points = document.querySelector('#points');
const questionNumber = document.querySelector('#quest-num');
const nextButton = document.getElementById('next-btn');
const quizContainerElement = document.getElementById('quiz-container');

let shuffledQuestions, currentQuestionIndex

let Questions = [
    {
        question: 'What is the sky?',
        choice1: 'test',
        choice2: 'pluto',
        choice3: 'mars',
        choice4: 'sun',
        answer: 'test',
    },
    {
        question: 'What is the moon?',
        choice1: 'moon10',
        choice2: 'pluto',
        choice3: 'mars',
        choice4: 'sun',
        answer: 'moon10',
    },
    {
        question: 'What is are the clouds?',
        choice1: 'clouds8',
        choice2: 'pluto',
        choice3: 'mars',
        choice4: 'sun',
        answer: 'clouds8',
    },
    {
        question: 'What is the galaxy?',
        choice1: 'galaxy7',
        choice2: 'pluto7',
        choice3: 'mars7',
        choice4: 'sun7',
        answer: 'galaxy7',
    },
    {
        question: 'What is the sea?',
        choice1: 'sea6',
        choice2: 'pluto6',
        choice3: 'mars6',
        choice4: 'sun6',
        answer: 'test6',
    },
    {
        question: 'What is are the stars?',
        choice1: 'stars5',
        choice2: 'pluto5',
        choice3: 'mars5',
        choice4: 'sun5',
        answer: 'stars5',
    },
    {
        question: 'What is the earth?',
        choice1: 'earth4',
        choice2: 'pluto4',
        choice3: 'mars4',
        choice4: 'sun4',
        answer: 'earth4',
    },
    {
        question: 'What is pluto?',
        choice1: 'test3',
        choice2: 'pluto3',
        choice3: 'mars3',
        choice4: 'sun3',
        answer: 'pluto3',
    },
    {
        question: 'What is mars?',
        choice1: 'test2',
        choice2: 'pluto2',
        choice3: 'mars2',
        choice4: 'sun2',
        answer: 'mars2',
    },
    {
        question: 'What is the sun?',
        choice1: 'test1',
        choice2: 'pluto1',
        choice3: 'mars1',
        choice4: 'sun1',
        answer: 'sun1',
    }
]

const SCORE_POINTS = 200
const MAX_QUESTIONS = 10

runGame = () => {
    questionCounter = 0
    points = 0
    availableQuestions = [...questions]
    getNewQuestions()
}

getNewQuestions = () => {
if(availableQuestions.length === 0 || questionsCounter > MAX_QUESRIONS) {
    localStorage.setItem('mostRecentScore', score)
    return window.location.assign('/end.htm')
}
}