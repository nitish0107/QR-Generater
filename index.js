let getinput= document.querySelector(".input");
let p = document.querySelector(".p");
function generateqr(){
    let qrapj = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
    
    p.innerHTML= p.src=qrapj + getinput.value;
}