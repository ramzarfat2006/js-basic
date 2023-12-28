const tiger = {
    name: "Daniel",
    fur: "Orange",
    food: ["Raw Chicken Meat","Beef"],
    getFood(){
        return "Daniel Likes " + this.food
    }
}

const eagle = {
    name: "Falcone",
    fur: "Red",
    food: ["meat","nuts"],
    voice: function(){
        console.log("EEEAAAAKKKK") 
    }
}

const uniqueNumber = {
    n: [3,7,5,15,13,2,30,27,45],
    multipleOfFife(){
        if(n % 5 === 0){
            return "Kelipatan Lima"
        } else {
            return "Bukan Kelipatan Lima"
        }
    }
}

console.log(tiger.getFood())
eagle.voice()
console.log(uniqueNumber.multipleOfFive(5))