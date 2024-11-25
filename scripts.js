console.log("script is running")

var rowList = [];
var collumList = [];
var content = ''

document.getElementById('fileInput')
.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        content = reader.result;
        fileInit()
    };

    reader.onerror = function () {
        console.error('Error reading the file');
    };

    reader.readAsText(file, 'utf-8');
});

function submitCollum() {
    const inputCollum = document.createElement(`tr`)
    for (let i = 0; i < rowList.length; i++) {
    var collum = document.getElementById("a" + i).value;
    console.log(collum)
    
        if (collum.length == "") {
            return
        }

    const baseTable = document.getElementById('baseTable')

    inputCollum.innerHTML += `<td id = "b${i}">${collum}</td>`
    baseTable.appendChild(inputCollum)
    }
    resetCollumField()
}

function submitRow() {
    const br = document.createElement("br");
    var row = document.getElementById("rowId").value;
    
        if (row === "") {
            return
        }

    const baseTableRow = document.getElementById('row')
    const newRow = document.createElement('th')
    newRow.innerHTML = `<th>${row}</th>`


    const baseTableCollum = document.getElementById("addCollum")
    var newCollum = document.createElement("input");
    newCollum.setAttribute(`type`, "text");
    newCollum.setAttribute(`placeholder`, `Add to ${row}`);
    newCollum.setAttribute(`id`, `a${rowList.length}`);
    newCollum.setAttribute(`action`, "javascript:resetField()")
    newCollum.setAttribute(`required`, "")
    console.log(newCollum)
    console.log(br)
    
    rowList.push(row);
    collumList.push("len");
    console.log(rowList)

    baseTableRow.appendChild(newRow)
    baseTableCollum.appendChild(newCollum)
    baseTableCollum.appendChild(br)
    resetRowField()
}

function resetRowField() {
    document.getElementById("rowId").value= "";
}

function resetCollumField() {
    for (let x = 0; x < rowList.length; x++) {
        document.getElementById("a" + x).value= "";
    }
}

function fileInit() {
    const tbody = document.getElementById('tbody')

    const baseTable = document.getElementById('baseTable')

    console.log(content)

    tbody.innerHTML += content
    console.log(tbody.innerHTML)
    baseTable.appendChild(tbody)
}
