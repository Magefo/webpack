// import moment from 'moment';
import './style.css';

const nameInputEl = document.getElementById('name-input');
const nameOutputEl = document.getElementById('name-output');

nameInputEl.addEventListener('input', event => 
    // var formatedDate = moment(event.target.value).format('MMMM Do YYYY');
    nameOutputEl.innerHTML = event.target.value // formatedDate;
);
