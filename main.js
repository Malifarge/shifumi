
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
let result = ""
let scorePlayer = 0
let scoreIA=0
let start =0
let j = 0
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

const game = () =>{
    card.forEach(element => {
        element.classList.add("Naffich")
        element.classList.remove("affich2")
    });
}

// roulement de carte

const cardMove = (start,j) =>{
    console.log("hello");
    iachoice.classList.remove(start)
    const arrayresutl = ["feuille","pierre","ciseaux"]
    start = arrayresutl[j]
    iachoice.classList.add(start)
    if (j === 3){
        j = 0
    }  
}

// stop roulement

const stopMove = () =>{
    clearInterval(myInterval)
}

// si le choix est ciseaux 

const choiceScissors = () =>{
    game()
    cardChoice.classList.add("affich2")
    cardChoice.classList.add("ciseaux")
    cardChoice.classList.remove("Naffich")
    iachoice.classList.remove("random")
    iachoice.classList.add("pierre")
    random()
    if (result ==="feuille"){
        for (let i = 0; i <25;i++){
        myInterval = setInterval(cardMove, 500);
        }
        stopMove()
        iachoice.classList.add("feuille")
        console.log("feuille");
        scorePlayer ++
    }
    //  else if (result === "pierre"){
    //     iachoice.classList.remove("random")
    //     for (let i=0; i<25;i++){
    //         cardmove("feuille", 0)
    //         cardChoice.classList.add(`${start}`)
    //         setInterval(cardmove(start,j),1000)
    //     }
    //     iachoice.classList.add("pierre")
    //     console.log("pierre");
    //     scoreIA ++
    // } else {
    //     iachoice.classList.remove("random")
    //     for (let i=0; i<25;i++){
    //         cardmove("feuille", 0)
    //         cardChoice.classList.add(`${start}`)
    //         setInterval(cardmove(start,j),1000)
    //     }
    //     iachoice.classList.add("ciseaux")
    //     console.log("ciseaux");
    // }

    console.log(scorePlayer,scoreIA);

}
