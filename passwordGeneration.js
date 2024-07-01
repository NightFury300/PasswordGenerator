let lowercase = 'abcdefghijklmnopqrstuvwxyz';
let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numbers = '0123456789';
let symbols = `!@#$%^&*()_{[}]|`;
console.log(symbols)
function generatePassword(length){
    let password = "";
    for(let i = 0;i < length;i++){
        password += generateRandomCharacter();
    }
    return password;
}

function isAllowed(type){
    return isCheckboxTrue(type);
}

function generateRandomCharacter(){
    let type = -1;
    while(!isAllowed(type)){
        type = Math.floor(Math.random() * 4);
    }
    switch(type){
        case 0:
            return lowercase.charAt(Math.floor(Math.random()*lowercase.length));
        case 1:
            return uppercase.charAt(Math.floor(Math.random()*uppercase.length));
        case 2:
            return numbers.charAt(Math.floor(Math.random()*numbers.length));
        case 3:
            return symbols.charAt(Math.floor(Math.random()*symbols.length));
    }
}