export function keyPress() {
    const keyPressSound = new Audio("./sounds/keyboard-sound.mp3")
    keyPressSound.play()
}

export function clickSound() {
    const clickSound = new Audio("./sounds/click_sound.mp3")
    clickSound.play()
}

function whisperRight() {
    const sound = new Audio("./sounds/go-right.mp3")
    sound.play()
}

function whisperUp() {
    const sound = new Audio("./sounds/go-up.mp3")
    sound.play()
}

function whisperDown() {
    const sound = new Audio("./sounds/go-down.mp3")
    sound.play()
}

function whisperLeft() {
    const sound = new Audio("./sounds/go-left.mp3")
    sound.play()
}

export function whisperDirections(direction) {
    switch (direction) {
        case "up":
            whisperUp()
            break
        case "down":
            whisperDown()
            break
        case "left":
            whisperLeft()
            break
        case "right":
            whisperRight()
            break
    }
}

export function createSquawks() {
    let random = getRandomInt(8)
    random += 1
    const squawk = new Audio("./sounds/squawk" + random + ".mp3")
    squawk.play()
}

export function deathSound(causa) {
    const sound = new Audio("./sounds/" + causa + ".mp3")
    sound.play()
}

export function drumRoll() {
    const drums = new Audio("./sounds/drum-roll.mp3")
    drums.play()
}

export function yaySound() {
    const yay = new Audio("./sounds/yay.mp3")
    yay.play()
}
export function naySound() {
    const nay = new Audio("./sounds/nay.mp3")
    nay.play()
}

export function playRewardSound(reward) {
    const sound = new Audio("./sounds/" + reward + ".mp3")
    sound.play()
}


export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}