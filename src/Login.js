/// <reference path="../node_modules/jquery/dist/jquery.js" />
// function $() {
//     var user = document.getElementById("username").value;
//     var pass = document.getElementById("password").value;
//     var cpass = document.getElementById("cPassword").value;
    
//         if (pass == cpass) {
//             alert("Password confirmed");
//             console.log("Username=" + user);
//             console.log("Password=" + pass);
//         }
//         else {
//             alert("Password do not Match")
//         }
        
//     }
function abc(e){
console.log();
$('body').css('background-color', ('#'+ Math.floor(Math.random(10)*100)+ Math.floor(Math.random(10)*100)+ Math.floor(Math.random(10)*100)));
$('#a').css('background-color', "#000000");
}
    
function pageReady(){
        $('#submitButton').on('click', abc);
}

var a = function(){
console.log();
}

a();

function sum (a, b){

}

sum(2,5)

function click(eventName,b) {

    b(e);
}

$(pageReady)
