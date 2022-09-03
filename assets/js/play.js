const startButton = document.getElementById('start-btn')
const previousButton = document.getElementById('prev-btn')
const nextButton = document.getElementById('next-btn')
const submitButton = document.getElementById('submit-btn')
const quizContainerElement = document.getElementById('quiz-container')

let shuffledQuestions, current QuestionIndex

startButton.addEventListener('click', startGame)
previousButton.addEventListener('click', () => {
    currentQuestionIndex+-
    setPreviousQuestion()
})
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
const questions = [
    {

    }
]