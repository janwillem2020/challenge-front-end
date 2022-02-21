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
var clickedButton
var clickedImage

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

// Generate Images en buttons
function generateElements(qty) {
    imageContainer.innerHTML = ""
    buttonContainer.innerHTML = ""
    shuffle(characters, 10)
    console.log(shuffle(characters.slice(0, qty), 10))

    for (i = 0; i < qty; i++) {
        var image = document.createElement("img")
        image.src = characters[i]["path"]
        image.dataset.character = characters[i]["name"]
        image.onclick = function() {
            clickedImage = this.dataset.character

            if (clickedButton == clickedImage) {
                console.log("correct")
            } else {
                console.log("incorrect")
            }
        }

        imageContainer.appendChild(image)
    }
    shuffle(characters.slice(0, qty), 10)
    for (i = 0; i < qty; i++) {
        var button = document.createElement("button")
        button.innerHTML = characters[i]["name"]
        button.dataset.character = characters[i]["name"]
        button.classList.add("btn", "btn-primary", "m-1")
        button.onclick = function() {
            clickedButton = this.dataset.character
            
            if (clickedButton == clickedImage) {
                console.log("correct")
            } else {
                console.log("incorrect")
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
        clearInterval(timer)
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
    console.log(imageAmount)
    generateElements(imageAmount)
}

// End game function
function endGame() {
    startButton.classList.add("btn-success")
    startButton.classList.remove("btn-danger")
    startButton.innerHTML = "Start"
    clearInterval(timer)
    gameState = "stopped"
    document.getElementById("tijdText").innerHTML = "Je had nog " + currentTime + " seconden over."
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

startButton.onclick = function() {
    if (gameState == "notStarted") {
        startGame()
    } else if (gameState == "started") {
        endGame()
    } else if (gameState == "stopped") {
        startGame()
    }
}