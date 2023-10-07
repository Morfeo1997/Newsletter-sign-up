function emailValidation(){

    let main = document.querySelector('#main-container');
    let success = document.querySelector('#success');
    let email = document.querySelector('#email');
    let emailVal = email.value;
    let errorMessage = document.querySelector('#error');


    if (emailVal.trim() === ''){

        email.classList.add('emailError');
        errorMessage.classList.remove('hide');
        errorMessage.classList.add('show');
    }

    else{
        main.classList.remove('show');
        main.classList.add('hide');
        success.classList.remove('hide');
        success.classList.add('show');
    }
};

function dismiss(){
    let main = document.querySelector('#main-container');
    let success = document.querySelector('#success');


    main.classList.remove('hide');
    main.classList.add('show');

    success.classList.remove('show');
    success.classList.add('hide');
}