// daftar belanja
/*
-tambah item
-hapus item
-tampilkan item
*/

let shoppingList = []

// function tambah item
const addItem = (itemName) => {
    const toUpperCase = itemName.toUpperCase()
    shoppingList.push(toUpperCase)
    console.group(`${itemName} telah ditambahkan`)
}

// function hapus item
const deleteItem = (item) => {
    const toUpperCase = item.toUpperCase()
    const deleteIndex = shoppingList.indexOf(toUpperCase)
    shoppingList.splice(deleteIndex, 1)
    console.log(`${item} berhasil dihapus`)
}

//function tampilkan item
const showItem = () => {
    shoppingList.forEach((item,index) =>{
        console.log(`${index + 1}. ${item}`)
    })
}
addItem("makan")
showItem()
deleteItem("makan")
showItem()