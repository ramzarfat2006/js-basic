let tasks = []

//fungsi tambah tugas
function addTasks(task){
    tasks.push(task)
    console.log(`Tugas ${task} berhasil ditambahkan`)
}
addTasks("Belajar JS")
console.log(tasks)

//fungsi tampilkan semua tugas
function showTasks(){
    if(tasks.length === 0){
        console.log("Tidak ada tugas saat ini")
    } else {
        for(let i = 0; i < tasks.length; i++){
            console.log(`${i+1} ${tasks[i]}`)
        }
    }
}
showTasks()

//fungsi hapus tugas
function deleteTasks(index){
    if(index >= 0 && index < tasks.length){
        let hapus = tasks.splice(index,1)
        console.log(`Tugas ${hapus} berhasil dihapus`)
    } else {
        console.log("Index tugas tidak valid")
    }
}

//manggil fungsi tambah
addTasks("Study kasus javascript")
console.log("")
showTasks()
console.log("")
deleteTasks(0)