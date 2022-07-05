
// FR <-> EN

// Selection des élement
let FRitems
let ENitems 

// récupération des tableau
let FR
let EN


// passage en anglais

const English = () =>{
    FRitems = document.getElementsByClassName("FR")
    ENitems = document.getElementsByClassName("EN");
    FR = Array.from(FRitems)
    EN = Array.from(ENitems)
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
    FRitems = document.getElementsByClassName("FR")
    ENitems = document.getElementsByClassName("EN");
    FR = Array.from(FRitems)
    EN = Array.from(ENitems)
    FR.forEach(element => {
        element.classList.add("affiche")
        element.classList.remove("Naffich")
    });
    EN.forEach(element => {
        element.classList.add("Naffich")
        element.classList.remove("affich")
    });
}
