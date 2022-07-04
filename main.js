
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