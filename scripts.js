console.log("script is running")
var i = 0
function submitGame(i) {
    var game = document.getElementById("game").value;
    var gameType = document.getElementById("gameType").value;
    
    if (game.length === 0) {
        var game = ("undefined")
    }

    if (gameType.length === 0) {
        var gameType = ("undefined")
    }
    
    var numGame = String(i)
    console.log(i)
    console.log(numGame)

    const gameTable = document.getElementById('gameTable')
    const newGame = document.createElement(`tr`)
    newGame.innerHTML = `<td>${game}</td>
                         <td id="${numGame}">${gameType}</td>`

    gameTable.appendChild(newGame)
    var i = (i++)
    return(i)
}

