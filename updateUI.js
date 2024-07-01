const slider = document.querySelector("#slider");
const sliderText = document.querySelector("#sliderVal");

const field = document.querySelector("#passwordText");

const lowercaseCheckbox = document.querySelector("#box0");
const uppercaseCheckbox = document.querySelector("#box1");
const numbersCheckbox = document.querySelector("#box2");
const symbolsCheckbox = document.querySelector("#box3");


slider.addEventListener('input',() => {
sliderText.innerHTML = slider.value;
})

const button = document.querySelector("#generatePassButton");
button.addEventListener('click',() => {
    if(!checkForValidInput())
        alert('You need to check atleast one checkbox!')
    else
        field.value = generatePassword(slider.value);
});

function checkForValidInput(){
    //jwtx3k8mcvxtew
    return  lowercaseCheckbox.checked ||
            uppercaseCheckbox.checked ||
            numbersCheckbox.checked ||
            symbolsCheckbox.checked;
}

function isCheckboxTrue(id){
switch(id){
    case 0:
        return lowercaseCheckbox.checked;
    case 1:
        return uppercaseCheckbox.checked;
    case 2:
        return numbersCheckbox.checked;
    case 3:
        return symbolsCheckbox.checked;
}
}