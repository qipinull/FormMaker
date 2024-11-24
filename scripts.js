console.log("script is running")

var rowList = [];
collumList = [];

function submitCollum() {
    const inputCollum = document.createElement(`tr`)
    for (let i = 0; i < rowList.length; i++) {
    var collum = document.getElementById("c" + i).value;
    console.log(collum)
    
        if (collum.length == "") {
            return
        }

    const gameTable = document.getElementById('gameTable')

    inputCollum.innerHTML += `<td id = "${rowList.length}">${collum}</td>`
    gameTable.appendChild(inputCollum)
    }
    resetCollumField()
}

function submitRow() {
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
    newCollum.setAttribute(`type`, "text");
    newCollum.setAttribute(`placeholder`, `Add to ${row}`);
    newCollum.setAttribute(`id`, `c${rowList.length}`);
    newCollum.setAttribute(`action`, "javascript:resetField()")
    newCollum.setAttribute(`required`, "")
    console.log(newCollum)
    console.log(br)
    
    rowList.push(row);
    collumList.push("len");
    console.log(rowList)

    gameTableRow.appendChild(newRow)
    gameTableCollum.appendChild(newCollum)
    gameTableCollum.appendChild(br)
    resetRowField()
}

function resetRowField() {
    document.getElementById("rowId").value= "";
}

function resetCollumField() {
    for (let x = 0; x < rowList.length; x++) {
        document.getElementById("c" + x).value= "";
    }
}    