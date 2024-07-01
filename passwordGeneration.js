const button = document.querySelector("#generatePassButton");
button.addEventListener('click',generatePassword);
let lowercase = 'abcdefghijklmnopqrstuvwxyz';
function generatePassword(length){
    let password = "";
    for(let i = 0;i < 10;i++){
        let idx = Math.floor(Math.random()*lowercase.length)
        password += lowercase.charAt(idx);
    }
    console.log(password);
    return password;
}