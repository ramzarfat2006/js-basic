function computer(){
    let select = ["Batu","Gunting","Kertas"]
    let index = Math.floor(Math.random() * select.length)
    return select[index]
}

function winner(player1,player2){
    if(player1 === player2){
        return seri
    } else if (
        (player1 === "gunting" && player2 === "batu") ||
        (player1 === "kertas" && player2 === "gunting") ||
        (player1 === "batu" && player2 === "kertas")
    ) {
        return "Pemain Menang"
    } else {
        return "Computer Menang"
    }
}


function play(main){
    let user = main
    let computer = computer()
    let result = winner(user,computer)
    console.log(`Pemain memilih ${user}`)
}