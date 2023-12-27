function kali(a,b){
    if(b === undefined){
        b = 5
    }
    return a*b
}
console.log(kali(10))

function menyapa(nama){
    if(nama === undefined){
        nama = "Joko Susilo"
    }
    return nama
}
console.log("Hai, Selamat Siang " + menyapa())

// buat 3 function parameter opsional
// kalau opsional parameter tidak diisi maka return nilai default
// sedangkan kalau opsional parameter diisi, maka yang direturn adalah nilai parameter