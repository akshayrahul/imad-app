console.log('Loaded!');
var center_text = document.getElementById("main-text");
center_text.innerHTML ="Better Webapp";
var img=document.getElementById("ping");
var marginLeft=0;
function moveLeft(){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';    
}
img.onclick = function(){
    var interval = setInterval(moveLeft,50);
};