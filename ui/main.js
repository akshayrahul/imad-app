console.log('Loaded!');
var center_text = document.getElementById("main-text");
center_text.innerHTML ="Better Webapp";
var img=document.getElementById("ping");
img.oncLick = function(){
    img.style.marginLeft = '100px';
};