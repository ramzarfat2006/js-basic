let binatang = ["Kancil","Bangau","Kelinci"]

function hapus(index,total){
    return binatang.splice(index,total)
}
hapus(1,1)
console.log(binatang)
