let clock = document.getElementById('clock')

function Clock(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2,0);
    const meridium = hours >= 12 ? "PM" : "AM"
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridium}`
    clock.textContent = timeString;
}

Clock();
setInterval(Clock,1000);