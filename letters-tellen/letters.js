let array_letters = ["a", "g", "z", "z", "b", "c", "e", "z", "e", "y", "y", "z", "z", "z"];
array_letters.sort();

function tel_alle_letters() {
    let resultaatDiv = document.getElementById("div_result");
    resultaatDiv.innerHTML = "";
    let output = "<strong>In totaal zitten er " + array_letters.length + " letters in de array.</strong><br><br>";

    let telling = {};
    for (let i = 0; i < array_letters.length; i++) {
        let huidigeLetter = array_letters[i];
        if (telling[huidigeLetter]) {
            telling[huidigeLetter]++;
        } else {
            telling[huidigeLetter] = 1;
        }
    }

    for (let key in telling) {
        output += "De letter '" + key + "' komt " + telling[key] + " keer voor.<br>";
    }

    resultaatDiv.innerHTML = output;
}

function tel_letters(letter) {
    let resultaatDiv = document.getElementById("div_result");
    resultaatDiv.innerHTML = "";

    if (letter === "") {
        resultaatDiv.innerHTML = "<i>Klik op een knop of type een letter in het zoekvak om te beginnen</i>";
    } else {

        let zoekLetter = letter.toLowerCase();
        let teller = 0;

        for (let i = 0; i < array_letters.length; i++) {
            if (array_letters[i] === zoekLetter) {
                teller++;
            }
        }

        resultaatDiv.innerHTML = "De letter '<strong>" + zoekLetter + "</strong>' komt <strong>" + teller + "</strong> keer voor in de array.";
    }
}