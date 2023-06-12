let second=document.querySelector('.list-group-item:nth-child(2)');
console.log(second);
second.style.backgroundColor='green';
let third=document.querySelector('.list-group-item:nth-child(3)');
third.style.visibility='hidden';

//Query selector all

let nt=document.querySelectorAll('li');
console.log(nt);
nt[1].style.color="green";
//nt.style.color="green";

let odditem=document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<odditem.length;i++){
    odditem[i].style.backgroundColor="green";
}