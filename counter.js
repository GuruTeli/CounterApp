let h1=document.getElementById('show');

let counter=0;
let button1=document.getElementById('buttonEl1');
let button2=document.getElementById('buttonEl2');
let button3=document.getElementById('buttonEl3');

button1.addEventListener('click',()=>{

             counter++;
            h1.innerHTML=counter;
});

button2.addEventListener('click',()=>{
             counter--;
             h1.innerHTML=counter;
});

button3.addEventListener('click',()=>{
           counter=0;
           h1.innerHTML=counter;
})