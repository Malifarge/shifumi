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
let players = document.getElementsByClassName("player")
let playersArray=Array.from(players)
const Joueur = document.getElementById("Joueur")
const IA1= document.getElementById("IA1")
const IA2= document.getElementById("IA2")
const IA3= document.getElementById("IA3")
const IA4= document.getElementById("IA4")
const startCard = document.getElementsByClassName("startCard")
const startCardArray= Array.from(startCard)
const gameWinner = document.getElementById("gameWinner")
const newRound = document.getElementById("NewRound")
const newGame = document.getElementById("NewGame")
let nocount

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
    if (playerChoice==="ciseaux affich pointer startCard"){
        cardChoice.classList.add("ciseaux")
        playerCard="ciseaux"
    }else if (playerChoice==="feuille affich pointer startCard"){
        cardChoice.classList.add("feuille")
        playerCard = "feuille"
    }else if(playerChoice==="pierre affich pointer startCard"){
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
if (playerChoice==="random affich pointer startCard"){
    random()
    playerChoice=`${result} affich pointer`
}
cardIschoice()
startCardArray.forEach(element => {
    if (element.className==="ciseaux affich pointer startCard"){
        element.className="ciseau affich pointer startCard"
    } else if (element.className==="feuille affich pointer startCard"){
        element.className="feuill affich pointer startCard"
    }else if (element.className==="pierre affich pointer startCard"){
        element.className="pierr affich pointer startCard"
    }
});
 myInterval = setInterval(moveCard, 100);
}


// stop
const myStopFunction = () => {
    clearInterval(myInterval);
}

// Le jeu

const game = () =>{
    let suprfeuille
    let suprpierre
    let suprciseaux
    let ciseaux = document.getElementsByClassName("ciseaux")
    let ciseauxArray = Array.from(ciseaux)
    let feuille = document.getElementsByClassName("feuille")
    let feuilleArray = Array.from(feuille)
    let pierre = document.getElementsByClassName("pierre")
    let pierreArray = Array.from(pierre)
    const numberOfCiseaux = ciseauxArray.length
    const numberOfFeuille = feuilleArray.length
    const numberOfPierre = pierreArray.length
    if (numberOfCiseaux >  0 && numberOfFeuille > 0){
        ciseauxArray.forEach(element => {
            suprfeuille = Math.floor(Math.random()*numberOfFeuille)
            feuilleArray[suprfeuille].classList.remove("player")
            feuilleArray[suprfeuille].classList.add("supr")

        });
    }
    if (numberOfFeuille >  0 && numberOfPierre > 0){
        feuilleArray.forEach(element => {
            suprpierre = Math.floor(Math.random()*numberOfPierre)
            pierreArray[suprpierre].classList.remove("player")
            pierreArray[suprpierre].classList.add("supr")
        });
    }
    if (numberOfPierre > 0 && numberOfCiseaux > 0){
        pierreArray.forEach(element => {
            suprciseaux = Math.floor(Math.random()*numberOfCiseaux)
            ciseauxArray[suprciseaux].classList.remove("player")
            ciseauxArray[suprciseaux].classList.add("supr")
        });
    }

    const suprimé=document.getElementsByClassName("supr")
    const suprimArray=Array.from(suprimé)
    console.log(suprimArray);
    suprimArray.forEach(element => {
        element.classList.add("Naffich")
        element.classList.remove("affich")
    });

    players = document.getElementsByClassName("player")
    playersArray=Array.from(players)
    console.log(playersArray);
    if (playersArray.length ===0){
        gameWinner.classList.add("affich")
        gameWinner.classList.remove("Naffich")
        gameWinner.innerHTML= `<span class="FR affich">Personne ne gagne</span><span class="EN Naffich">Nobody win</span>`
    }
     else if (cardChoice.className==="pierre supr Naffich" ||cardChoice.className==="feuille supr Naffich"||cardChoice.className==="ciseaux supr Naffich") {
        gameWinner.classList.add("affich")
        gameWinner.classList.remove("Naffich")
        gameWinner.innerHTML= `<span class="FR affich">Tu as perdu</span><span class="EN Naffich">You loose</span>`
        newGame.classList.remove("Naffich")
        newGame.classList.add("affich")
    }else if (playersArray.length > 1){
        newRound.classList.remove("Naffich")
        newRound.classList.add("affich")
    }else{
        gameWinner.classList.add("affich")
        gameWinner.classList.remove("Naffich")
        gameWinner.innerHTML= `<span class="FR affich">Tu à gagner </span><span class="EN Naffich">You Win</span>`
        newGame.classList.remove("Naffich")
        newGame.classList.add("affich")
    }

}

// newRound

const Roundnew = () =>{
    returnCardItems = document.getElementsByClassName("Naffich2")
    returnCard = Array.from(returnCardItems)
    cardChoice.className="Naffich"
    iachoice.className="random affich"
    iachoice[0].classList.remove(iaClass)
    iachoice[1].classList.remove(iaClass2)
    iachoice[2].classList.remove(iaClass3)
    iachoice[3].classList.remove(iaClass4)
    iaClass="random"
    iaClass2="random"
    iaClass3="random"
    iaClass4="random"
    iachoice[0].classList.add(iaClass)
    iachoice[1].classList.add(iaClass2)
    iachoice[2].classList.add(iaClass3)
    iachoice[3].classList.add(iaClass4)
    returnCard.forEach(element => {
        element.classList.add("affich2")
        element.classList.remove("Naffich2")
    });
    newRound.classList.remove("affich")
    newRound.classList.add("Naffich")
    i=0
    startCardArray.forEach(element => {
    if (element.className==="ciseau affich pointer startCard"){
            element.className="ciseaux affich pointer startCard"
    } else if (element.className==="feuill affich pointer startCard"){
            element.className="feuille affich pointer startCard"
    }else if (element.className==="pierr affich pointer startCard"){
            element.className="pierre affich pointer startCard"
    }
    })
    nocount = document.getElementsByClassName("supr")
    nocount.forEach(element=>{
        element.className="nocount"
    })

}