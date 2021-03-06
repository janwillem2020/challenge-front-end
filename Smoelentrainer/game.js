// variables

// Standaard difficulty en aantal images
var imageAmount = 10
var currentDifficulty = "hard"

// Standaard tijd en rekensom
var totalTime = 20
currentTime = totalTime - 1
var timer

// Startbutton en standaard gamestate
var startButton = document.getElementById("startButton")
var gameState = "notStarted"

// Containers
var imageContainer = document.getElementById("imageContainer")
var buttonContainer = document.getElementById("buttonContainer")

// Check clicked images
var lastClickedButton
var lastClickedImage

// Dropdown button
var dropButton = document.getElementById("dropdownMenu")

// Dropdown menu state
var currentState = "hidden"

// Chracters object array
var characters = [
    {
        name:"Sindri",
        path:"images/characters/sindri.jpg"
    },
    {
        name:"Kratos",
        path:"images/characters/kratos.png"
    },
    {
        name:"Brok",
        path:"images/characters/brok.jpg"
    },
    {
        name:"Mimir",
        path:"images/characters/mimir.jpg"
    },
    {
        name:"Freya",
        path:"images/characters/freya.png"
    },
    {
        name:"Baldur",
        path:"images/characters/baldur.jpg"
    },
    {
        name:"Leviathan Axe",
        path:"images/characters/leviathanAxe.png"
    },
    {
        name:"Atreus",
        path:"images/characters/atreus.png"
    },
    {
        name:"Jörmungandr",
        path:"images/characters/jormungandr.png"
    },
    {
        name:"Blades Of Chaos",
        path:"images/characters/bladesOfChaos.png"
    }
]

// Functions

// Shuffle function
function shuffle(array, shuffleAmount) {
    for(i = 0; i < shuffleAmount; i++) {
        for(j = 0; j < array.length; j++) {
            var randomNumber = Math.floor(Math.random() * array.length)
            var temp = array[j]
            array[j] = array[randomNumber]
            array[randomNumber] = temp
        }
    }
    return array
}



// Generate shuffled Images en buttons
function generateElements(qty) {
    imageContainer.innerHTML = ""
    buttonContainer.innerHTML = ""
    shuffle(characters, 10)
    gameArray = characters.slice(0, qty)
    shuffle(gameArray, 10)
    var score = 0
    for (i = 0; i < qty; i++) {
        var image = document.createElement("img")
        image.src = gameArray[i]["path"]
        image.dataset.character = gameArray[i]["name"]
        image.onclick = function() {
            lastClickedImage = this

            if (lastClickedButton.dataset.character == lastClickedImage.dataset.character) {
                this.style.display = "none"
                lastClickedButton.style.display = "none"
                lastClickedImage = ""
                lastClickedButton = ""
                score++
                if (score == qty) {
                    endGame()
                }
            } else {
                wrongAnswer()
            }
        }

        imageContainer.appendChild(image)
    }
    shuffle(gameArray, 10)
    for (i = 0; i < qty; i++) {
        var button = document.createElement("button")
        button.innerHTML = gameArray[i]["name"]
        button.dataset.character = gameArray[i]["name"]
        button.classList.add("btn", "btn-primary", "m-1")
        button.onclick = function() {
            lastClickedButton = this
            
            if (lastClickedButton.dataset.character == lastClickedImage.dataset.character) {
                this.style.display = "none"
                lastClickedImage.style.display = "none"
                lastClickedImage = ""
                lastClickedButton = ""
                score++
                if (score == qty) {
                    endGame()
                }
            } else {
                wrongAnswer()
            }
        }

        buttonContainer.appendChild(button)
    }
}

// Tijd functie
function startTijd() {
    currentTime--
    tijdProcent = currentTime / totalTime * 100
    document.getElementById("tijdbalk").style.width = tijdProcent + "%"
    if (currentTime == 0) {
        endGame()
    }
}

// Start game function
function startGame() {
    startButton.classList.remove("btn-success")
    startButton.classList.add("btn-danger")
    startButton.innerHTML = "Stop"
    gameState = "started"
    timer = setInterval(startTijd ,1000)
    document.getElementById("tijdbalk").style.display = "inline-block"
    document.getElementById("tijdText").innerHTML = ""
    generateElements(imageAmount)
}

// End game function
function endGame() {
    startButton.classList.add("btn-success")
    startButton.classList.remove("btn-danger")
    startButton.innerHTML = "Start"
    
    gameState = "stopped"
    document.getElementById("tijdText").innerHTML = "Je had nog " + currentTime + " seconden over."

    // Clear elements
    imageContainer.innerHTML = ""
    buttonContainer.innerHTML = ""

    // Reset timer
    clearInterval(timer)
    currentTime = totalTime
    tijdProcent = currentTime / totalTime * 100
    document.getElementById("tijdbalk").style.width = tijdProcent + "%"
}

function wrongAnswer() {
    alert("FOUTTTTT")
}

// Onclick functions

// Dropdown function
dropButton.onclick = function dropdown() {
    if (currentState == "hidden") {
        document.getElementById("dropdown").style.display = "inline-block"
        currentState = "shown"
        document.getElementById("pijl").classList.add('fa-angle-down');
        document.getElementById("pijl").classList.remove('fa-angle-right');
    }else if (currentState == "shown") {
        document.getElementById("dropdown").style.display = "none"
        currentState = "hidden"
        document.getElementById("pijl").classList.add('fa-angle-right');
        document.getElementById("pijl").classList.remove('fa-angle-down');
    }
}

// Hard difficulty
document.getElementById("hard").onclick = function() {
    if (currentDifficulty != "hard") {
        currentDifficulty = "hard"
        imageAmount = 10

        dropButton.classList.add("btn-danger")
        dropButton.classList.remove("btn-warning")
        dropButton.classList.remove("btn-success")

        document.getElementById("easyIcon").style.display = "none"
        document.getElementById("mediumIcon").style.display = "none"
        document.getElementById("hardIcon").style.display = "inline-block"
    }
}

// Medium difficulty
document.getElementById("medium").onclick = function() {
    if (currentDifficulty != "medium") {
        currentDifficulty = "medium"
        imageAmount = 8

        dropButton.classList.remove("btn-danger")
        dropButton.classList.add("btn-warning")
        dropButton.classList.remove("btn-success")

        document.getElementById("easyIcon").style.display = "none"
        document.getElementById("mediumIcon").style.display = "inline-block"
        document.getElementById("hardIcon").style.display = "none"
    }
}

// Easy difficulty
document.getElementById("easy").onclick = function() {
    if (currentDifficulty != "easy") {
        currentDifficulty = "easy"
        imageAmount = 6

        dropButton.classList.remove("btn-danger")
        dropButton.classList.remove("btn-warning")
        dropButton.classList.add("btn-success")

        document.getElementById("easyIcon").style.display = "inline-block"
        document.getElementById("mediumIcon").style.display = "none"
        document.getElementById("hardIcon").style.display = "none"
    }
}

// Check gamestate
startButton.onclick = function() {
    if (gameState == "notStarted") {
        startGame()
    } else if (gameState == "started") {
        endGame()
    } else if (gameState == "stopped") {
        startGame()
    }
}