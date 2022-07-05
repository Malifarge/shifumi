
// FR <-> EN

// Selection des élement
const FRitems = document.getElementsByClassName("FR")
const ENitems = document.getElementsByClassName("EN");

// récupération des tableau
const FR = Array.from(FRitems)
const EN = Array.from(ENitems)


// passage en anglais

const English = () =>{
    FR.forEach(element => {
        element.classList.add("Naffich")
        element.classList.remove("affich")
    });
    EN.forEach(element => {
        element.classList.add("affiche")
        element.classList.remove("Naffich")
    });
}

// passage en français

const Français = () =>{
    FR.forEach(element => {
        element.classList.add("affiche")
        element.classList.remove("Naffich")
    });
    EN.forEach(element => {
        element.classList.add("Naffich")
        element.classList.remove("affich")
    });
}


// préparation des constante et variable pour le jeu

const carditems = document.getElementsByClassName("affich2")
const card = Array.from(carditems)
const cardChoice = document.getElementById("resulta")
const iachoice = document.getElementById("IA")
let j = 0
let iaClass="pierre"
let playerChoice
let playerScore= 0
let iaScore = 0

// chiffre random

const random = () => {
    const numbers = Math.floor(Math.random()*150)+1
    if (numbers <=50){
        result = "pierre"
    } else if (numbers >100){
        result = "ciseaux"
    } else {
        result = "feuille"
    }

    return result, numbers


}

// preparation du jeu

const gamePrepare = () =>{
    card.forEach(element => {
        element.classList.add("Naffich")
        element.classList.remove("affich2")
    });
}

// roulement de carte

const moveCard = () =>{
    iachoice.classList.remove(iaClass)
    const resultArray = ["feuille","pierre","ciseaux"]
    iaClass=resultArray[j]
    if (j<2){
        j++
    }else{
        j =0
    }
    iachoice.classList.add(iaClass)
}

// réglages roulement

const myInterval = setInterval(moveCard, 500);

const myStopFunction = () => {
    clearInterval(myInterval);
  }

const game = () =>{
    playerChoice = event.target.className
    gamePrepare()
    myStopFunction()
    cardChoice.classList.add("affich")
    cardChoice.classList.remove("Naffich")
    if (playerChoice==="random affich pointer"){
        random()
        console.log(result);
        playerChoice=`${result} affich pointer`
    }
    console.log(playerChoice);
    if (playerChoice==="ciseaux affich pointer"){
        cardChoice.classList.add("ciseaux")
        if(iachoice.className==="affich pierre"){
            iaScore++
        }else if (iachoice.className==="affich feuille"){
            playerScore++
        }
    }else if (playerChoice==="feuille affich pointer"){
        cardChoice.classList.add("feuille")
        if (iachoice.className==="affich ciseaux"){
            iaScore++
        }else if (iachoice.className==="affich pierre"){
            playerScore++
        }
    }else if(playerChoice==="pierre affich pointer"){
        cardChoice.classList.add("pierre")
        if(iachoice.className==="affich feuille"){
            iaScore++
        }else if(iachoice.className==="affiche ciseaux"){
            playerScore++
        }
    }
    console.log(playerScore,iaScore);
}