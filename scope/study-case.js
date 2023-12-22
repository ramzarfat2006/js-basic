// ubah ke local scope
function MyAnimal(param){
    const hewan = "Hewan Kesukaan Saya Adalah : " + param
    return hewan
}
console.log(MyAnimal("Kucing"))

//ubah ke global scope
const age = 17

function MyAge(){
    return age
}
console.log(MyAge())
//ubah ke block scope
function orderCheck(param){
    let order
    if(param > 0){
        order = "Pesanan sedang diproses"
        console.log(order)
    } else {
        order = "Pesanan Kosong"
        console.log(order)
    }
}
orderCheck(1)