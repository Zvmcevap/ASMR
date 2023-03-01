export class Deaths {
    constructor(deathDiv) {
        this.deathDiv = deathDiv
        this.title = document.createElement("h3")
        this.deathPic = document.createElement("img")
    }

    createSubtitle(text) {
        let subtitle = document.createElement("h4")
        subtitle.innerHTML = text
        return subtitle
    }

    createParagraph(text) {
        let paragraph = document.createElement("p")
        paragraph.innerHTML = text
        return paragraph
    }

    createSpecialParagraph(text) {
        let paragraph = document.createElement("p")
        paragraph.innerHTML = text
        paragraph.classList.add("hug-bottom")
        return paragraph
    }

    skrij() {
        this.deathDiv.classList.remove("return-down")
        this.deathDiv.classList.add("remove-up")
    }

    prikazi() {
        this.deathDiv.classList.remove("remove-up")
        this.deathDiv.classList.add("return-down")
    }


    autoplayFail() {
        this.deathDiv.innerHTML = ""
        this.title.innerHTML = "AUTOPLAY DISABLED"
        this.title.style.margin = ".5em"
        this.deathDiv.append(this.title)
        this.deathDiv.append(this.createParagraph("Click the button bellow to enable sounds (They ARE needed to play the game)"))
        let button = document.createElement("button")
        button.innerHTML = "CLICK ME!"
        button.classList.add("autoplayButton")
        button.classList.add("button")
        button.id = "autoplay-button"
        this.deathDiv.append(button)
    }

    deathMinotaur() {
        this.deathDiv.innerHTML = ""
        this.deathPic.src = "./images/minotaur.png"
        this.deathDiv.append(this.deathPic)
        this.title.innerHTML = "Mauled by minotaur"
        this.deathDiv.append(this.title)
        this.deathDiv.append(this.createSubtitle("Minotaur?"))
        this.deathDiv.append(this.createParagraph("Ah yeah, the minotaur, I forgot to tell you about the minotaur..."))
        this.deathDiv.append(this.createParagraph("Going backsies is not allowed..."))
        this.deathDiv.append(this.createSpecialParagraph("Try again and reach that <b class=\"special\">SPECIAL PRIZE!!!</b>"))
    }

    deathHitWall() {
        this.deathDiv.innerHTML = ""
        this.deathPic.src = "./images/hit-wall.png"
        this.deathDiv.append(this.deathPic)
        this.title.innerHTML = "Took a wrong turn"
        this.deathDiv.append(this.title)
        this.deathDiv.append(this.createSubtitle("And you hit a wall... "))
        this.deathDiv.append(this.createParagraph("Cracked your head wide open."))
        this.deathDiv.append(this.createParagraph("You gotta learn to listen Lue..."))
        this.deathDiv.append(this.createSpecialParagraph("Try again and reach that <b class=\"special\">SPECIAL PRIZE!!!</b>"))
    }

    deathTransitioning() {
        this.deathDiv.innerHTML = ""
        this.deathPic.src = "./images/transitioning.png"
        this.deathDiv.append(this.deathPic)
        this.title.innerHTML = "Tried gender-affirmation operation in a dungeon"
        this.deathDiv.append(this.title)
        this.deathDiv.append(this.createSubtitle("What did you think would happen?"))
        this.deathDiv.append(this.createParagraph("But don't fret, it's totally possible in a safe enviroment, outside this deadly maze of hell."))
        this.deathDiv.append(this.createSpecialParagraph("Now go do what you have to and then return for that <b class=\"special\">SPECIAL PRIZE!!!</b>"))
    }

    deathQuiz(quizType) {
        let deathpic = "./images/" + quizType + "-death.png"
        let title = ""
        let subtitle = ""
        let paragraph = ""
        let specialParagraph = ""
        switch (quizType) {
            case "logic":
                title = "The Universe Implodes!"
                subtitle = "Your failure of logic made the Universe implode."
                paragraph = "Hope you're proud of yourself..."
                specialParagraph = "I even gave you a hint... sigh... you'll never reach that <b class=\"special\">SPECIAL PRIZE!!!</b>"
                break
            case "matrix-trivia":
                title = "AGENTS!!!"
                subtitle = "Lack of matrix knowledge made a certain mr. Smith very upset."
                paragraph = "You'll know more about that once you are him..."
                specialParagraph = "Welcome Agent Smith, a <b class=\"special\">SPECIAL PRIZE</b> awaits you!"
                break
            case "letters":
                title = "Dat Book Heavy."
                subtitle = "Somehow you found yourself beaten to death."
                paragraph = "By a dictionary."
                specialParagraph = "I'm not even making this up. Anyway, try again and get that <b class=\"special\">SPECIAL PRIZE!!!</b>"
                break
            case "calendar":
                title = "The Zodiac!"
                subtitle = "The Zodiac killer got annoyed with you."
                paragraph = "It happens."
                specialParagraph = "What's in the boooooox! Oh, it's a <b class=\"special\">SPECIAL PRIZE!!!</b>"
                break
            case "hal":
                title = "Hey! It's Euler! :D"
                subtitle = "What you got in your hand there Leonhard?"
                paragraph = "Oh dear! He's became irrational!!!"
                specialParagraph = "Ruuuuuun!!! To the <b class=\"special\">SPECIAL PRIZE!</b>"
                break
            case "big-words":
                title = "Sssssssssssssmack!"
                subtitle = "A piece of Euclidean geometry hit you square on the noggin."
                paragraph = ""
                specialParagraph = "Luckily that dome was empty, meanwhile a <b class=\"special\">SPECIAL PRIZE</b> remains undesturbed..."
                break
            case "biochemical-linguistics":
                title = "Wow...."
                subtitle = "Just wow..."
                paragraph = "That brain fart was really toxic... I can smell it from here..."
                specialParagraph = "I'm not even sure you deserve the <b class=\"special\">SPECIAL PRIZE</b> now..."
                break
            case "six-seven":
                title = "CLOWNS!!"
                subtitle = "Clowns eat people."
                paragraph = "Facts."
                specialParagraph = "No <b class=\"special\">SPECIAL PRIZE</b> for clowns, tell you that!"
                break
            case "pay-wall":
                title = "Capitalism killed you!"
                subtitle = "You couldn't afford a home, life-saving medicine and in the end you ended up selling yourself for basic nourishment."
                paragraph = "But there is a solution!"
                specialParagraph = "It's the <b class=\"special\">SUPER SPECIAL PRIZE</b> you've been hearing so much about ;)"
                break
        }
        this.deathDiv.innerHTML = ""
        this.deathPic.src = deathpic
        this.deathDiv.append(this.deathPic)
        this.title.innerHTML = title
        this.deathDiv.append(this.title)
        this.deathDiv.append(this.createSubtitle(subtitle))
        this.deathDiv.append(this.createParagraph(paragraph))
        this.deathDiv.append(this.createSpecialParagraph(specialParagraph))
    }

    happyEnd() {
        this.deathDiv.innerHTML = ""
        this.deathPic.src = "./images/happy.png"
        this.deathDiv.append(this.deathPic)
        this.title.innerHTML = "YAAAAY!"
        this.deathDiv.append(this.title)
        this.deathDiv.append(this.createSubtitle("Thank you for playing!"))
        this.deathDiv.append(this.createSubtitle("<b class=\"special\">Friend</b>"))
    }

    sadEnd() {
        this.deathDiv.innerHTML = ""
        this.deathPic.src = "./images/shrug.png"
        this.deathDiv.append(this.deathPic)
        this.title.innerHTML = "You play stupid games."
        this.deathDiv.append(this.title)
        this.deathDiv.append(this.createSubtitle("You win stupid prizes."))
    }
}