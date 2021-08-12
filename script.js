const menu_ham = document.querySelector(".menu-ham");
const topBtn = document.getElementById("goto-top");


function gotoSection(elementId) {
  var element = document.getElementById(elementId);
  element.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
}

menu_ham.addEventListener('click',function(){
    let sidebar = document.getElementsByClassName("sidebar");
    sidebar[0].classList.toggle("show-menu");
    menu_ham.classList.toggle("show-menu");

});
// $(".menu-ham").click(function(){
//     $(".sidebar").toggleClass("show-menu");
//     $(".menu-ham").toggleClass("show-menu");
// })




function closeMenu(){
    let sidebar = document.getElementsByClassName('sidebar');
    let ham = document.getElementsByClassName('menu-ham');
    sidebar[0].classList.toggle('show-menu');
    ham[0].classList.toggle('show-menu');
}

function sendEmail(params) {
    
    // let user = document.getElementById('name__contact');
    // let email = document.getElementById('email__contact');
    let msg = document.getElementById('msg__contact');
    let title =   "Assunto sobre a pagina do GitHub de ErilShackles";

    window.open(`mailto:erilandocarvalho@gmail.com?subject=${title}&body=${msg.value}`);
}

window.onscroll = function() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    topBtn.style.display = "flex";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.addEventListener('click', function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});