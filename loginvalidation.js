const myForm = document.querySelector('#my-form')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const passwordInput = document.querySelector('#password')

// const myForm = document.querySelector('#my-form')

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    if(emailInput.value === '' || passwordInput.value === '') {
        console.log(emailInput);

        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        
        setTimeout(() => msg.classList.add('error-none'), 3000);
        msg.classList.remove('error-none');
        msg.classList.add('error');

    } else {
        console.log('Success');

        emailInput.value = '';
        passwordInput.value = '';
        window.open("http://127.0.0.1:5500/index.html")
    }
}