const question = document.querySelector('#question');
const answers = Array.from(document.querySelectorAll('.answ-text'));
const pointsDigits = document.querySelector('#points');
const questionNumber = document.querySelector('#quest-num');
const nextButton = document.getElementById('next-btn');

let currentQuestion = {}
let acceptingAnswers = true
let points = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'What was founded first?',
        answ1: 'Oxford University',
        answ2: 'Aztec Empire',
        answ3: 'Cambridge University',
        answ4: 'Inca Empire',
        answer: 'Oxford University',
    },
    {
        question: 'What is the moon?',
        answ1: 'moon',
        answ2: 'pluto',
        answ3: 'mars',
        answ4: 'sun',
        answer: 'moon',
    },
    {
        question: 'What is are the clouds?',
        answ1: 'clouds8',
        answ2: 'pluto',
        answ3: 'mars',
        answ4: 'sun',
        answer: 'clouds8',
    },
    {
        question: 'What is the galaxy?',
        answ1: 'galaxy7',
        answ2: 'pluto7',
        answ3: 'mars7',
        answ4: 'sun7',
        answer: 'galaxy7',
    },
    {
        question: 'What is the sea?',
        answ1: 'sea6',
        answ2: 'pluto6',
        answ3: 'mars6',
        answ4: 'sun6',
        answer: 'test6',
    },
    {
        question: 'What is are the stars?',
        answ1: 'stars5',
        answ2: 'pluto5',
        answ3: 'mars5',
        answ4: 'sun5',
        answer: 'stars5',
    },
    {
        question: 'What is the earth?',
        answ1: 'earth4',
        answ2: 'pluto4',
        answ3: 'mars4',
        answ4: 'sun4',
        answer: 'earth4',
    },
    {
        question: 'What is pluto?',
        answ1: 'test3',
        answ2: 'pluto3',
        answ3: 'mars3',
        answ4: 'sun3',
        answer: 'pluto3',
    },
    {
        question: 'What is mars?',
        answ1: 'test',
        answ2: 'pluto',
        answ3: 'mars',
        answ4: 'sun',
        answer: 'mars',
    },
    {
        question: 'What is the sun?',
        answ1: 'test',
        answ2: 'pluto',
        answ3: 'mars',
        answ4: 'sun',
        answer: 'sun',
    }
]

const SCORE_POINTS = 20
const MAX_QUESTIONS = 10

runGame = () => {
    questionCounter = 0
    points = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem('mostRecentPoints', points)

    return window.location.assign('/end.html')
}

questionCounter++
questionNumber.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
questionNumber.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

const questionIndex = Math.floor(Math.random() * availableQuestions.length)
currentQuestion = availableQuestions[questionIndex]
question.innerText = currentQuestion.question

answers.forEach(answer => {
    const number = answer.dataset['number']
    answer.innerText = currentQuestion['answer' + number]
})

availableQuestions.splice(questionIndex, 1)

acceptingAnswers = true

}

answers.forEach(answer => {
    answer.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedAnswer = e.target
        const selectedOption = selectedAnswer.dataset['number']

        let classToApply = selectedOption == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementPoints(SCORE_POINTS)
        }

        selectedAnswer.parentElement.classList.add(classToApply)

        setTimeout (() => {
            selectedAnswer.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementPoints = num => {
    points +=num
    pointsText.innterText = points
}

runGame()


