const nextButton = document.getElementById('next-btn')
const quizContainerElement = document.getElementById('quiz-container')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
previousButton.addEventListener('click', () => {
    currentQuestionIndex+-
    setPreviousQuestion()
})
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
}