const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

const statustitle = document.getElementById('status');
const attempt = document.getElementById('attempt');
const inputvalue = document.getElementById('kick');
const result = document.getElementById('result');
const btnrestart = document.getElementById('btnRestart');

const GuessNumber = {
    max: 10,
    attemptsNumber: 0,
    numberDraw: function() {
        return Math.round(Math.random() * this.max);
    },
    showButtonRestart: function() {
        btnrestart.style.display = 'flex';
    },
    clearInput: function() {
        inputvalue.value = '';
    },
    updateAttempt: function(attempt, value) {
        attempt.innerHTML = 'Tentativa: ' + value;
    },
    correctAnswear: function() {
        this.showButtonRestart();

        statustitle.innerHTML = 'Parabéns, você acertou!🙄'
        statustitle.classList.remove('incorrect-answear');
        statustitle.classList.add('status-correct');

        result.classList.remove('result-box-default');
        result.classList.add('result-correct-answear');

        this.clearInput();
    },

    incorrectAnswear: function(message) {
        statustitle.innerHTML = message;
        statustitle.classList.add('incorrect-answear');

        this.clearInput();
    }
};

const numberDraw = GuessNumber.numberDraw();

function handleSubmit(e) {
    e.preventDefault();
    const kick = inputvalue.value;

    if(!kick) {
        alert('Digite algum valor!');
        return;
    }

    GuessNumber.updateAttempt(attempt, ++GuessNumber.attemptsNumber);

    if(numberDraw == kick) {
        GuessNumber.correctAnswear();
    } else if (numberDraw > kick) {
        GuessNumber.incorrectAnswear('O número é maior!');
    } else if (numberDraw < kick) {
        GuessNumber.incorrectAnswear('O número é menor!');
    }
};

function restartgame() {
    document.location.reload(true);
}