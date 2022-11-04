$(document).ready(function(){
    $('.banner').slick({
        autoplay: true,
        autoplaySpeed: 1500,
    });
  });

var marker = document.querySelector('#marker');
var item = document.querySelectorAll('.nav_item li a');
function indicator(e){
    marker.style.left = e.offsetLeft + "px";
    marker.style.width = e.offsetWidth + "px";
}

item.forEach(item => {
    item.addEventListener('click',(e) =>{
        indicator(e.target)
    })
    
})