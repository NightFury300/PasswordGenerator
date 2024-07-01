const slider = document.querySelector("#slider");
const sliderText = document.querySelector("#sliderVal");

const field = document.querySelector("#passwordText");

const lowercaseCheckbox = document.querySelector("#box0");
const uppercaseCheckbox = document.querySelector("#box1");
const numbersCheckbox = document.querySelector("#box2");
const symbolsCheckbox = document.querySelector("#box3");

const copyButton = document.querySelector('#copyButton');

slider.addEventListener('input',() => {
sliderText.innerHTML = slider.value;
})

copyButton.addEventListener('click',() => {
    copyToClipboard();
})

function copyToClipboard(){
    if(field.value == "")
        alert("No Password generated");
    else{
        navigator.clipboard.writeText(field.value);
        copyButton.classList.add("copied");
        copyButton.textContent = "Copied!"
        setTimeout(() => {
            copyButton.classList.remove("copied")
            copyButton.textContent = "Copy"
        },1500)
    }
}

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