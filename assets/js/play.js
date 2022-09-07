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

const questions = [
    {
        question: 'What was founded first?',
        answers: [
        {1: 'Oxford University', correct: true},
        {2: 'Aztec Empire', correct: false},
        {3: 'Cambridge University', correct: false},
        {4: 'Inca Empire', correct: false} ],

        question: 'What was founded first?',
        answers: [
        {1: 'Oxford University', correct: true},
        {2: 'Aztec Empire', correct: false},
        {3: 'Cambridge University', correct: false},
        {4: 'Inca Empire', correct: false} ],

        question: 'What was founded first?',
        answers: [
        {1: 'Oxford University', correct: true},
        {2: 'Aztec Empire', correct: false},
        {3: 'Cambridge University', correct: false},
        {4: 'Inca Empire', correct: false} ],

        question: 'What was founded first?',
        answers: [
        {1: 'Oxford University', correct: true},
        {2: 'Aztec Empire', correct: false},
        {3: 'Cambridge University', correct: false},
        {4: 'Inca Empire', correct: false} ],

        question: 'What was founded first?',
        answers: [
        {1: 'Oxford University', correct: true},
        {2: 'Aztec Empire', correct: false},
        {3: 'Cambridge University', correct: false},
        {4: 'Inca Empire', correct: false} ],

        question: 'What was founded first?',
        answers: [
        {1: 'Oxford University', correct: true},
        {2: 'Aztec Empire', correct: false},
        {3: 'Cambridge University', correct: false},
        {4: 'Inca Empire', correct: false} ],

        question: 'What was founded first?',
        answers: [
        {1: 'Oxford University', correct: true},
        {2: 'Aztec Empire', correct: false},
        {3: 'Cambridge University', correct: false},
        {4: 'Inca Empire', correct: false} ],

        question: 'What was founded first?',
        answers: [
        {1: 'Oxford University', correct: true},
        {2: 'Aztec Empire', correct: false},
        {3: 'Cambridge University', correct: false},
        {4: 'Inca Empire', correct: false} ],

        question: 'What was founded first?',
        answers: [
        {1: 'Oxford University', correct: true},
        {2: 'Aztec Empire', correct: false},
        {3: 'Cambridge University', correct: false},
        {4: 'Inca Empire', correct: false} ],

        question: 'What was founded first?',
        answers: [
        {1: 'Oxford University', correct: true},
        {2: 'Aztec Empire', correct: false},
        {3: 'Cambridge University', correct: false},
        {4: 'Inca Empire', correct: false} ],
    }
]

const SCORE_POINTS = 20
const MAX_QUESTIONS = 10

runGame = () => {
    questionCounter = 0
    points = 0
    availableQuestions = [...questions]
    NewQuestion()
}

NewQuestion = () => {
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
            NewQuestion()
        }, 1000)
    })
})

runGame()


