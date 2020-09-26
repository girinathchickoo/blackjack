function age() {
    var year = prompt("born year");
    ageinyears = (2020 - year) * 365;
    h = document.createElement("H1");
    text = document.createTextNode('you are' + ageinyears + ' days old');
    var a = document.getElementById("result");
    h.setAttribute("id", "c");
    h.appendChild(text);
    d = a.appendChild(h);
}

function reset() {
    var r = document.getElementById("result").remove();
    return r;
}

function fish() {
    var image = document.createElement("img");
    var ele = document.getElementById("gen");
    image.src = "https://cdn2.scratch.mit.edu/get_image/gallery/735132_170x100.png";
    ele.appendChild(image);
}
//challenge 3
function rpsgame(yourchoice) {
    var humanchoice = (yourchoice.id);
    var botchoice = computerchoice(randomnumber());
    r = result();
    image(humanchoice, botchoice, r);

    function randomnumber() {
        return (Math.floor(Math.random() * 3));
    }

    function computerchoice(number) {
        return ["rock", "paper", "scissor"][number];
    }

    function result() {
        if (botchoice === humanchoice) {
            return "its a tie!";
        } else if (botchoice === "rock" &&
            humanchoice === "paper") {
            return "you win!";
        } else if (botchoice === "paper" &&
            humanchoice === "rock") {
            return "you lost!";
        } else if (botchoice === "paper" &&
            humanchoice === "scissor") {
            return "you win!";
        } else if (botchoice === "scissor" &&
            humanchoice === "paper") {
            return "you lost!";
        } else if (botchoice === "rock" &&
            humanchoice === "scissor") {
            return "you lost!";
        } else if (botchoice === "scissor" &&
            humanchoice === "rock") {
            return "you win!";
        } else {
            return "error";
        }
    }

    function image(humanchoice, botchoice, result) {
        var imagesrc = {
            "rock": document.getElementById("rock").src,
            "paper": document.getElementById("paper").src,
            "scissor": document.getElementById("scissor").src,
        }
        document.getElementById("rock").remove();
        document.getElementById("paper").remove();
        document.getElementById("scissor").remove();
        humandiv = document.createElement("div1");
        messagediv = document.createElement("div2");
        botdiv = document.createElement("div3");
        humandiv.innerHTML = "<img src='" + imagesrc[humanchoice] + "'>";
        messagediv.innerHTML = "<h1 style='color:red;' > " + r + "<h1>";
        botdiv.innerHTML = "<img src='" + imagesrc[botchoice] + "'>"
        document.getElementById("r").appendChild(humandiv);
        document.getElementById("r").appendChild(messagediv);
        document.getElementById("r").appendChild(botdiv);
    }
}

//challenge4 random color
var buttons = document.getElementsByTagName("button");


backup = [];
for (let i = 0; i < buttons.length; i++) {
    var a = buttons[i].classList[1];
    backup.push(a);
}

function randomcolors(color) {

    if (color.value === "red") {
        buttonred();
    } else if (color.value == "green") {
        buttongreen();
    } else if (color.value == "blue") {
        buttonblue();
    } else if (color.value == "random") {
        buttonrandom();
    } else if (color.value == "reset") {
        buttonreset();
    }

    function buttonred() {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove(buttons[i].classList[1]);
            buttons[i].classList.add("btn-danger");
        }
    }

    function buttongreen() {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove(buttons[i].classList[1]);
            buttons[i].classList.add("btn-success");
        }

    }

    function buttonblue() {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove(buttons[i].classList[1]);
            console.log(buttons[i].classList);

            buttons[i].classList.add("btn-primary");
        }
    }

    function buttonreset() {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove(buttons[i].classList[1]);

            buttons[i].classList.add(buttons[i].classList[1] = backup[i]);
        }
    }

    function buttonrandom() {


        for (let i = 0; i < buttons.length; i++) {
            let randomnumber = Math.floor(Math.random() * 7);

            buttons[i].classList.remove(buttons[i].classList[1]);
            buttons[i].classList.add(buttons[i].classList[1] = backup[randomnumber]);
        }
    }
}


// challenge 5 blackjack

blackjack = {
    'you': { 'scorespan': 'yourturn', 'div': 'you', 'id': 'yourscore', 'score': 0 },
    'bot': { 'scorespan': 'botturn', 'div': 'bot', 'id': 'botscore', 'score': 0 },
    'card': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'k', 'j', 'a', 'q'],
    'randomcard': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'k': 10, 'q': 10, 'j': 10, 'a': [1, 11] },
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'yourturn': false,
}
YOU = blackjack['you'];
BOT = blackjack['bot'];

document.querySelector("#hitbutton").addEventListener("click", hit);
document.querySelector("#standbutton").addEventListener("click", stand);
document.querySelector("#dealbutton").addEventListener("click", deal);



function rnumber() {
    randomnumber = Math.floor(Math.random() * 13);
    r = blackjack['card'][randomnumber];
    return r;

}


function hit() {
    if (blackjack['isStand'] === false) {

        var num = rnumber();
        image = document.createElement("img");
        image.src = num + ".png ";
        sound = document.createElement("Audio");
        sound.src = "hit.mp3";
        blackjack['you']['score'] += ace(num);

        if (blackjack['you']['score'] <= 21) {

            document.getElementsByClassName(YOU['div'])[0].appendChild(image);
            document.getElementsByClassName(YOU['div'])[0].appendChild(sound);
            sound.play();
            document.getElementById("yourscore").innerHTML = blackjack['you']['score'];
        } else {

            document.getElementById("yourscore").innerHTML = "bust!";
            document.querySelector("#yourscore").style.color = 'yellow';
        }
        blackjack['yourturn'] = false;

    }
}

function ace(n) {
    let A;

    if (blackjack['you']['score'] <= 10 && n === 'a') {
        A = blackjack['randomcard'][n][1];
        return A;

    } else if (blackjack['you']['score'] > 10 && n === "a") {
        A = blackjack['randomcard'][n][0];
        return A;
    } else {
        A = blackjack['randomcard'][n];
        return A;
    }


}

function bace(n) {
    let A;

    if (blackjack['bot']['score'] <= 10 && n === 'a') {
        A = blackjack['randomcard'][n][1];
        return A;

    } else if (blackjack['bot']['score'] > 10 && n === "a") {
        A = blackjack['randomcard'][n][0];
        return A;
    } else {
        A = blackjack['randomcard'][n];
        return A;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function stand() {
    blackjack['isStand'] = true;
    while (blackjack['bot']['score'] < 16 && blackjack['isStand'] === true) {
        document.getElementById("wordspan").innerHTML = "let's play";
        num = rnumber();
        image = document.createElement("img");
        image.src = r + ".png ";
        image.setAttribute('id', 'botcard');
        console.log(image);
        sound = document.createElement("Audio");
        sound.src = "hit.mp3";
        sound.play();
        blackjack['bot']['score'] += bace(num);
        if (blackjack['bot']['score'] <= 21) {
            document.getElementsByClassName(BOT['div'])[0].appendChild(image);
            document.getElementsByClassName(BOT['div'])[0].appendChild(sound);
            sound.play();
            document.getElementById("botscore").innerHTML = blackjack['bot']['score'];
        } else {
            document.getElementById("botscore").innerHTML = "bust!";
            document.querySelector("#botscore").style.color = 'yellow';
        }
        await sleep(1000);

    }

    blackjack['yourturn'] = true;
    let winner = bjresult();
    document.getElementById("wordspan").innerHTML = winner;
}

function deal() {
    if (blackjack['yourturn'] === true) {
        blackjack['isStand'] = false;

        document.getElementById("wordspan").innerHTML = "let's play";
        document.getElementById("yourscore").innerHTML = blackjack['you']['score'] = 0;
        document.getElementById("botscore").innerHTML = blackjack['bot']['score'] = 0;
        p = document.querySelector("#you").querySelectorAll("img");
        b = document.querySelector("#bot").querySelectorAll("img");

        for (let
                i = 0; i < p.length; i++) {
            p[i].remove();

        }
        for (let i = 0; i < b.length; i++) {
            b[i].remove();

        }

    }
}


function bjresult() {
    if (blackjack['yourturn'] === true) {
        if (blackjack['you']['score'] <= 21 && blackjack['you']['score'] > blackjack['bot']['score']) {
            blackjack['wins']++;
            document.getElementById("win").innerHTML = blackjack['wins'];
            sound = document.createElement("Audio");
            sound.src = "win.mp3";
            sound.play();
            document.getElementById("win").appendChild(sound);

            return "you win!";
        } else if (blackjack['bot']['score'] <= 21 && blackjack['you']['score'] < blackjack['bot']['score']) {
            blackjack['losses']++;
            document.getElementById("loss").innerHTML = blackjack['losses'];
            sound = document.createElement("Audio");
            sound.src = "aw.mp3";
            sound.play();
            document.getElementById("loss").appendChild(sound);

            return "you lost!";
        } else if (blackjack['bot']['score'] === blackjack['you']['score'] && blackjack['bot']['score'] < 21 && blackjack['you']['score'] < 21) {
            blackjack['draws']++;
            document.getElementById("draw").innerHTML = blackjack['draws'];
            return "it's a tie!";
        } else if (blackjack['bot']['score'] > 21 && blackjack['you']['score'] > 21) {
            blackjack['draws']++;
            document.getElementById("draw").innerHTML = blackjack['draws'];
            return "it's a tie!";
        } else if (blackjack['bot']['score'] > 21 && blackjack['you']['score'] <= 21) {
            blackjack['wins']++;
            document.getElementById("win").innerHTML = blackjack['wins'];
            sound = document.createElement("Audio");
            sound.src = "win.mp3";
            sound.play();
            document.getElementById("win").appendChild(sound);
            return "you win!";
        } else if (blackjack['bot']['score'] <= 21 && blackjack['you']['score'] > 21) {
            blackjack['losses']++;
            document.getElementById("loss").innerHTML = blackjack['losses'];
            sound = document.createElement("Audio");
            sound.src = "aw.mp3";
            sound.play();
            document.getElementById("loss").appendChild(sound);
            return "you lost!";
        } else if (blackjack['bot']['score'] === 21 && blackjack['you']['score'] === 21) {
            blackjack['draws']++;
            document.getElementById("draw").innerHTML = blackjack['draws'];
            return "it's a tie!";
        }
    }
}