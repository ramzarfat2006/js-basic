class CoffeShop {
    constructor(nama,menu){
        this.nama = nama
        this.menu = [menu]
    }
    getNama(){
        return this.nama
    }
    getMenu(){
        return this.menu
    }
}
const instanceCoffeShop = new CoffeShop("Gustea",["Signature Coffee","Milk Tea","Framboze Milk"])
console.log("Nama Toko : " + instanceCoffeShop.getNama())
console.log("Daftar Menu : " + instanceCoffeShop.getMenu())