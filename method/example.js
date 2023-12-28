// Mengenal keyword "this".
const cat = {
    name: "Tobi",
    fur: "Black",
    sibling: 3,
    food: ['Fish', 'Meat', 'Whiskas'],
    getName() {
        return "Nama Kucing adalah " + this.name
    }
}

const namaKucing = cat.getName()
console.log(namaKucing)