let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guessInput = document.getElementById('guess');
  const message = document.getElementById('message');
  const attemptsDisplay = document.getElementById('attempts');

  const guess = Number(guessInput.value);
  attempts++;

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = 'Digite um número válido entre 1 e 100!';
    return;
  }

  if (guess === randomNumber) {
    message.textContent = `🎉 Parabéns! Você acertou em ${attempts} tentativas!`;
    message.style.color = 'green';
  } else if (guess > randomNumber) {
    message.textContent = '📉 Muito alto! Tente novamente.';
    message.style.color = 'red';
  } else {
    message.textContent = '📈 Muito baixo! Tente novamente.';
    message.style.color = 'red';
  }

  attemptsDisplay.textContent = attempts;
  guessInput.value = '';
  guessInput.focus();
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById('message').textContent = '';
  document.getElementById('attempts').textContent = '0';
  document.getElementById('guess').value = '';
  document.getElementById('guess').focus();
}
