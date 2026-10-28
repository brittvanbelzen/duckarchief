let welkom = document.querySelector("#welkom");

let duckplaatje = document.querySelector("#duckplaatje");

function veranderTitel() {
    if (welkom.innerHTML == "Welkom, speurneus!") {
        welkom.innerHTML = "Geheim dossier geopend!";
        welkom.style.color = "orange";
        duckplaatje.src = "img/donald-duck23.png";
    } else {
        welkom.innerHTML = "Welkom, speurneus!";
        welkom.style.color = "#332719";
        duckplaatje.src = "img/donald-duck-question-marks.png";
    }
}