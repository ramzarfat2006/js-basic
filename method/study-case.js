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
    result: [],
    multipleOfFive(){
        let arr = this.n
        for(let i = 0; i <= this.n.length; i++){
            if(arr[i] % 5 === 0){
                this.result.push(arr[i])
            }
        }
        return this.result
    }
}

console.log(tiger.getFood())
eagle.voice()
console.log(uniqueNumber.multipleOfFive())