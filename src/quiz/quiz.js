/// <reference path="../../node_modules/jquery/dist/jquery.js" />


var menuItems;
var tot = 0;
var attemp = 0;
var seconds = 300;
var timeSpan;
var countdownTimer;

function timmerFn(){
    
    var timeLeft =new Date(timeSpan - new Date() - 19800000);
    console.log();
    document.getElementById('countdown').innerHTML = `0${timeLeft.getMinutes()}:${timeLeft.getSeconds()}`;
    console.log(timeLeft);
    
    if (new Date() >= timeSpan) {
        $("#result").show("slow");
        $("#quizpmt").hide("slow");
        $("#ltques").append(20 - attemp);

        clearInterval(countdownTimer);
    }
}




































$("#startbtn").on("click", function () {

    $("#quizpmt").show("slow");
    $("#startbtn").hide("slow");
    
    timeSpan = new Date();
    timeSpan.setSeconds(timeSpan.getSeconds() + seconds);
    countdownTimer = setInterval(timmerFn, 1000);
    

});

function attempFunc() {

    attemp = attemp * 1 + 1;
    console.log(attemp);


}


$(window).on('load', function () {
    $('.quesclick').on('click', function () {
        menuItems = $(this).attr("id");
        console.log(menuItems);
        tot = menuItems;
    }).on("click", function () {
        if ($("#" + tot).css("background-color") == "rgb(100, 116, 139)") { attempFunc(); }
        console.log($("#" + tot).css("background-color"));
        two(tot);
        $("#atques").html(":&emsp;&emsp;" + attemp);
        $("#aQe").html("Attempted questions:" + attemp);
        $("#option1").css("border-color", "rgb(100 116 139)").css('border-width', '2px ' + '2px')
        $("#option2").css("border-color", "rgb(100 116 139)").css('border-width', '2px ' + '2px')
        $("#option3").css("border-color", "rgb(100 116 139)").css('border-width', '2px ' + '2px')
        $("#option4").css("border-color", "rgb(100 116 139)").css('border-width', '2px ' + '2px')

    })
});










$("#nextques").on("click", function () {

    tot = tot * 1 + 1;
    if ($("#" + tot).css("background-color") == "rgb(100, 116, 139)") { attempFunc(); }
    console.log($("#" + tot).css("background-color"));
    console.log("tot" + tot)
    two(tot);
    $("#atques").html(":&emsp;&emsp;" + attemp);
    $("#aQe").html("Attempted questions:" + attemp);
    $("#option1").css("border-color", "rgb(100 116 139)").css('border-width', '2px ' + '2px')
    $("#option2").css("border-color", "rgb(100 116 139)").css('border-width', '2px ' + '2px')
    $("#option3").css("border-color", "rgb(100 116 139)").css('border-width', '2px ' + '2px')
    $("#option4").css("border-color", "rgb(100 116 139)").css('border-width', '2px ' + '2px')

});




$("#prevques").on("click", function () {
    if (tot >= 2) {
        tot = tot * 1 - 1;

        two(tot);
        $("#option1").css("border-color", "rgb(100 116 139)").css('border-width', '2px ' + '2px')
        $("#option2").css("border-color", "rgb(100 116 139)").css('border-width', '2px ' + '2px')
        $("#option3").css("border-color", "rgb(100 116 139)").css('border-width', '2px ' + '2px')
        $("#option4").css("border-color", "rgb(100 116 139)").css('border-width', '2px ' + '2px')
    }
});

$("#option1").on("click", function () {
    $("#option1").css("border-color", "#4169E1").css('border-width', '3px ' + '3px')
    $("#" + tot).css("background", "#3CB371")
    scoreupdation(1, tot);
});

$("#option2").on("click", function () {
    $("#option2").css("border-color", "#4169E1").css('border-width', '3px ' + '3px')
    $("#" + tot).css("background", "#3CB371")
    scoreupdation(2, tot);
});

$("#option3").on("click", function () {
    $("#option3").css("border-color", "#4169E1").css('border-width', '3px ' + '3px')
    $("#" + tot).css("background", "#3CB371")
    scoreupdation(3, tot);
});

$("#option4").on("click", function () {
    $("#option4").css("border-color", "#4169E1").css('border-width', '3px ' + '3px')
    $("#" + tot).css("background", "#3CB371")
    scoreupdation(4, tot);
});




function two(x) {
    let c = x;
    console.log(c);
    $("#onclickques").hide("slow");
    $("#" + x).css("background", "#F08080")
    $("#onclickques").show("slow");
    $.get("http://localhost:8000/quiz/quiz.json", function (data, status) {
        const tet = data.quiz[x - 1];
        $("#ques").html(`${tet.quiz1}`);
        $("#option1").html(`${tet.opt1}`);
        $("#option2").html(`${tet.opt2}`);
        $("#option3").html(`${tet.opt3}`);
        $("#option4").html(`${tet.opt4}`);
    });
}




$("#endquizbtn").on("click", function () {

    $("#result").show("slow");
    $("#quizpmt").hide("slow");
    $("#ltques").append(20 - attemp);
    clearInterval(countdownTimer);
});
var m = 0;
function scoreupdation(x, y) {

    $.get("http://localhost:8000/quiz/quiz.json", function (data, status) {
        const scr = data.quiz[y - 1];

        console.log("hello=" + scr.crtopt);
        console.log("x=" + x)
        if ((scr.crtopt) == x) {
            m = m + scr.mark;
            console.log("m=" + m);
            $("#score").html(":&emsp;&emsp;" + m);
        }
        else {
            console.log("it is not true");
        }
    })

}





