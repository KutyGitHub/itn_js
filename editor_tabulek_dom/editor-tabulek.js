let tabulka;
let vychoziVelikostX = 5;
let vychoziVelikostY = 3;


let aktivniBunka;

function vytvorBunku() {
    let td = document.createElement("td");

    let tdInput = document.createElement("input");

    tdInput.type = "text";
    tdInput.onfocus = function () {
        aktivniBunka = this;
    }
    td.appendChild(tdInput);

    return td;
}


function vytvorVychoziTabulku() {
    tabulka = document.createElement("table");
    document.body.appendChild(tabulka);
    for (let y = 0; y < vychoziVelikostY; y++) {
        let tr = document.createElement("tr");
        tabulka.appendChild(tr);

        for (let x = 0; x < vychoziVelikostX; x++) {
            tr.appendChild(vytvorBunku());
        }
    }
}

window.onload = function () {
    vytvorVychoziTabulku();
}
