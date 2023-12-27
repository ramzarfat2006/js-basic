function pembagian(x,y){
    if(y === undefined){
        y = 10
    }
    return x/y
}
console.log(pembagian(200))

function pertambahan(a,b){
    if(b === undefined){
        b = 90
    }
    return a+b
}
console.log(pertambahan(230))

function alamat(rumah){
    if(rumah === undefined){
        rumah = "Palur, Mojolaban, Sukoharjo"
    }
    return rumah
}
console.log("Saya Tinggal di " + alamat())