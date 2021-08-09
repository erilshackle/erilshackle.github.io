
$(".menu-ham").click(function(){
    $(".sidebar").toggleClass("show-menu");
    $(".menu-ham").toggleClass("show-menu");
})

function closeMenu(){
    let sidebar = document.getElementsByClassName('sidebar');
    let ham = document.getElementsByClassName('menu-ham');
    sidebar[0].classList.toggle('show-menu');
    ham[0].classList.toggle('show-menu');
}


// const menu_ham = document.querySelector(".menu-ham");

// menu_ham.addEventListener('click', function(){
//     var sidebar = document.querySelector(".sidebar");
//     var menu_ham = document.querySelector(".menu-ham")
//     sidebar.classList.toggle("show-menu");
//     menu_ham.classList.toggle("show-menu");
// });