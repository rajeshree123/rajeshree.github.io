var imageselector=document.querySelector('img');
imageselector.onclick=function(){
    var imageattr=imageselector.getAttribute('src');
    if(imageattr==='images/football.jpg'){
        imageselector.setAttribute('src',"images/football2.jpg");

    }
    else{
        imageselector.setAttribute('src',"images/football.jpg");
    }

}
var myheading=document.querySelector('h1');
var mybutton=document.querySelector('button');
function userselector(){
    var myname=prompt("Enter the user name");
    localStorage.setItem('name',myname);
    myheading.textContent="mozillla is cool"+myname;

}
if(!localStorage.getItem('name')){
    userselector();
}
else{
    var name1=localStorage.getItem('name');
    myheading.textContent="mozillla is cool"+name1;
}
mybutton.onclick=function(){
userselector();
}