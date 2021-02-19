import moment from 'moment';

var nameInputEl = document.getElementById('name-input');
var nameOutputEl = document.getElementById('name-output');

nameInputEl.addEventListener('input', function(event) {
    var formatedDate = moment(event.target.value).format('MMMM Do YYYY');
    nameOutputEl.innerHTML = formatedDate;
});
