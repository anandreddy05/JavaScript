
let count = 0
document.getElementById("increase").onclick = (()=>{
    count++;
    document.getElementById("myCount").textContent = count;
})
document.getElementById("decrease").onclick = (()=>{
    count--;
    document.getElementById("myCount").textContent = count
})
document.getElementById("reset").onclick = (()=>{
    count = 0
    document.getElementById("myCount").textContent = 0
})