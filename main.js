var burger1 = document.querySelector("#burger1");
var burger2 = document.querySelector("#burger2");
var burger3 = document.querySelector("#burger3");
var menu_status = 'closed'

$('#mobile-menu-burger').on('click', function() {
    if(menu_status == 'closed') {
        burger1.style.transform = "rotate(45deg) translateY(10px) translateX(10px)";
        burger2.style.transform = " translateX(20px)";
        burger2.style.opacity = "0";
        burger3.style.transform = "rotate(-45deg) translateY(-6px) translateX(5px)";
        menu_status = 'open';
    }
    else {
        burger1.style.transform = "rotate(0) translateY(0) translateX(0)";
        burger2.style.transform = " translateX(0)";
        burger2.style.opacity = "1";
        burger3.style.transform = "rotate(0) translateY(0) translateX(0)";
        menu_status = 'closed';
    }
});