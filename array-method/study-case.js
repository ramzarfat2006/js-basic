const myHobbies = ['Ndelok Film','Ngegame']
const myFriends = ['Abiyansyah','Andrian','Dimas']
const myFavouriteFoods = ['Nasi Goreng','Mie Ayam','Bakso']
const myLanguage = ['Indonesia']

myHobbies.push('Ngoding','Musikan')
console.log(myHobbies.toString())

myFriends.push('Fito','Bambang')
console.log(myFriends.toString())

myFavouriteFoods.push('Ayam Goreng','Seblak')
console.log(myFavouriteFoods.toString())

myLanguage.push('Jawa','Inggris')
console.log(myLanguage.toString())

myHobbies.forEach(function(hobi){
    console.log(hobi)
})
myFriends.forEach(function(teman){
    console.log(teman)
})
myFavouriteFoods.forEach(function(makanan){
    console.log(makanan)
})
myLanguage.forEach(function(bahasa){
    console.log(bahasa)
})