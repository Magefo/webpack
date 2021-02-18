console.log('hola');

var nameInputEl = document.getElementById('name-input');
var nameOutputEl = document.getElementById('name-output');

nameInputEl.addEventListener('input', function(event) {
    nameOutputEl.innerHTML = event.target.value;
})