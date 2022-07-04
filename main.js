
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

// chiffre random

const random = () => {
    let result = ""
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

let scorePlayer = 0
let scoreIA=0

const game = () =>{
    const card = document.getElementsByClassName("affich2")
    card.classList.add("Naffich")
    card.classList.remove("affich2")
}

// roulement de carte

const cardmove = (start,j) =>{
    iachoice.remove(`${start}`)
    const arrayresutl = ["feuille","pierre","ciseaux"]
    start = arrayresutl[i]
    j++
    return start
}

// si le choix est ciseaux 

const choiceScissors = () =>{
    const cardChoice = document.getElementById("resulta")
    const iachoice = document.getElementsById("IA")
    game()
    cardChoice.classList.add("affich2")
    cardChoice.classList.add("ciseaux")
    cardChoice.classList.remove("Naffich")
    random()
    if (result ==="feuille"){
        iachoice.classList.remove("random")
        for (let i=0; i<25;i++){
            cardmove("feuille", 0)
            cardChoice.classList.add(`${start}`)
            setInterval(cardmove,1000)
        }
        iachoice.classList.add("feuille")
        scorePlayer ++
    } else if (result === "pierre"){
        iachoice.classList.remove("random")
        for (let i=0; i<25;i++){
            cardmove("feuille", 0)
            cardChoice.classList.add(`${start}`)
            setInterval(cardmove,1000)
        }
        iachoice.classList.add("pierre")
        scoreIA ++
    } else {
        iachoice.classList.remove("random")
        for (let i=0; i<25;i++){
            cardmove("feuille", 0)
            cardChoice.classList.add(`${start}`)
            setInterval(cardmove,1000)
        }
        iachoice.classList.add("ciseaux")
    }
}