const question = document.querySelector('#question');
const answers = Array.from(document.querySelectorAll('.answ-text'));
const pointsDigit = document.querySelector('#points-digit');
const questionNumber = document.querySelector('#quest-num');
const nextButton = document.getElementById('next-btn');

let currentQuestion = {}
let acceptingAnswers = true
let points = 0
let questionCounter = 0
let availableQuestions = []

let Questions = [
    {
        question: 'What was founded first?',
        answ1: 'Oxford University',
        answ2: 'Aztec Empire',
        answ3: 'Cambridge University',
        answ4: 'Inca Empire',
        correct_answer: 'Oxford University',
    },
    {
        question: 'What is the moon?',
        answ1: 'moon10',
        answ2: 'pluto',
        answ3: 'mars',
        answ4: 'sun',
        correct_answer: 'moon10',
    },
    {
        question: 'What is are the clouds?',
        answ1: 'clouds8',
        answ2: 'pluto',
        answ3: 'mars',
        answ4: 'sun',
        correct_answer: 'clouds8',
    },
    {
        question: 'What is the galaxy?',
        answ1: 'galaxy7',
        answ2: 'pluto7',
        answ3: 'mars7',
        answ4: 'sun7',
        correct_answer: 'galaxy7',
    },
    {
        question: 'What is the sea?',
        answ1: 'sea6',
        answ2: 'pluto6',
        answ3: 'mars6',
        answ4: 'sun6',
        correct_answer: 'test6',
    },
    {
        question: 'What is are the stars?',
        answ1: 'stars5',
        answ2: 'pluto5',
        answ3: 'mars5',
        answ4: 'sun5',
        correct_answer: 'stars5',
    },
    {
        question: 'What is the earth?',
        answ1: 'earth4',
        answ2: 'pluto4',
        answ3: 'mars4',
        answ4: 'sun4',
        correct_answer: 'earth4',
    },
    {
        question: 'What is pluto?',
        answ1: 'test3',
        answ2: 'pluto3',
        answ3: 'mars3',
        answ4: 'sun3',
        correct_answer: 'pluto3',
    },
    {
        question: 'What is mars?',
        answ1: 'test',
        answ2: 'pluto',
        answ3: 'mars',
        answ4: 'sun',
        correct_answer: 'mars',
    },
    {
        question: 'What is the sun?',
        answ1: 'test',
        answ2: 'pluto',
        answ3: 'mars',
        answ4: 'sun',
        correct_answer: 'sun',
    }
]

const SCORE_POINTS = 200
const MAX_QUESTIONS = 10

runGame = () => {
    questionCounter = 0
    points = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS) {
    localStorage.setItem('mostRecentScore', points)

    return window.location.assign('/end.html')
}

questionCounter++
questionNumber.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
questionNumber.style.width = `${(questionCounter/MAX_QUESTIONS) + 10}`

const questionArray = Math.floor(Math.random() * availableQuestioins.length)
currentQuestion = availableQuestions[questionArray]
question.innerText = currentQuestion.question

answers.forEach(answer =>{
    const number = choice.dataset['number']
    answer.innterText = currentQuestion['answer' + number]
})

availableQuestions.splice(questionArray, 1)

acceptingAnswers = true

}


