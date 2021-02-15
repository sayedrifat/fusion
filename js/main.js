//branding Slider start Here
var tiny = $('#tiny').tiny().data('api_tiny');
//branding Slider End Here
//Testimonial Slider start Here
const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay:true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
document.querySelector(".contactBtn").addEventListener("click",function(x){
    let name=document.querySelector("#name").value;
    let email=document.querySelector("#email").value;
    let company=document.querySelector("#company").value;
    let subject=document.querySelector("#subject").value;
    let massage=document.querySelector("#massage").value;
    if(name=="" || email==""||company==""||subject==""||massage==""){
        document.querySelector(".errorMsg").innerHTML='<h6><i class="fas fa-exclamation-triangle"></i>  All Field Requered!</h6>';
    }
    x.preventDefault();
});
//Top Arrow Here
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}