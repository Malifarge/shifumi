// const et variables

const carditems = document.getElementsByClassName("affich2")
const card = Array.from(carditems)
const cardChoice = document.getElementById("resulta")
let playerChoice
let playerCard
let i=0
let iaClass="random"
let iaClass2="random"
let iaClass3="random"
let iaClass4="random"
const IA = document.getElementsByClassName("IA")
const iachoice = Array.from(IA)
const players = document.getElementsByClassName("player")
const playersArray=Array.from(players)
const Joueur = document.getElementById("Joueur")
const IA1= document.getElementById("IA1")
const IA2= document.getElementById("IA2")
const IA3= document.getElementById("IA3")
const IA4= document.getElementById("IA4")

// Random

const random = () => {
    const numbers = Math.floor(Math.random()*150)+1
    if (numbers <=50){
        result = "pierre"
    } else if (numbers >100){
        result = "ciseaux"
    } else {
        result = "feuille"
    }

    return result
}

// préparation jeu

const gamePrepare = () =>{
    card.forEach(element => {
        element.classList.add("Naffich2")
        element.classList.remove("affich2")
    });
}

// choix carte

const cardIschoice = () => {
    if (playerChoice==="ciseaux affich pointer"){
        cardChoice.classList.add("ciseaux")
        playerCard="ciseaux"
    }else if (playerChoice==="feuille affich pointer"){
        cardChoice.classList.add("feuille")
        playerCard = "feuille"
    }else if(playerChoice==="pierre affich pointer"){
        cardChoice.classList.add("pierre")
        playerCard="pierre"
    }
    return playerCard
}

// roulement

const moveCard = () =>{
    if (i<25){    
    
    iachoice[0].classList.remove(iaClass)
    iachoice[1].classList.remove(iaClass2)
    iachoice[2].classList.remove(iaClass3)
    iachoice[3].classList.remove(iaClass4)
    const resultArray = ["feuille","pierre","ciseaux"]
    iaClass=resultArray [Math.floor(Math.random()*3)]
    iaClass2=resultArray [Math.floor(Math.random()*3)]
    iaClass3=resultArray [Math.floor(Math.random()*3)]
    iaClass4=resultArray [Math.floor(Math.random()*3)]
    iachoice[0].classList.add(iaClass)
    iachoice[1].classList.add(iaClass2)
    iachoice[2].classList.add(iaClass3)
    iachoice[3].classList.add(iaClass4)
    i++
    } else{
        myStopFunction()
        game()
    }

}

// réglages roulement

// start

const moveCardStart = () =>{
gamePrepare()
playerChoice = event.target.className
cardChoice.classList.add("affich")
cardChoice.classList.remove("Naffich")
if (playerChoice==="random affich pointer"){
    random()
    playerChoice=`${result} affich pointer`
}
cardIschoice()
 myInterval = setInterval(moveCard, 100);
}


// stop
const myStopFunction = () => {
    clearInterval(myInterval);
}

// Le jeu

const game = () =>{

}