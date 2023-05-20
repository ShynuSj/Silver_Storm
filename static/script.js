let imageContainer = document.querySelector(".logo-img");
let imagenav = document.querySelector(".navbar-brand");
let setDate = document.querySelector(".setdate");
let setdateTo = document.querySelector(".setdateto");

// const card = document.querySelector('.card');
// const cardBody = card.querySelector('.card-body');
// const cardText = card.querySelector('.card-text');

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const now = new Date();
// const options = {
//   hour: "numeric",
//   minute: "numeric",
//   day: "numeric",
//   month: "numeric",
//   year: "numeric",
//   // weekday: "long",
// };

// const locale = navigator.language;
// console.log(locale)

let dateS = new Date();
const options = { weekday: "long" };
const weekday = dateS.toLocaleString("en-UK", options);

let date = Number(dateS.getDate().toFixed(0, 2));
let month = Number(dateS.getMonth().toFixed(0, 2));
let year = dateS.getFullYear();
let day = Number(dateS.getDay());
let tomorrow = new Date(date / month +1 / year);
const toMweekday = tomorrow.toLocaleString("en-UK", options);
const dayName = daysOfWeek[day];
setDate.textContent = `${date}/${month +1}/${year}  ${weekday}`;
setdateTo.textContent = `${date }/${month +1}/${year}  ${toMweekday}`;

function checkScreenWidth() {
  let screenWidth = window.innerWidth;

  if (screenWidth <= 960) {
    imageContainer.style.display = "none";
    imagenav.style.display = "block";
  } else {
    imageContainer.style.display = "block";
    imagenav.style.display = "none";
  }
}

window.addEventListener("resize", checkScreenWidth);
checkScreenWidth();

function redirectToBookingPage() {
  // Redirect to the booking page
  window.location.href = "booking.html";
}
