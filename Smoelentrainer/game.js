function shuffle(array, shuffleAmount) {
    for(i = 0; i < shuffleAmount; i++) {
        for(i = 0; i < array.length; i++) {
            var randomNumber = Math.floor(Math.random() * array.length)
            var temp = array[i]
            array[i] = array[randomNumber]
            array[randomNumber] = temp
        }
    }
    return array
}

function characterSet() {
    characterList = document.querySelectorAll(".btn-primary");
    shuffle(characters, 10)
    for(i = 0; i < characterList.length; i++) {
        characterList[i].dataset.character = characters[i]
        characterList[i].innerHTML = characters[i]
    }
}

function imageSet() {
    imageList = document.querySelectorAll(".image");
    shuffle(imagePath, 10)
    for(i = 0; i < imageList.length; i++) {
        imageList[i].dataset.image = characters[i]
        imageList[i].src = imagePath[i]
    }
}

// var characters = ["Sindri", "Kratos", "Brok", "Mimir", "Freya", "Baldur", "Leviathan Axe", "Atreus", "Jörmungandr", "Blades Of Chaos"]
// var imagePath = ["images/characters/sindri.jpg", "images/characters/kratos.png", "images/characters/brok.jpg", "images/characters/mimir.jpg", "images/characters/freya.png", 
// "images/characters/baldur.jpg", "images/characters/leviathanAxe.png", "images/characters/atreus.png", "images/characters/jormungandr.png", "images/characters/bladesOfChaos.png"]

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

imageSet()
characterSet()

var dropButton = document.getElementById("dropdownMenu")
var currentState = "hidden"

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

var currentDifficulty = "hard"

document.getElementById("hard").onclick = function() {
    if (currentDifficulty != "hard") {
        currentDifficulty = "hard"
        document.getElementById("easyIcon").style.display = "none"
        document.getElementById("mediumIcon").style.display = "none"
        document.getElementById("hardIcon").style.display = "inline-block"
    }
}

document.getElementById("medium").onclick = function() {
    if (currentDifficulty != "medium") {
        currentDifficulty = "medium"
        document.getElementById("easyIcon").style.display = "none"
        document.getElementById("mediumIcon").style.display = "inline-block"
        document.getElementById("hardIcon").style.display = "none"
    }
}

document.getElementById("easy").onclick = function() {
    if (currentDifficulty != "easy") {
        currentDifficulty = "easy"
        document.getElementById("easyIcon").style.display = "inline-block"
        document.getElementById("mediumIcon").style.display = "none"
        document.getElementById("hardIcon").style.display = "none"
    }
}

var totalTime = 20
currentTime = totalTime - 1

function startTijd() {
    currentTime--
    tijdProcent = currentTime / totalTime * 100
    document.getElementById("tijdbalk").style.width = tijdProcent + "%"
    if (currentTime == 0) {
        clearInterval(timer)
    }
}

var startButton = document.getElementById("startButton")
var gameState = "notStarted"

function startGame() {
    startButton.classList.remove("btn-success")
    startButton.classList.add("btn-danger")
    startButton.innerHTML = "Stop"
    gameState = "started"
    timer = setInterval(startTijd ,1000)
    document.getElementById("tijdbalk").style.display = "inline-block"
    document.getElementById("tijdText").innerHTML = ""
}

function endGame() {
    startButton.classList.add("btn-success")
    startButton.classList.remove("btn-danger")
    startButton.innerHTML = "Start"
    clearInterval(timer)
    gameState = "stopped"
    document.getElementById("tijdText").innerHTML = "Je had nog " + currentTime + " seconden over."
}

var timer

startButton.onclick = function() {
    if (gameState == "notStarted") {
        startGame()
    } else if (gameState == "started") {
        endGame()
    } else if (gameState == "stopped") {
        startGame()
    }
}

function setPlaatjes(aantalPlaatjes) {
    for (i = 0; i < aantalPlaatjes; i++) {
        var images = document.createElement('img')
    }
}