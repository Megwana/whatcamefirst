const pointsDigits = document.querySelector('#points');
const questionNumber = document.querySelector('#quest-num');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const nextButton = document.getElementById('next-btn');
const answerElement = document.getElementById('answ-text');

let shuffledQuestions, currentQuestionIndex

function runGame () {
    questionCounter = 0
    points = 0
    availableQuestions = [...questions]
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    addNewQuestion()
}

function addNewQuestion () {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionsElement.innerText = question.question
    question.answers.forEach(answer => {
        answer.innerText = answer.text
        answer.classList.add('answ-text')
        if (answer.correct) {
            answer.dataset.correct = answer.correct
        }
        answer.addEventListener('click', selectAnswer)
        answerElement.appendChild(answer)
    })
}

function resetState()
function selectAnswer()

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('incorrect')
    }
    }
    
function clearStatusClass (element) {
    element.classList.remove('correct')
    element.classList.remove('incorrect')
}
/*
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

*/

let questions = [
    {
        question: 'What was founded first?',
        answers: [
        { text: 'Oxford University', correct: true},
        { text: 'Aztec Empire', correct: false},
        { text: 'Cambridge University', correct: false},
        { text: 'Inca Empire', correct: false} ],

        question: 'What was seen first?',
        answers: [
        { text: '1', correct: true},
        { text: '2', correct: false},
        { text: '3', correct: false},
        { text: '4', correct: false} ],

        question: 'What was founded first?',
        answers: [
        { text: '5', correct: true},
        { text: '6', correct: false},
        { text:'7', correct: false},
        { text: '8', correct: false} ],

        question: 'What was founded first?',
        answers: [
        {1: '9', correct: true},
        {2: '10', correct: false},
        {3: '11', correct: false},
        {4: '12', correct: false} ],

        question: 'What was founded first?',
        answers: [
        {1: '13', correct: true},
        {2: '14', correct: false},
        {3: '15', correct: false},
        {4: '16', correct: false} ],

        question: 'What was founded first?',
        answers: [
        {1: '17', correct: true},
        {2: '22', correct: false},
        {3: '86', correct: false},
        {4: '69', correct: false} ],

        question: 'What was hatched first?',
        answers: [
        {1: '45', correct: true},
        {2: '74', correct: false},
        {3: '92', correct: false},
        {4: '36', correct: false} ],

        question: 'What was created first?',
        answers: [
        {1: '564', correct: true},
        {2: '23', correct: false},
        {3: '479', correct: false},
        {4: '28', correct: false} ],

        question: 'What was founded first?',
        answers: [
        {1: 'OU', correct: true},
        {2: 'AE', correct: false},
        {3: 'CU', correct: false},
        {4: 'IE', correct: false} ],

        question: 'What was founded first?',
        answers: [
        {1: '98', correct: true},
        {2: '384', correct: false},
        {3: '395', correct: false},
        {4: '937', correct: false} ],
    }
]

