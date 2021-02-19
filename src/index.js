// import moment from 'moment';
import "./style.css";

const nameInputEl = document.getElementById("name-input");
const nameOutputEl = document.getElementById("name-output");

nameInputEl.addEventListener(
  "input",
  (event) =>
    // var formatedDate = moment(event.target.value).format('MMMM Do YYYY');
    (nameOutputEl.innerHTML = event.target.value) // formatedDate;
);

const delay = async (time) => await new Promise((resolve) => setTimeout(() => resolve(), time));

delay(3000).then(() => alert('Hola Miguel'));