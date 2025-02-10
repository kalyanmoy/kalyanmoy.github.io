const submitButton = document.getElementById('submit');
const answerInput = document.getElementById('answer');
const resultDiv = document.getElementById('result');

submitButton.addEventListener('click', () => {
	const userAnswer = parseInt(answerInput.value);
	const correctAnswer = (11 - 5) / 2;

	if (userAnswer === correctAnswer) {
		resultDiv.innerText = 'Correct!';
		resultDiv.style.color = 'green';
	} else {
		resultDiv.innerText = `Sorry, the correct answer is ${correctAnswer}.`;
		resultDiv.style.color = 'red';
	}
});
