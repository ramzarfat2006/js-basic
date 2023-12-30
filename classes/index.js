class Kucing {
    constructor (jenis,warna_bulu){
        this.jenis = jenis
        this.warna_bulu = warna_bulu
    }
    getJenis(){
        return this.jenis
    }
}
const instanceKucing = new Kucing("Garong","Oyen")
console.log("Jenis Kucingnya adalah " + instanceKucing.getJenis())

