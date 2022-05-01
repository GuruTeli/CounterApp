let id=document.getElementById('bodyColor');

let button=document.getElementById('buttonEl');

button.addEventListener('click',()=>{

    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
   id.style.backgroundColor=`#${randColor.toUpperCase()}`;
})