function perkalian(a,b){
    return a*b
}
function luasPersegi(sisi){
    const luas = perkalian(sisi,sisi)
    return luas;
}
console.log(luasPersegi(4))

function pertambahan(a,b){
    return a+b
}
function kelilingPersegiPanjang(panjang,lebar,callbackPerkalian,callbackPertambahan){
    let keliling = callbackPertambahan(panjang,lebar)
    return callbackPerkalian(keliling,2)
}
console.log("Hasil Keliling persegi : " + kelilingPersegiPanjang(10,5,perkalian,pertambahan))

function greeting(){
    return "Hello World"
} 
function tampilkan(callbackGreeting){
    let greeting = callbackGreeting()
    console.log('Tampilkan Pesan : ' + greeting)
}
//Closure
tampilkan(function(){
    return "Hello ini dari Closure"
})

