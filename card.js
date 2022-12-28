const form = document.getElementById('form');
const name = document.getElementById('name');
const cardno = document.getElementById('cardno');

form.addEventListener('submit', (e) => {
    e.preventDefault();

   checkInputs();
});

function checkInputs() {
    const nameValue = name.value.trim();
    const cardnoValue = cardno.value.trim();

    if(nameValue === '') {

        setErrorFor (name, 'can not be blank');

    } else{
        setSuccessFor (name);

    }

}
function setErrorFor(input, message) {

}
function setSuccessFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

   formControl.className = 'form-control error';
}