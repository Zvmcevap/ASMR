export class Quizes {
    constructor(quizScreen) {
        this.quizDiv = quizScreen
        this.title = document.createElement("h2")
        this.quizPic = document.createElement("img")
        this.quizPic.classList.add("quiz-pic")
        this.quizQuestion = document.createElement("h3")
        this.quizQuestion2 = document.createElement("p")
        this.quizQuestion2.classList.add("be-in-middle")
        this.quizParagragh = document.createElement("p")
        this.horizontalAnswersDiv = document.createElement("div")
        this.horizontalAnswersDiv.classList.add("horizontal-answers")
        this.verticalAnswersDiv = document.createElement("div")
        this.verticalAnswersDiv.classList.add("vertical-answers")
        this.questionImage = document.createElement("img")
        this.questionImage.classList.add("question-image")

        this.availableRewards = ["shotgun", "dart", "crayons"]
        this.selectedRewards = []
        this.pickPrizeText = document.createElement("p")
        this.pickPrizeText.classList.add("be-in-middle")
        this.pickPrizeText.innerHTML = "While not as special as the <b class=\"special\">SPECIAL PRIZE</b>, you can still choose from something below!"
    }

    prikaziKviz() {
        this.quizDiv.classList.add("prikazi-kviz")
    }

    odkaziKviz() {
        this.quizDiv.classList.remove("prikazi-kviz")
    }

    createSubtitle(text) {
        let subtitle = document.createElement("h3")
        subtitle.innerHTML = text
        return subtitle
    }

    createParagraph(text) {
        let paragraph = document.createElement("p")
        paragraph.innerHTML = text
        return paragraph
    }

    createAnswer(text, correct) {
        let answer = document.createElement("button")
        answer.classList.add("quiz-answer")
        if (correct) {
            answer.dataset.correct = correct
        }
        answer.innerHTML = text
        return answer
    }

    createAnswerWithPicture(pic, correct) {
        let picture = document.createElement("img")
        picture.src = "./images/" + pic + ".png"
        picture.classList.add("answer-image")

        let answer = document.createElement("button")
        answer.classList.add("quiz-answer")
        if (correct) {
            answer.dataset.correct = correct
        }
        answer.append(picture)
        return answer
    }

    createReward(reward) {
        let picture = document.createElement("img")
        picture.src = "./images/" + reward + ".png"

        let button = document.createElement("button")
        button.classList.add("quiz-answer")
        button.classList.add("quiz-reward")
        button.dataset.reward = reward

        button.append(picture)

        return button
    }

    matrixTrivia() {
        this.quizDiv.innerHTML = ""
        this.verticalAnswersDiv.innerHTML = ""
        this.title.innerHTML = "Matrix Trivia!"
        this.quizDiv.append(this.title)
        this.quizPic.src = "./images/matrix-trivia.png"
        this.quizDiv.append(this.quizPic)
        this.quizQuestion.innerHTML = "In 1999 the Wachowski brothers (now sisters), released the highly successful trans-metaphor film The Matrix."
        this.quizDiv.append(this.quizQuestion)
        this.quizQuestion2.innerHTML = "What is the product of these 2 matrices."
        this.quizDiv.append(this.quizQuestion2)
        this.questionImage.src = "./images/matrix-multiplication.png"
        this.quizDiv.append(this.questionImage)

        this.horizontalAnswersDiv.innerHTML = ""

        this.horizontalAnswersDiv.append(this.createAnswerWithPicture("matrix-answer2"))
        this.horizontalAnswersDiv.append(this.createAnswerWithPicture("matrix-answer1", true))
        this.horizontalAnswersDiv.append(this.createAnswerWithPicture("matrix-answer3"))
        this.quizDiv.append(this.horizontalAnswersDiv)
    }

    logicPuzzle() {
        this.quizDiv.innerHTML = ""
        this.verticalAnswersDiv.innerHTML = ""
        this.title.innerHTML = "Logistics!"
        this.quizDiv.append(this.title)
        this.quizPic.src = "./images/logic-gates.png"
        this.quizDiv.append(this.quizPic)
        this.quizQuestion.innerHTML = "Which of the statements below is correct?"
        this.quizDiv.append(this.quizQuestion)
        this.quizQuestion2.innerHTML = "<b>Hint: </b> you can use the helpful chart above to find the answer."
        this.quizDiv.append(this.quizQuestion2)
        this.verticalAnswersDiv.append(this.createAnswer("A: All of the below."))
        this.verticalAnswersDiv.append(this.createAnswer("B: None of the below."))
        this.verticalAnswersDiv.append(this.createAnswer("C: All of the above."))
        this.verticalAnswersDiv.append(this.createAnswer("D: One of the above."))
        this.verticalAnswersDiv.append(this.createAnswer("E: None of the above.", true))
        this.verticalAnswersDiv.append(this.createAnswer("F: None of the above."))
        this.quizDiv.append(this.verticalAnswersDiv)
    }

    letters() {
        this.quizDiv.innerHTML = ""
        this.verticalAnswersDiv.innerHTML = ""
        this.title.innerHTML = "Wordle Clone!"
        this.quizDiv.append(this.title)
        this.quizPic.src = "./images/letters.png"
        this.quizDiv.append(this.quizPic)
        this.quizQuestion.innerHTML = "What has 4 letters, occasionally has 12, always 6 but never 5 letters?"
        this.quizDiv.append(this.quizQuestion)
        this.quizQuestion2.innerHTML = "<b>Hint: </b>The answer has 9 letters."
        this.quizDiv.append(this.quizQuestion2)
        this.verticalAnswersDiv.append(this.createAnswer("The dictionary."))
        this.verticalAnswersDiv.append(this.createAnswer("Mail pouch."))
        this.verticalAnswersDiv.append(this.createAnswer("Yes.", true))

        this.quizDiv.append(this.verticalAnswersDiv)
    }

    calendar() {
        this.quizDiv.innerHTML = ""
        this.verticalAnswersDiv.innerHTML = ""
        this.title.innerHTML = "Been at it for DAYS!"
        this.quizDiv.append(this.title)
        this.quizPic.src = "./images/calendar.png"
        this.quizDiv.append(this.quizPic)
        this.quizQuestion.innerHTML = "According to the Gregorian Calendar, how many months had 28 days in the year 1600."
        this.quizDiv.append(this.quizQuestion)
        this.quizQuestion2.innerHTML = "<b>Hint: </b>if the year is divisible by 100, but not by 400, it is not a leap year."
        this.quizDiv.append(this.quizQuestion2)
        this.verticalAnswersDiv.append(this.createAnswer("Zero."))
        this.verticalAnswersDiv.append(this.createAnswer("One."))
        this.verticalAnswersDiv.append(this.createAnswer("Twelve.", true))

        this.quizDiv.append(this.verticalAnswersDiv)
    }

    hal() {
        this.quizDiv.innerHTML = ""
        this.verticalAnswersDiv.innerHTML = ""
        this.title.innerHTML = "Life is unfair..."
        this.quizDiv.append(this.title)
        this.quizPic.src = "./images/hal.png"
        this.quizDiv.append(this.quizPic)
        this.quizQuestion.innerHTML = "Like Hal always told the boys: \"Like I've always told you boys: \"crazy beats big every time.\"\""
        this.quizDiv.append(this.quizQuestion)
        this.quizQuestion2.innerHTML = "Should <i><b>they</b></i> fight, which one would win?"
        this.quizDiv.append(this.quizQuestion2)
        this.horizontalAnswersDiv.innerHTML = ""

        this.horizontalAnswersDiv.append(this.createAnswerWithPicture("pi"))
        this.horizontalAnswersDiv.append(this.createAnswerWithPicture("sqrt2"))
        this.horizontalAnswersDiv.append(this.createAnswerWithPicture("phi", true))
        this.horizontalAnswersDiv.append(this.createAnswerWithPicture("e"))

        this.quizDiv.append(this.horizontalAnswersDiv)
    }

    bigWords() {
        this.quizDiv.innerHTML = ""
        this.verticalAnswersDiv.innerHTML = ""
        this.title.innerHTML = "Big Ass Words LoL"
        this.quizDiv.append(this.title)
        this.quizPic.src = "./images/big-words.png"
        this.quizDiv.append(this.quizPic)
        this.quizQuestion.innerHTML = "Hippopotomonstrosesquippedaliophobia is the irrational fear of big ass words."
        this.quizDiv.append(this.quizQuestion)
        this.quizQuestion2.innerHTML = "What is the name of the quadrilaterally-faced hexahedron in the image above?"
        this.quizDiv.append(this.quizQuestion2)
        this.verticalAnswersDiv.append(this.createAnswer("Parallelepiped.", true))
        this.verticalAnswersDiv.append(this.createAnswer("Rhombicosidodecahedron."))
        this.verticalAnswersDiv.append(this.createAnswer("Cube."))

        this.quizDiv.append(this.verticalAnswersDiv)
    }

    biochemicalLinguistics() {
        this.quizDiv.innerHTML = ""
        this.verticalAnswersDiv.innerHTML = ""
        this.title.innerHTML = "Biochemical Linguistics"
        this.quizDiv.append(this.title)
        this.quizPic.src = "./images/linguistics-biochemistry.png"
        this.quizDiv.append(this.quizPic)
        this.quizQuestion.innerHTML = "One of the most combative fields of science is the field of Biochemical Linguistics."
        this.quizDiv.append(this.quizQuestion)
        this.quizQuestion2.innerHTML = "What is the correct pronunciation of the fruit above?"
        this.quizDiv.append(this.quizQuestion2)
        this.verticalAnswersDiv.append(this.createAnswer("Tomato.", true))
        this.verticalAnswersDiv.append(this.createAnswer("Tomato.", true))
        this.verticalAnswersDiv.append(this.createAnswer("Potato."))

        this.quizDiv.append(this.verticalAnswersDiv)
    }

    sixSeven() {
        this.quizDiv.innerHTML = ""
        this.verticalAnswersDiv.innerHTML = ""
        this.title.innerHTML = "Arithmophobia!"
        this.quizDiv.append(this.title)
        this.quizPic.src = "./images/sixSeven.png"
        this.quizDiv.append(this.quizPic)
        this.quizQuestion.innerHTML = "Why is <img style=\"display: inline; width: 4em; height: 4em; position: relative; top: 1.5em\" title=\"heartica_logo\" src=\"./images/c6.png\" alt=\"\"/> afraid of <img style=\"display: inline; width: 4em; height: 4em; position: relative; top: 1.5em\" title=\"heartica_logo\" src=\"./images/c7.png\" alt=\"\" width=\"150\" height=\"50\" />?"
        this.quizDiv.append(this.quizQuestion)
        this.quizQuestion2.innerHTML = "afraid of <img style=\"display: inline; width: 2em; height: 4em; position: relative; top: 2em\" title=\"heartica_logo\" src=\"./images/c7.png\" alt=\"\" width=\"150\" height=\"50\" />"
        this.verticalAnswersDiv.append(this.createAnswer("Because <img style=\"display: inline; width: 2em; height: 2em\" title=\"heartica_logo\" src=\"./images/c1.png\" alt=\"\" width=\"150\" height=\"50\" /><img style=\"display: inline; width: 2em; height: 2em;\" title=\"heartica_logo\" src=\"./images/c2.png\" alt=\"\" width=\"150\" height=\"50\" /><img style=\"display: inline; width: 2em; height: 2em;\" title=\"heartica_logo\" src=\"./images/c3.png\" alt=\"\" width=\"150\" height=\"50\" />"))
        this.verticalAnswersDiv.append(this.createAnswer("Because <img style=\"display: inline; width: 2em; height: 2em\" title=\"heartica_logo\" src=\"./images/c4.png\" alt=\"\" width=\"150\" height=\"50\" /><img style=\"display: inline; width: 2em; height: 2em;\" title=\"heartica_logo\" src=\"./images/c5.png\" alt=\"\" width=\"150\" height=\"50\" /><img style=\"display: inline; width: 2em; height: 2em;\" title=\"heartica_logo\" src=\"./images/c6.png\" alt=\"\" width=\"150\" height=\"50\" />"))
        this.verticalAnswersDiv.append(this.createAnswer("Because <img style=\"display: inline; width: 2em; height: 2em\" title=\"heartica_logo\" src=\"./images/c7.png\" alt=\"\" width=\"150\" height=\"50\" /><img style=\"display: inline; width: 2em; height: 2em;\" title=\"heartica_logo\" src=\"./images/c8.png\" alt=\"\" width=\"150\" height=\"50\" /><img style=\"display: inline; width: 2em; height: 2em; \" title=\"heartica_logo\" src=\"./images/c9.png\" alt=\"\" width=\"150\" height=\"50\" />", true))


        this.quizDiv.append(this.verticalAnswersDiv)
    }

    payWall() {
        this.quizDiv.innerHTML = ""
        this.verticalAnswersDiv.innerHTML = ""
        this.title.innerHTML = "PAY WALL!"
        this.quizDiv.append(this.title)
        this.quizPic.src = "./images/pay-wall.png"
        this.quizDiv.append(this.quizPic)
        this.quizQuestion.innerHTML = "Just how <b>exclusive</b> is this maze?"
        this.quizDiv.append(this.quizQuestion)
        this.quizParagragh.innerHTML = "We've added challenges that make it inaccessible to color-blind folk, whispers to make it inaccessible to the hard-of-hearing crowd, weird controls to make it inaccessible to clumsy people, we mention june 4th Tiananmen square massacre to make it inaccessible to the Chinese... and now the most exclusive addition of all! <b>A fucking paywall!</b> Haha, pay up bitches!"
        this.quizDiv.append(this.quizParagragh)
        this.horizontalAnswersDiv.innerHTML = ""

        this.horizontalAnswersDiv.append(this.createAnswerWithPicture("fry"))
        this.horizontalAnswersDiv.append(this.createAnswerWithPicture("marx", true))

        this.quizDiv.append(this.horizontalAnswersDiv)
    }

    victoryScreen() {
        this.quizDiv.innerHTML = ""
        this.verticalAnswersDiv.innerHTML = ""
        this.title.innerHTML = "<b class=\"special\">SUPER SPECIAL PRIZE</b>"
        this.quizDiv.append(this.title)
        this.quizPic.src = "./images/victory.png"
        this.quizDiv.append(this.quizPic)
        this.quizQuestion.innerHTML = "You open the chest and it you find: "
        this.quizDiv.append(this.quizQuestion)
        this.quizQuestion2.innerHTML = "A sense of accomplishment. Now isn't that <b><i>special.</i></b>"
        this.quizDiv.append(this.quizQuestion2)
        this.verticalAnswersDiv.append(this.createAnswer("Yay.", true))
        this.verticalAnswersDiv.append(this.createAnswer("This is FUCKING STUPID!"))
        this.quizDiv.append(this.verticalAnswersDiv)
    }

    rewardScreen() {
        this.quizQuestion2.remove()
        this.questionImage.remove()
        this.quizParagragh.remove()

        this.title.innerHTML = "SUCCESS!"
        this.quizQuestion.innerHTML = "LOOK AT YOU, SMARTYPANTS!"
        this.quizDiv.append(this.pickPrizeText)

        this.verticalAnswersDiv.remove()
        this.horizontalAnswersDiv.remove()
        this.horizontalAnswersDiv.innerHTML = ""
        let rewardIndeces = [0, 0]
        if (this.availableRewards.length > 1) {
            rewardIndeces = this.getTwoInts(this.availableRewards.length)
        }
        this.horizontalAnswersDiv.append(this.createReward(this.availableRewards[rewardIndeces[0]]))
        this.horizontalAnswersDiv.append(this.createReward(this.availableRewards[rewardIndeces[1]]))
        this.horizontalAnswersDiv.append(this.createReward("banana"))

        this.quizDiv.append(this.horizontalAnswersDiv)

    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    getTwoInts(max) {
        if (max <= 1) {
            return [0, 0]
        }

        let firstInt = this.getRandomInt(max)
        let both = []
        both.push(firstInt)


        let secondInt = null
        while (secondInt === firstInt || secondInt === null) {
            secondInt = this.getRandomInt(max)
        }
        both.push(secondInt)
        return both
    }
}