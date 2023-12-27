function searchAnimal(cari){
    const data = ['Elephant','Cat','Dog','Duck','Eagle','Crocodile']
    let hasil = ''

    if(cari === undefined){
        return data
    }

    for(let i = 0; i < data.length; i++){
        if(data[i] === cari){
            hasil = data[i]
        } else {
            hasil = 'Tidak Ditemukan'
        }
    }
    return hasil
}
console.log(searchAnimal('Crocodile'))
console.log(searchAnimal('Kucing'))
console.log(searchAnimal())
