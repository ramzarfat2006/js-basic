function f1(){
    setTimeout(function(){
        console.log("Aku asynchronous!...")
    },3000)
}

function f2(){
    setTimeout(function(){
        console.log("Panggil Aku!...")
    },3000)
}

function f3(){
    setTimeout(function(){
        console.log("Aku ketiga!...")
    })
}

f1()
f2()
f3()
