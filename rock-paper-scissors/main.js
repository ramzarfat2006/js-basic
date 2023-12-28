function computerSelect(){
    let select = ["Batu","Gunting","Kertas"]
    let index = Math.floor(Math.random() * select.length)
    return select[index]
}

function winner(userSelect,computerSelect){
    if(userSelect === computerSelect){
        return "Seri"
    } else if (
        (userSelect === "gunting" && computerSelect === "kertas") ||
        (userSelect === "kertas" && computerSelect === "batu") ||
        (userSelect === "batu" && computerSelect === "gunting")
    ) {
        return "Pemain Menang"
    } else {
        return "Komputer Menang"
    }
}


function play(userSelect){
    const user = userSelect
    const computer = computerSelect()
    const result = winner(user,computer)
    console.log(`Pemain memilih : ${user}`)
    console.log(`Komputer memilih : ${computer}`)
    console.log(`Hasilnya : ${result}`)
}
play("batu")