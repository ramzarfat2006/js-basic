// Dalam Javascript akrab dikenal dengan "Everything is object"

// Method adalah suatu blok kode yang terikat dengan object
// Function adalah suatu blok kode untuk menjalankan suatu tugas tanpa terikat dengan object.

// Function 
function akuFunction() {
    return "Aku adalah function"
}

// Method 
// console -> object
// log -> method
console.log("Hello world!")

// Method declaration 
// Pertama kita akan membuat sebuah object terlebih dahulu.
const kucing = {
    bulu: "Putih",
    ras: "Anggora",
    mata: "Kebiru-biruan",
    jumlahAnak: 3,
    bunyi: function() {
        console.log("Meow meow ~")
    },
    bertarung() {
        return "GRAWRR!!!!"
    }

}

// Memanggil method bunyi()
kucing.bunyi()

const suaraBertarung = kucing.bertarung()
console.log(suaraBertarung)