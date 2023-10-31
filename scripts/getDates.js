let currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
};

const lastModification = new Date(document.lastModified);
let formattedDate = lastModification.toLocaleString("en-Us", options);
formattedDate = formattedDate.replace(',', '');

document.getElementById("lastModified").textContent = `Last Modification: ${formattedDate}`;