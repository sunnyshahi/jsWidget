const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let currentDate = new Date();
let hourPosition = currentDate.getHours()*360/12 + (currentDate.getMinutes()* (360/12)/60);
let minutePosition = currentDate.getMinutes()*360/60 + (currentDate.getSeconds()*(360/60)/60);
let secPosition = currentDate.getSeconds()*360/60;


function runTheClock(){
    hourPosition = hourPosition + (3/360);
    minutePosition = minutePosition + (6/60);
    secPosition = secPosition + 6;

    HOURHAND.style.transform = "rotate("+hourPosition+"deg)";
    MINUTEHAND.style.transform = "rotate("+minutePosition+"deg)";
    SECONDHAND.style.transform = "rotate("+secPosition+"deg)";
}

setInterval(runTheClock,1000);