/* Footer JS Code */
document.getElementById(
  "lastmodified"
).innerHTML = `Last Modified On: ${document.lastModified}`;
const today = new Date();
const year = today.getFullYear();
document.getElementById("currentyear").textContent = year;

const mainnav = document.querySelector("#nav-menu");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
  mainnav.classList.toggle("open");
  hambutton.classList.toggle("open");
});
