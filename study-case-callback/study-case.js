// Callback Function
function callbackFunction(data) {
    console.log("Perkenalkan Nama Saya : " + data);
}

// Function with Callback
function performTask(callback) {
    let result = "Ramzi Arfan Fatiha";
    callback(result);
}
performTask(callbackFunction);

// Closure Function
function createClosure(UmurHanyalahAngka) {
    let umur = UmurHanyalahAngka;

    function closureFunction() {
        console.log("Saya Berumur : " + umur);
    }

    return closureFunction;
}

let myClosure = createClosure(17);

myClosure();
