import {makeGrid} from "./createLab.js"
import {makePath, getStartingPolje} from "./makePath.js"
import {
    fromPlayToMoveButtons,
    fromMoveToPlayButtons,
    buttonBeepRed,
    buttonBoopWhite,
    returnMovementButtons, hideMovementButtons, sail, unsail
} from "./buttons.js"
import {Deaths} from "./Deaths.js";
import {Quizes} from "./Quizes.js";
import {Navodila} from "./Navodila.js";
import {
    clickSound,
    createSquawks,
    deathSound, drumRoll,
    getRandomInt,
    keyPress, naySound, playRewardSound,
    whisperDirections, yaySound
} from "./sounds.js";


// OFF SCREENI
const deathScreen = document.getElementById("death-screen")
const deaths = new Deaths(deathScreen)
const navodila = new Navodila()

// KVIZ STVARI
const quizScreen = document.getElementById("main-quiz-div")
const quiz = new Quizes(quizScreen)
let quizType = ""
let quizRewards = ["banana", "shotgun", "dart", "crayons"]
const allQuizes = ["big-words", "biochemical-linguistics", "calendar", "hal", "letters", "logic", "matrix-trivia", "six-seven"]
let availableQuizes = [...allQuizes]

// MUSIC
const deathMusic = new Audio("./music/sad-violin.mp3")
deathMusic.loop = true
const mainMusic = new Audio("./music/epic-adventure.mp3")
mainMusic.loop = true
const brena = new Audio("./music/brena.mp3")
brena.loop = true;
const victoryMusic = new Audio("./music/victory.mp3")

// AUTOPLAY FAIL
let autoPlayPromise = mainMusic.play()

function hideAutoplayAlert() {
    deaths.skrij()
    playMusic(mainMusic)
    navodila.prikazi()
}

let visited = [];
const gridSize = 7;
const labirint = document.getElementById("labirint")
const playerImage = document.getElementById("player-img")
const playerStartingDiv = document.getElementById("player-start")
let currentPoljeIndex = -1

const poljaArray = makeGrid(gridSize);
gridCSSSize(gridSize, labirint)

// INFO SPOL GUMB!!!
const gumbInfo = document.getElementById("info-button")
gumbInfo.addEventListener('mouseover', () => gumbInfo.classList.remove("come-into-from-top"))
gumbInfo.addEventListener('click', toggleNavodila)

const spolGumb = document.getElementById("gender-change")
spolGumb.addEventListener("mouseover", () => spolGumb.classList.remove("come-into-from-top"))
spolGumb.addEventListener("click", spremeniSpol)
let isZenska = true


// PLAY BUTTON
const playButton = document.getElementById("play-button")
let isBeep = false;
let playButtonBeepInterval = null;
playButton.addEventListener('click', play)

const oneButtonDiv = document.getElementById("buttonsDiv-oneButton")


// PELIKANI!!!
const pelikaniLevo = document.getElementById("pelikani-levo")
const pelikaniDesno = document.getElementById("pelikani-desno")
const pelikaniImg = []
for (let i = 1; i < 5; i++) {
    const pImg = document.getElementById("pelikan" + i)
    pelikaniImg.push(pImg)
}
let squawkInterval = null
let pelikanReward = false

// UŠESA IN BANANE!!!
const earButton = document.getElementById("ear-button")
earButton.addEventListener("click", useEar)

const uses1 = document.getElementById("uses1")
const uses2 = document.getElementById("uses2")
const uses3 = document.getElementById("uses3")

const usesa = [uses1, uses2, uses3]
let whispers = 3

const banana1 = document.getElementById("banana1")
const banana2 = document.getElementById("banana2")
const banana3 = document.getElementById("banana3")

const banane = [banana1, banana2, banana3]
let prikazaneBanane = 0


// MOVE BUTTONS!
const moveButtonsDiv = document.getElementById("move-buttons")
const sailingDiv = document.getElementById("sail-div")

const moveButtonUp = document.getElementById("move-up")
moveButtonUp.addEventListener("click", movementUp)

let moveButtonBeepInterval = null

const moveButtonDown = document.getElementById("move-down")
moveButtonDown.addEventListener("click", movementDown)

const moveButtonLeft = document.getElementById("move-left")
moveButtonLeft.addEventListener("click", movementLeft)

const moveButtonRight = document.getElementById("move-right")
moveButtonRight.addEventListener("click", movementRight)


// GRID!!!
function gridCSSSize(gridSize, labirint) {
    labirint.style.setProperty('--numberOfColumns', gridSize);
    labirint.style.setProperty('--numberOfRows', gridSize)
}

for (let i = 0; i < poljaArray.length; i++) {
    for (let l = 0; l < poljaArray[i].length; l++) {
        labirint.appendChild(poljaArray[i][l].div);
    }
}


function play() {
    availableQuizes = [...allQuizes]
    quiz.availableRewards = ["shotgun", "dart", "crayons"]
    stopMusic(mainMusic)
    stopMusic(deathMusic)
    keyPress()
    pelikanReward = false
    whispers = 3
    prikazaneBanane = 0
    document.addEventListener("keydown", handleKeyPress)
    currentPoljeIndex = -1
    playerStartingDiv.appendChild(playerImage)
    playerImage.classList.remove("dead")
    if (playButtonBeepInterval != null) {
        clearInterval(playButtonBeepInterval)
    }
    for (const polje of visited) {
        polje.setPath(false);
        polje.goTo = "";
        polje.comeFrom = "";
    }
    let start = getStartingPolje(poljaArray)
    visited = [start];

    visited = makePath(poljaArray, 14, visited, getStartingPolje(poljaArray));

    navodila.skrij()
    deaths.skrij()
    unsail(sailingDiv)
    fromPlayToMoveButtons(oneButtonDiv, moveButtonsDiv);
    pelikaniPriletijo()
    moveButtonBeepInterval = setInterval(buttonBeepBoop, 750, moveButtonUp)

    for (let i = 0; i < usesa.length; i++) {
        setTimeout(narisiElementNadLabirintom, 100 * i, usesa[i])
    }
    for (let i = 0; i < poljaArray.length; i++) {
        for (let l = 0; l < poljaArray[i].length; l++) {
            setTimeout(uncolor, 1000 + (300 * (i + l)), poljaArray[i][l].div)
        }
    }
}

function death(causa) {
    document.removeEventListener("keydown", handleKeyPress)
    hideMovementButtons([moveButtonDown, moveButtonRight, moveButtonLeft, earButton])
    for (let i = 0; i < poljaArray.length; i++) {
        for (let l = 0; l < poljaArray[i].length; l++) {
            uncolor(poljaArray[i][l].div)
        }
    }
    unsail(sailingDiv)
    fromMoveToPlayButtons(oneButtonDiv, moveButtonsDiv)
    playerImage.classList.add("dead")
    pelikaniOdletijo()
    clearInterval(squawkInterval)


    for (let i = 0; i < 3; i++) {
        setTimeout(odrisiElementeNadLabirintom, 100 * i, usesa[i])
        setTimeout(odrisiElementeNadLabirintom, 100 * i, banane[i])
    }

    switch (causa) {
        case "minotaur":
            deaths.deathMinotaur()
            break
        case "hit-wall":
            deaths.deathHitWall()
            break
        case "transitioning":
            deaths.deathTransitioning()
            break
        case "quiz":
            deaths.deathQuiz(quizType)
            break
    }
    deaths.prikazi()
    deathSound(causa)
    setTimeout(playMusic, 2000, deathMusic)

    playButtonBeepInterval = setInterval(buttonBeepBoop, 750, playButton)
}

function narisiElementNadLabirintom(element) {
    element.classList.remove("move-down")
    element.classList.add("move-up")
}

function odrisiElementeNadLabirintom(element) {
    element.classList.remove("move-up")
    element.classList.add("move-down")
}

function toggleNavodila() {
    clickSound()
    navodila.toggleSkrij()
}

function buttonBeepBoop(button) {
    if (isBeep) {
        buttonBeepRed(button)
        isBeep = false;
    } else {
        buttonBoopWhite(button)
        isBeep = true
    }
}

function pelikaniPriletijo() {
    pelikaniDesno.classList.remove("odletijo")
    pelikaniDesno.classList.add("priletijo")
    pelikaniLevo.classList.remove("odletijo")
    pelikaniLevo.classList.add("priletijo")
}

function pelikaniOdletijo() {
    pelikaniDesno.classList.replace("priletijo", "odletijo")
    pelikaniLevo.classList.replace("priletijo", "odletijo")
}

function win() {
    quiz.victoryScreen()
    quiz.prikaziKviz()
    clearInterval(squawkInterval)
    playMusic(victoryMusic)

    const victoryButtons = document.querySelectorAll(".quiz-answer")
    for (const victoryButton of victoryButtons) {
        victoryButton.addEventListener("click", endScreen)
    }
}

function endScreen() {
    stopMusic(victoryMusic)
    document.removeEventListener("keydown", handleKeyPress)

    fromMoveToPlayButtons(oneButtonDiv, moveButtonsDiv)
    hideMovementButtons([moveButtonDown, moveButtonRight, moveButtonLeft, earButton])
    unsail(sailingDiv)
    pelikaniOdletijo()
    clearInterval(squawkInterval)
    playButtonBeepInterval = setInterval(buttonBeepBoop, 750, playButton)
    for (let i = 0; i < 3; i++) {
        setTimeout(odrisiElementeNadLabirintom, 100 * i, usesa[i])
        setTimeout(odrisiElementeNadLabirintom, 100 * i, banane[i])
    }

    if (this.dataset.correct) {
        deaths.happyEnd()
    } else {
        deaths.sadEnd()
    }
    quiz.odkaziKviz()
    deaths.prikazi()
    playMusic(mainMusic)
}


function movementUp() {
    keyPress()
    stopMusic(deathMusic)
    stopMusic(mainMusic)
    if (currentPoljeIndex === -1) {
        returnMovementButtons([moveButtonDown, moveButtonRight, moveButtonLeft, earButton])
        clearInterval(moveButtonBeepInterval)
        moveButtonUp.style.fill = "white"
        visited[0].div.appendChild(playerImage)
        currentPoljeIndex = 0
        squawkInterval = setInterval(squawk, 2000)
        whisperDirections(visited[0].goTo)
        setTimeout(sail, 3000, sailingDiv)
    } else if (currentPoljeIndex === visited.length - 1) {
        win()
    } else {
        if (visited[currentPoljeIndex].goTo === "up") {
            currentPoljeIndex += 1
            visited[currentPoljeIndex].div.appendChild(playerImage)
            if (((currentPoljeIndex + 1) % 5) === 0) {
                startQuizRound()
            } else {
                whisperDirections(visited[currentPoljeIndex].goTo)
            }
        } else if (visited[currentPoljeIndex].comeFrom === "up") {
            death("minotaur")
        } else {
            death("hit-wall")
        }
    }
}

function movementDown() {
    keyPress()
    if (currentPoljeIndex < 0) {
        return
    }
    if (visited[currentPoljeIndex].goTo === "down") {
        currentPoljeIndex += 1
        visited[currentPoljeIndex].div.appendChild(playerImage)
        if (((currentPoljeIndex + 1) % 5) === 0) {
            whisperDirections(visited[currentPoljeIndex].goTo)
            startQuizRound()

        } else {
            whisperDirections(visited[currentPoljeIndex].goTo)
        }
    } else if (visited[currentPoljeIndex].comeFrom === "down") {
        death("minotaur")
    } else {
        death("hit-wall")
    }
}

function movementLeft() {
    keyPress()
    if (currentPoljeIndex < 0) {
        return
    }
    if (visited[currentPoljeIndex].goTo === "left") {
        currentPoljeIndex += 1
        visited[currentPoljeIndex].div.appendChild(playerImage)
        if (((currentPoljeIndex + 1) % 5) === 0) {

            startQuizRound()
        } else {
            whisperDirections(visited[currentPoljeIndex].goTo)
        }
    } else if (visited[currentPoljeIndex].comeFrom === "left") {
        death("minotaur")
    } else {
        death("hit-wall")
    }
}

function movementRight() {
    keyPress()
    if (currentPoljeIndex < 0) {
        return
    }
    if (visited[currentPoljeIndex].goTo === "right") {
        currentPoljeIndex += 1

        visited[currentPoljeIndex].div.appendChild(playerImage)
        if (((currentPoljeIndex + 1) % 5) === 0) {
            startQuizRound()
        } else {
            whisperDirections(visited[currentPoljeIndex].goTo)
        }
    } else if (visited[currentPoljeIndex].comeFrom === "right") {
        death("minotaur")
    } else {
        death("hit-wall")
    }
}

function handleKeyPress(e) {
    if (e.key === "v") {
        movementUp()
        return;
    }
    if (e.key === "m") {
        movementDown()
        return;
    }
    if (e.key === "p") {
        movementRight()
        return;
    }
    if (e.key === "q") {
        movementLeft()
    }
}

function useEar() {
    if (whispers > 0) {
        whisperDirections(visited[currentPoljeIndex].goTo)
        whispers -= 1
        odrisiElementeNadLabirintom(usesa[whispers])
    } else {
        if (brena.paused) {
            brena.play()
        } else {
            brena.pause()
        }
    }
}

function squawk() {
    let randomInt = getRandomInt(11)
    randomInt += 1
    setTimeout(createSquawks, 100 * randomInt)
    setTimeout(shakeBird, 100 * randomInt)
}

function shakeBird() {
    let randomInt = getRandomInt(4)
    let pelikan = pelikaniImg[randomInt]
    pelikan.classList.add("shake")
    setTimeout(unshakeBird, 500, pelikan)
}

function unshakeBird(bird) {
    bird.classList.remove("shake")
}

function playMusic(music) {
    music.play()
}

function stopMusic(music) {
    music.pause()
    music.currentTime = 0
}


function spremeniSpol() {
    clickSound()
    if (currentPoljeIndex < 0) {
        if (isZenska) {
            playerImage.src = "./images/player_m.png"
            spolGumb.classList.replace("zenska", "moski")
            spolGumb.innerText = "M"
            isZenska = false
        } else {
            playerImage.src = "./images/player_f.png"
            spolGumb.classList.replace("moski", "zenska")
            spolGumb.innerText = "F"
            isZenska = true
        }
    } else {
        death("transitioning")
    }
}

function startQuizRound() {
    document.removeEventListener("keydown", handleKeyPress)
    clearInterval(squawkInterval)
    let randomInt = getRandomInt(availableQuizes.length)
    if (currentPoljeIndex === (visited.length - 1)) {
        quizType = "pay-wall"
        quiz.payWall()
    } else {
        switch (availableQuizes[randomInt]) {
            case "logic":
                quizType = "logic"
                quiz.logicPuzzle()
                break
            case "matrix-trivia":
                quizType = "matrix-trivia"
                quiz.matrixTrivia()
                break
            case "letters":
                quizType = "letters"
                quiz.letters()
                break
            case "calendar":
                quizType = "calendar"
                quiz.calendar()
                break
            case "hal":
                quizType = "hal"
                quiz.hal()
                break
            case "big-words":
                quizType = "big-words"
                quiz.bigWords()
                break
            case "biochemical-linguistics":
                quizType = "biochemical-linguistics"
                quiz.biochemicalLinguistics()
                break
            case "six-seven":
                quizType = "six-seven"
                quiz.sixSeven()
                break
        }
    }
    availableQuizes.splice(randomInt, 1)
    quiz.prikaziKviz()
    const answers = document.querySelectorAll(".quiz-answer")
    for (const answer of answers) {
        answer.addEventListener("click", chosenAnswer)
    }

}


function chosenAnswer() {
    const answers = document.querySelectorAll(".quiz-answer")
    drumRoll()
    this.classList.add("chosen")
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] !== this) {
            let removeClass = (i % 2 === 0) ? "remove-left" : "remove-right"
            answers[i].classList.add(removeClass)
        }
    }
    if (this.dataset.correct) {
        setTimeout(changeAnswerColor, 3500, this, "green")
        setTimeout(yaySound, 3000)
        setTimeout(quizSuccess, 5000)
        document.addEventListener("keydown", handleKeyPress)
    } else {
        setTimeout(changeAnswerColor, 3500, this, "maroon")
        setTimeout(naySound, 3000)
        setTimeout(quizFail, 5000)
    }
}

function quizFail() {
    quiz.odkaziKviz()
    death("quiz")
}

function quizSuccess() {
    quiz.rewardScreen()

    let rewardButtons = document.querySelectorAll(".quiz-reward")
    for (const rewardButton of rewardButtons) {
        rewardButton.addEventListener("click", chosenReward)
    }
}

function chosenReward() {
    const rewards = document.querySelectorAll(".quiz-reward")
    for (const tempReward of rewards) {
        if (tempReward !== this) {
            tempReward.classList.add("remove-fade")
        }
    }
    this.classList.add("chosen")

    let reward = this.dataset.reward
    quiz.availableRewards.splice(quiz.availableRewards.indexOf(reward), 1)
    quiz.selectedRewards.push(reward)

    setTimeout(playRewardSound, 500, reward)
    switch (reward) {
        case "banana":
            setTimeout(narisiElementNadLabirintom, 1000, banane[prikazaneBanane])
            prikazaneBanane += 1
            break
        case "dart":
            sailingDiv.classList.remove("sail")
            break
        case "shotgun":
            setTimeout(pelikaniOdletijo, 4100)
            pelikanReward = true
            break
        case "crayons":
            for (let i = 0; i < poljaArray.length; i++) {
                for (let l = 0; l < poljaArray[i].length; l++) {
                    console.log(poljaArray[i][l])
                    setTimeout(colorPolje, 1000 + (300 * (i + l)), poljaArray[i][l].div)
                }
            }
            break
    }
    setTimeout(odrisiKviz, 1500)
    if (!pelikanReward) {
        squawkInterval = squawkInterval = setInterval(squawk, 2000)
    }
    setTimeout(whisperDirections, 5000, visited[currentPoljeIndex].goTo)
}

function odrisiKviz() {
    quiz.odkaziKviz()
}


function changeAnswerColor(answer, color) {
    answer.style.background = color
    answer.style.color = "white"
    answer.style.fill = "white"
}

function colorPolje(polje) {
    polje.classList.add("colored")
}

function uncolor(polje) {
    polje.classList.remove("colored")
}
