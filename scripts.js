console.log("script is running")
var i = 0
function submitGame(i) {
    var game = document.getElementById("gameId").value;
    var gameType = document.getElementById("gameTypeId").value;
    
        if (game === "") {
            return
        }

        if (gameType.length === "") {
            return
        }
    
    console.log(i)

    const gameTable = document.getElementById('gameTable')
    const newGame = document.createElement(`tr`)
    newGame.innerHTML = `<td>${game}</td>
                         <td>${gameType}</td>`

    gameTable.appendChild(newGame)
    var i = (i++)
    return(i)
}