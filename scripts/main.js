var characters = [], paragraph1, paragraph2, paragraph3, text, word, len, mistakes=0, guessedL=0, id, bold;

function guessWord() {
    word = document.getElementById('word').value;
    paragraph1 = document.getElementById('guessLetters');
    bold = document.createElement('strong');
    text=document.createTextNode('Guess the word:');
    bold.appendChild(text);
    paragraph1.appendChild(bold);
    len=word.length;
    paragraph2 = document.getElementById('fillLetters');
    for (var i = 0; i < len * 2; ++i) {
        var position = (i % 2 === 0) ? (characters[i] = '_') : (characters[i] = ' ');
        text=document.createTextNode(characters[i]);
        paragraph2.appendChild(text);
    }
    addElements();
}

function addElements() {
    var label1 = document.createElement('label');
    label1.innerHTML = 'Player 2:';
    label1.setAttribute('id', 'label1');
    document.body.appendChild(label1);

    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'letter');
    document.body.appendChild(input);

    var btn = document.createElement('button');
    btn.setAttribute('onclick', 'verifyLetter()');
    btn.innerHTML='Verify letter';
    btn.setAttribute('id', 'btn');
    document.body.appendChild(btn);

    var par = document.createElement('p');
    par.setAttribute('id', 'par');
    document.body.appendChild(par);

    var img = document.createElement('img');
    img.setAttribute('id', 'hImg');
    img.src = 'images/hangman0.png';
    document.body.appendChild(img);

    paragraph3 = document.createElement('p');
    paragraph3.setAttribute('id', 'paragraph3');
    bold = document.createElement('strong');
    text= document.createTextNode('Did not work:  ');
    bold.appendChild(text);
    paragraph3.appendChild(bold);
    linebreak = document.createElement("br");
    paragraph3.appendChild(linebreak);
    document.body.appendChild(paragraph3);
}


function verifyLetter() {
    var error = 0;
    paragraph2.innerHTML = '';
    var L = document.getElementById('letter').value;
    for (var i = 0; i < len; ++i) {
        if (word[i] === L) {
            characters[2 * i] = L;
            ++guessedL;
        }
        else {
            ++error;
        }
        text = document.createTextNode(characters[2 * i]+characters[2 * i + 1]);
        paragraph2.appendChild(text);
    }
    if (error === len) {
        ++mistakes;
        document.getElementById('hImg').src ='images/hangman'+mistakes+'.png';
        text=document.createTextNode(L+ ', ');
        paragraph3.appendChild(text);
    }
    if (mistakes === 7) {
        alert('the game is over! player 1 won');
        chooseAnother();
    }
    if (guessedL===len) {
        alert('the game is over! player 2 won');
        chooseAnother();
    }
}

function chooseAnother() {
    word = '';
    finish = 0;
    paragraph1.innerHTML = '';
    paragraph2.innerHTML = '';
    paragraph3.innerHTML = '';
    document.getElementById('hImg').remove();
    document.getElementById('label1').remove();
    document.getElementById('par').remove();
    document.getElementById('btn').remove();
    document.getElementById('letter').remove();
    characters = [];
    mistakes = 0;
    guessedL = 0;
}
