let tabulka;


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

    let tr = document.createElement("tr");
    tabulka.appendChild(tr);

    let td = document.createElement("td");
    let tdinput = document.createElement("input");
    tdinput.type = "text";
    tr.appendChild(td);
    td.appendChild(tdinput);

    let td1 = document.createElement("td");
    let tdinput1 = document.createElement("input");
    tdinput1.type = "text";
    tr.appendChild(td1);
    td1.appendChild(tdinput1);





}

window.onload = function () {
    vytvorVychoziTabulku();
}
