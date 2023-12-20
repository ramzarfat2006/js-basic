// Local scope
function greeting(param){
    const greet = "Selamat Datang " + param
    return greet
}
console.log(greeting("Ramzi"))

//Global scope
const Namaku = "Ramzi"

function namamu(){
    return Namaku
}

console.log(namamu())
console.log("Nama Saya Adalah " + Namaku)
//Block scope
if (1 === 1){
    const isTrue = "Itu Benar"
    console.log(isTrue)
} else {
    const isTrue = "Maaf itu Salah"
    console.log(isTrue)
}

function MakananFavorit(panganan){
    if (panganan === "Bakso"){
        const favorit = "Ini adalah makanan kesukaan saya"
        console.log(favorit)
    } else {
        const favorit = "Ini bukan makanan kesukaan saya"
        console.log(favorit)
    }
}
MakananFavorit("Bakso")