
const clock = document.getElementById("clock")

const displayTime = () =>{
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    let time = `${hours}:${minutes}:${seconds}`
    if(hours < 12){
        time +=  " AM"
    }else{
        time += " PM"
    }
    clock.innerHTML = time;
    setTimeout(displayTime, 1000);
}

displayTime();

