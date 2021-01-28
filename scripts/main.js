var characters = [], paragraph1, paragraph2, paragraph3, text, word, len, mistakes = 0, guessedL = 0;

function guessWord() {
    word = document.getElementById('word').value;
    paragraph1 = document.getElementById('guessLetters');
    len = word.length;
    paragraph2 = document.getElementById('fillLetters');
    for (var i = 0; i < len * 2; ++i) {
        (i % 2 === 0) ? (characters[i] = '_') : (characters[i] = ' ');
        text = document.createTextNode(characters[i]);
        paragraph2.appendChild(text);
    }
}

function verifyLetter() {
    paragraph3 = document.getElementById('paragraph3');
    var L = document.getElementById('letter').value;
    if (word.indexOf(L) === -1) {
        ++mistakes;
        document.getElementById('hImg').src ='images/hangman'+mistakes+'.png';
        text = document.createTextNode(L + ', ');
        paragraph3.appendChild(text);
    } else {
        paragraph2.innerHTML = '';
        var pos = 0;
        while (word.indexOf(L, pos) !== -1) {
            var index = word.indexOf(L, pos);
            characters[2 * index] = L;
            ++guessedL;
            pos = index + 1;
        }
        for (var i = 0; i < len * 2; ++i) {
            text = document.createTextNode(characters[i]);
            paragraph2.appendChild(text);
        }
    }
    if (mistakes === 7) {
        alert('the game is over! player 1 won');
        chooseAnother();
    }
    if (guessedL === len) {
        alert('the game is over! player 2 won');
        chooseAnother();
    }
}

function chooseAnother() {
    document.getElementById('hImg').src ='images/hangman0.png';
    word = '';
    paragraph2.innerHTML = '';
    paragraph3.innerHTML = '';
    characters = [];
    mistakes = 0;
    guessedL = 0;
}

