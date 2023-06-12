//using classname
let li=document.getElementsByClassName("list-group-item");
//console.log(li);
for(let i=0;i<li.length;i++){
 li[i].style.fontWeight='bold';
}

//using Tag name
let tag=document.getElementsByTagName(li);
console.log(tag);
for(let i=0;i<li.length;i++){
    li[i].style.color='red';
}