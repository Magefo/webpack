// import moment from 'moment';
import './style.css';

var nameInputEl = document.getElementById('name-input');
var nameOutputEl = document.getElementById('name-output');

nameInputEl.addEventListener('input', function(event) {
    // var formatedDate = moment(event.target.value).format('MMMM Do YYYY');
    nameOutputEl.innerHTML = event.target.value; // formatedDate;
});
