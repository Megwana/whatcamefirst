//Required elements listed as const below
const startButton = document.querySelector('.start-button button');
const question = document.querySelector(".question");
const optionText = Array.from(document.querySelectorAll('.option-text'));
const questNum = document.querySelector(".quest-num");
const questCounter = document.querySelector(".quest-counter");
const pointsCounter = document.querySelector(".points-counter");
const quizContainer = document.querySelector('.quiz-container');
const nextButton = document.querySelector(".next-button");

//the action of clicking the Start Button startButton.onclick = ()=> {quizContainer.classList.add("activeQuiz")

startButton.onclick = ()=>{
    quizContainer.classList.add("activeInfo"); //show info box
    startButton.classList.add("hideme");
}

//the action of clicking the Next Buttonl

let currentQuestion = {}
let acceptingAnswers = true
let questionCounter = 0
let points = 0
let availableQuestions = []

let questions = [
    {
        question: 'What was founded first?',
        answer1: 'Oxford University',
        answer2: 'Aztec Empire',
        answer3: 'Cambridge University',
        answer4: 'Inca Empire',
        answer: 'Oxford University',
    },
    {
        question: 'What?',
        answer1: 'Oxford University',
        answer2: 'Aztec Empire',
        answer3: 'Cambridge University',
        answer4: 'Inca Empire',
        answer: 'Oxford University',
    },
    {
        question: 'founded?',
        answer1: 'Oxford University',
        answer2: 'Aztec Empire',
        answer3: 'Cambridge University',
        answer4: 'Inca Empire',
        answer: 'Oxford University',
    },
    {
        question: 'Was?',
        answer1: 'Oxford University',
        answer2: 'Aztec Empire',
        answer3: 'Cambridge University',
        answer4: 'Inca Empire',
        answer: 'Oxford University',
    },
    {
        question: 'first?',
        answer1: 'Oxford University',
        answer2: 'Aztec Empire',
        answer3: 'Cambridge University',
        answer4: 'Inca Empire',
        answer: 'Oxford University',
    },
    {
        question: 'What was 1?',
        answer1: 'Oxford University',
        answer2: 'Aztec Empire',
        answer3: 'Cambridge University',
        answer4: 'Inca Empire',
        answer: 'Oxford University',
    },
    {
        question: 'What was 2?',
        answer1: 'Oxford University',
        answer2: 'Aztec Empire',
        answer3: 'Cambridge University',
        answer4: 'Inca Empire',
        answer: 'Oxford University',
    },
    {
        question: 'founded first 1?',
        answer1: 'Oxford University',
        answer2: 'Aztec Empire',
        answer3: 'Cambridge University',
        answer4: 'Inca Empire',
        answer: 'Oxford University',
    },
    {
        question: 'founded first 2?',
        answer1: 'Oxford University',
        answer2: 'Aztec Empire',
        answer3: 'Cambridge University',
        answer4: 'Inca Empire',
        answer: 'Oxford University',
    },
    {
        question: 'how are you?',
        answer1: 'Oxford University',
        answer2: 'Aztec Empire',
        answer3: 'Cambridge University',
        answer4: 'Inca Empire',
        answer: 'Oxford University',
    },
]

const SCORE_POINTS = 200
const MAX_QUESTIONS = 10

runGame = ()=> {
    questionCounter = 0
    points = 0
    availableQuestions = [questions]
    setNewQuestion()
}

setNewQuestion = ()=> {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentPoints', points)
        //return window.location.assign('/end.html')
    }

    questionCounter++
    questNum.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    questCounter.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionIndex = Math.floor(Math.random()* availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question

    answers.forEach(answer => {
        const number = answer.dataset['number']
        answer.innerText = currentQuestion['answer' + number]
    })

    availableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true
}

setNewQuestion();

answers.forEach(answer => {
    answer.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedAnswer = e.target
        const selectedOption = selectedAnswer.dataset['number']

        let classToApply = selectedOption == currentQuestion.answer ? '.correct' : '.incorrect'

        if(classToApply === 'correct') {
            incrementPoints(SCORE_POINTS)
        }

        selectedOption.parentElement.classList.add(classToApply)
        
        setTimeout(() => {
            selectedAnswer.parentElement.classList.remove(classToApply)
            setNewQuestion()
        }, 1000)

    })
})

incrementPoints = num => {
    points +=num
    points.innerText = points
}
