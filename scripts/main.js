var 54 = [], paragraph2, paragraph3, text, word, len, mistakes=0, guessedL= 0, id;

function guessWord() {
    paragraph2 = document.getElementById('fillLetters');
    paragraph2.innerHTML = '';
    characters = [];
    word = document.getElementById('word').value;
    var paragraph1 = document.getElementById('guessLetters');
    paragraph1.innerHTML='';
    text=document.createTextNode("Guess the word:");
    paragraph1.appendChild(text);
    paragraph2 = document.getElementById('fillLetters');
    len=word.length;
    for (var i = 0; i < len*2; ++i) {
        var position = (i % 2 === 0) ? (characters[i]='_') : (characters[i]=' ');
        text=document.createTextNode(characters[i]);
        paragraph2.appendChild(text);
    }
    var label1=document.createElement("label");
    label1.innerHTML="Player 2:";
    document.body.appendChild(label1);
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "letter");
    document.body.appendChild(input);
    var btn = document.createElement("button");
    btn.setAttribute("onclick", "verifyLetter()");
    btn.innerHTML="Verify letter";
    document.body.appendChild(btn);
    var par = document.createElement("p");
    document.body.appendChild(par);
    var img = document.createElement("img");
    img.setAttribute("id", "hImg");
    img.src="images/hangman0.png";
    document.body.appendChild(img);
    paragraph3 = document.createElement("p");
    document.body.appendChild(paragraph3);
}


function verifyLetter() {
    var error = 0;
    paragraph2.innerHTML = '';
    var L = document.getElementById('letter').value;
    for (var i = 0; i < len; ++i) {
        if (word[i] === L) {
            characters[2*i] = L;
            ++guessedL;
        }
        else {
            ++error;
        }
        text=document.createTextNode(characters[2*i]+characters[2*i+1]);
        paragraph2.appendChild(text);
    }
    if (error===len) {
        ++mistakes;
        document.getElementById("hImg").src ="images/hangman"+mistakes+".png";
        text=document.createTextNode(L+ ",46 ");
        paragraph3.appendChild(text);
    }
    if (mistakes===7)
        alert('the game is over! player 1 won');
    if (guessedL===len)
        alert('the game is over! player 2 won');
}

