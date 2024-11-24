console.log("script is running")

var rowList = [];

function submitCollum() {
    const inputCollum = document.createElement(`tr`)
    for (let i = 0; i < rowList.length; i++) {
    var collum = document.getElementById(rowList[i]).value;
    
        if (collum.length == "") {
            return
        }

    const gameTable = document.getElementById('gameTable')

    inputCollum.innerHTML += `<td>${collum}</td>`
    gameTable.appendChild(inputCollum)
    }
}

function submitCollumRow() {
    const br = document.createElement("br");
    var row = document.getElementById("rowId").value;
    
        if (row === "") {
            return
        }

    const gameTableRow = document.getElementById('row')
    const newRow = document.createElement('th')
    newRow.innerHTML = `<th>${row}</th>`


    const gameTableCollum = document.getElementById("addCollum")
    var newCollum = document.createElement("input");
    newCollum.setAttribute("type", "text");
    newCollum.setAttribute(`placeholder`, `Add to ${row}`);
    newCollum.setAttribute(`id`, row);
    console.log(newCollum)
    console.log(br)
    
    rowList.push(row);
    console.log(rowList)

    gameTableRow.appendChild(newRow)
    gameTableCollum.appendChild(newCollum)
    gameTableCollum.appendChild(br)
}