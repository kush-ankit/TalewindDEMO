/// <reference path="../node_modules/jquery/dist/jquery.js" />

var a = [1,2,3,4];

// function onMenuClick1(ev) {
//     var menuItems = document.getElementsByClassName('menu-item');
//     for (let index = 0; index < menuItems.length; index++) {
//         const element = menuItems[index];
//         if (element.className.includes('text-blue-500')) {
//             element.className = element.className.replace('text-blue-500','')
//         }
//     }
//     ev.className = ev.className + ' text-blue-500';
// }


$(window).on('load', function () {
    $('.menu-item').on('click', function () {
        var menuItems = $('.menu-item');
        for (let index = 0; index < menuItems.length; index++) {
            const jqElement = menuItems[index];
            if ($(jqElement).hasClass('text-blue-500')) {
                $(jqElement).removeClass('text-blue-500')
            }
        }
    
        $(this).addClass('text-blue-500');
      });

      $(document).on('mousedown',function (e){
        console.log("mouse is down", e);
      });
});


