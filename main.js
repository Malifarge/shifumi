
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
let i = 0
let j = 0
let iaClass="random"
let playerChoice
let playerScore= 0
let iaScore = 0
const scorePlayer=document.getElementById("playerscore")
const scoreIa=document.getElementById("iascore")
let roundWinner
let winner
const rounds = document.getElementById("history")
let roundsNumber = 1
let iaCard
let playerCard
const newRound = document.getElementById("NewRound")
const newGame = document.getElementById("NewGame")
const  gameWinner = document.getElementById("gameWinner")
let returnCardItems
let returnCard
let myInterval

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
        element.classList.add("Naffich2")
        element.classList.remove("affich2")
    });
}

// roulement de carte

const moveCard = () =>{
    if (i<25){    
    iachoice.classList.remove(iaClass)
    const resultArray = ["feuille","pierre","ciseaux"]
    iaClass=resultArray[j]
    if (j<2){
        j++
    }else{
        j =0
    }
    iachoice.classList.add(iaClass)
    i++
    } else{
        myStopFunction()
        game()
    }

}
//  choix de la carte

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

//   jeu

const game = () =>{
    
    if (playerCard==="ciseaux"){
        
        if(iachoice.className==="affich pierre"){
            iaScore++
            roundWinner="IA"
            iaCard="pierre"
        }else if (iachoice.className==="affich feuille"){
            playerScore++
            roundWinner="Player/Joueur"
            iaCard="feuille"
        }else{
            roundWinner="Nobody/Personne"
            iaCard="ciseaux"
        }
    }else if (playerCard==="feuille"){

        if (iachoice.className==="affich ciseaux"){
            iaScore++
            roundWinner="IA"
            iaCard="ciseaux"
        }else if (iachoice.className==="affich pierre"){
            playerScore++
            roundWinner="Player/Joueur"
            iaCard="pierre"
        }else{
            roundWinner="Nobody/Personne"
            iaCard="feuille"
        }
    }else if(playerCard==="pierre"){
        if(iachoice.className==="affich feuille"){
            iaScore++
            roundWinner="IA"
            iaCard="feuille"
        }else if(iachoice.className==="affich ciseaux"){
            playerScore++
            roundWinner="Player/Joueur"
            iaCard="ciseaux"
        }else{
            roundWinner="Nobody/Personne"
            iaCard="pierre"
        }
    }
    scorePlayer.textContent = `${playerScore}`
    scoreIa.textContent = `${iaScore}`

    rounds.innerHTML += `
    <div>
        <h3>Round ${roundsNumber}</h3>
        
        <p> <span class="EN Naffich">Player  : ${playerCard}</span> <span class="FR affich">Joueur  : ${playerCard}</span></p>
        <p> IA : ${iaCard}</p>
        <br>
        <p><span class="EN Naffich">${roundWinner} Win</span> <span class="FR affich">${roundWinner} gagne</span></p>
    </div>
    `
    roundsNumber++

    if (playerScore>iaScore ){
        winner="Player/Joueur"
    }else{
        winner="IA"
    }

    if (playerScore < 3 && iaScore < 3){
        newRound.classList.remove("Naffich")
        newRound.classList.add("affich")
    } else {
        newGame.classList.remove("Naffich")
        newGame.classList.add("affich")
        gameWinner.classList.remove("Naffich")
        gameWinner.classList.add("affich")
        gameWinner.innerHTML=`<span class="EN Naffich Win">${winner} Win</span><span class="FR affich Win">${winner} Gagne</span> `
    }

}

// nouveau round

const Roundnew = () =>{
    returnCardItems = document.getElementsByClassName("Naffich2")
    returnCard = Array.from(returnCardItems)
    cardChoice.className="Naffich"
    iachoice.className="pierre affich"
    returnCard.forEach(element => {
        element.classList.add("affich2")
        element.classList.remove("Naffich2")
    });
    newRound.classList.remove("affich")
    newRound.classList.add("Naffich")
    i=0
}

// nouvelle partie

const reset = () =>{
    Roundnew()
    playerScore= 0
    iaScore = 0
    scorePlayer.textContent = `${playerScore}`
    scoreIa.textContent = `${iaScore}`
    rounds.innerHTML=""
    newGame.classList.remove("affich")
    newGame.classList.add("Naffich")
    gameWinner.innerHTML=""
    gameWinner.classList.remove("affich")
    gameWinner.classList.add("Naffich")
    roundsNumber = 1

}