
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

//   jeu

const game = () =>{
    playerChoice = event.target.className
    gamePrepare()
    myStopFunction()
    cardChoice.classList.add("affich")
    cardChoice.classList.remove("Naffich")
    if (playerChoice==="random affich pointer"){
        random()
        playerChoice=`${result} affich pointer`
    }
    if (playerChoice==="ciseaux affich pointer"){
        cardChoice.classList.add("ciseaux")
        playerCard="ciseaux"
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
    }else if (playerChoice==="feuille affich pointer"){
        cardChoice.classList.add("feuille")
        playerCard = "feuille"
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
    }else if(playerChoice==="pierre affich pointer"){
        cardChoice.classList.add("pierre")
        playerCard="pierre"
        if(iachoice.className==="affich feuille"){
            iaScore++
            roundWinner="IA"
            iaCard="feuille"
        }else if(iachoice.className==="affiche ciseaux"){
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
        gameWinner.innerHTML=`${winner} <span class="EN Naffich">Win</span><span class="FR affich">Gagne</span> `
    }

}