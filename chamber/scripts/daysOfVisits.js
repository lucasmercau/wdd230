const visitsDisplay = document.querySelector(".visits");
const msToDays = 84600000; // miliseconds in one day. Date.now() gives you the miliseconds of today in this exact moment.

let dayVisit = localStorage.getItem("dayVisit-key");

if (dayVisit) {
    let daysOfDifference = (Date.now() - dayVisit) / msToDays;

    if (daysOfDifference < 1)
    {
        visitsDisplay.textContent = `Back so soon! Awesome!`;
    } else {
        if (daysOfDifference.toFixed(0) == 1) {
            visitsDisplay.textContent = `You last visited ${daysOfDifference.toFixed(0)} day ago.`;
        } else {
            visitsDisplay.textContent = `You last visited ${daysOfDifference.toFixed(0)} days ago.`;
        }    
    }
    
} else {
    visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
}

localStorage.setItem("dayVisit-key", Date.now());