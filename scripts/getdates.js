document.getElementById("lastmodified").innerHTML = `Last Modified On: ${document.lastModified}`;
const today = new Date();
const year = today.getFullYear();
document.getElementById("currentyear").textContent = year;