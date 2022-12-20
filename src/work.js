/// <reference path="../node_modules/jquery/dist/jquery.js" />
var game = 1;
var gameNo = 0;

function gameOver() {
    window.onclick = anyfunction;
    document.onclick = anyfunction;
    document.body.onclick = anyfunction;
    function anyfunction() { };
}


var a = 1;
function move(x) {
    
    if (a % 2 == 0) {
        document.getElementById(x).innerHTML = "x";
    }
    else {
        document.getElementById(x).innerHTML = "0";
    }
    a = a + 1;
    check(x);
    disable(x);


}
function disableResetButton() { Document.getElementById("reset").onclick = {}; }
var p = 1;
var pwin1 = 0;
var pwin2 = 0;
function winner(x) {
    if (x == 1) {
        document.getElementById(p + "sno").innerHTML = p + ".";
        document.getElementById(p + "wPlayer1").innerHTML = "1";
        document.getElementById(p + "wPlayer2").innerHTML = "0";
        pwin1 = pwin1 + 1;
    }
    else {
        document.getElementById(p + "sno").innerHTML = p + ".";
        document.getElementById(p + "wPlayer1").innerHTML = "0";
        document.getElementById(p + "wPlayer2").innerHTML = "1";
        pwin2 = pwin2 + 1;
    }
    p = p + 1;
}
function disable(x) {
    document.getElementById(x).onclick = {};
}


function total() {
    document.getElementById("noWin1").innerHTML = pwin1;
    document.getElementById("noWin2").innerHTML = pwin2;
}

function reset() {
    document.getElementById("1").innerHTML = "";
    document.getElementById("2").innerHTML = "";
    document.getElementById("3").innerHTML = "";
    document.getElementById("4").innerHTML = "";
    document.getElementById("5").innerHTML = "";
    document.getElementById("6").innerHTML = "";
    document.getElementById("7").innerHTML = "";
    document.getElementById("8").innerHTML = "";
    document.getElementById("9").innerHTML = "";
    document.getElementById("1").onclick = function () { move(1) };
    document.getElementById("2").onclick = function () { move(2) };
    document.getElementById("3").onclick = function () { move(3) };
    document.getElementById("4").onclick = function () { move(4) };
    document.getElementById("5").onclick = function () { move(5) };
    document.getElementById("6").onclick = function () { move(6) };
    document.getElementById("7").onclick = function () { move(7) };
    document.getElementById("8").onclick = function () { move(8) };
    document.getElementById("9").onclick = function () { move(9) };
    a = 1;

}

function resetButtonEnabler() {
    document.getElementById("reset").onclick = function () { reset() };

}


function check(x) {

    var element1 = document.getElementById("1").innerHTML;
    var element2 = document.getElementById("2").innerHTML;
    var element3 = document.getElementById("3").innerHTML;
    var element4 = document.getElementById("4").innerHTML;
    var element5 = document.getElementById("5").innerHTML;
    var element6 = document.getElementById("6").innerHTML;
    var element7 = document.getElementById("7").innerHTML;
    var element8 = document.getElementById("8").innerHTML;
    var element9 = document.getElementById("9").innerHTML;


    if (x == 1) {
        if (element1 == element2 && element2 == element3) {
            alert("Game Over");
            if (element1 == "0" && element2 == "0" && element3 == "0") {
                alert("Win Player1");
                winner(1);
                total();
            }
            else {
                alert("win player2");
                winner(2);
                total();
            }
            
        }
        if (element1 == element5 && element5 == element9) {
            alert("Game Over");
            if (element1 == "0" && element5 == "0" && element9 == "0") {
                alert("Win Player1");
                winner(1);
                total();
            }
            else {
                alert("win player2");
                winner(2);
                total();
            }
        }
        if (element1 == element4 && element4 == element7) {
            alert("Game Over");
            if (element1 == "0" && element4 == "0" && element7 == "0") {
                alert("Win Player1");
                winner(1);
                total();
            }
            else {
                alert("win player2");
                winner(2);
                total();
            }
        }

    }

    if (x == 2) {
        if (element1 == element2 && element2 == element3) {
            alert("Game Over");
            if (element1 == "0" && element2 == "0" && element3 == "0") {
                alert("Win Player1");
                winner(1);
                total();
            }
            else {
                alert("win player2");
                winner(2);
                total();
            }
        }
        if (element2 == element5 && element5 == element8) {
            alert("Game Over");
            if (element1 == "0" && element5 == "0" && element8 == "0") {
                alert("Win Player1");
                winner(1);
                total();
            }
            else {
                alert("win player2");
                winner(2);
                total();
            }
        }
    }
    if (x == 3) {
        if (element1 == element2 && element2 == element3) {
            alert("Game Over");
            if (element1 == "0" && element2 == "0" && element3 == "0") {
                alert("Win Player1");
                winner(1);
                total();
            }
            else {
                alert("win player2");
                winner(2);
                total();
            }
        }
        if (element3 == element6 && element6 == element9) {
            alert("Game Over");
            if (element3 == "0" && element6 == "0" && element9 == "0") {
                alert("Win Player1");
                winner(1);
                total();
            }
            else {
                alert("win player2");
                winner(2);
                total();
            }
        }
        if (element3 == element5 && element5 == element7) {
            alert("Game Over");
            if (element3 == "0" && element5 == "0" && element7 == "0") {
                alert("Win Player1");
                winner(1);
                total();
            }
            else {
                alert("win player2");
                winner(2);
                total();
            }
        }

    }
    if (x == 4) {
        if (element4 == element5 && element5 == element6) {
            alert("Game Over");
            if (element4 == "0" && element5 == "0" && element6 == "0") {
                alert("Win Player1");
                winner(1);
                total();
            }
            else {
                alert("win player2");
                winner(2);
                total();
            }
        }
        if (element1 == element4 && element4 == element7) {
            alert("Game Over");
            if (element1 == "0" && element4 == "0" && element7 == "0") {
                alert("Win Player1");
                winner(1);
                total();
            }
            else {
                alert("win player2");
                winner(2);
                total();
            }
        }
    }
    if (x == 5) {
        if (element2 == element5 && element5 == element8) {
            alert("Game Over");
            if (element2 == "0" && element5 == "0" && element8 == "0") {
                alert("Win Player1");
                winner(1);
                total();
            }
            else {
                alert("win player2");
                winner(2);
                total();
            }
        }
        if (element4 == element5 && element5 == element6) {
            alert("Game Over");
            if (element4 == "0" && element5 == "0" && element6 == "0") {
                alert("Win Player1");
                winner(1);
                total();
            }
            else {
                alert("win player2");
                winner(2);
                total();
            }

        }
        if (element1 == element5 && element5 == element9) {
            alert("Game Over");
            if (element1 == "0" && element5 == "0" && element9 == "0") {
                alert("Win Player1");
                winner(1);
                total();
            }
            else {
                alert("win player2");
                winner(2);
                total();
            }
        }
        if (element3 == element5 && element5 == element7) {
            alert("Game Over");
            if (element3 == "0" && element5 == "0" && element7 == "0") {
                alert("Win Player1");
                winner(1);
                total();
            }
            else {
                alert("win player2");
                winner(2);
                total();
            }
        }
    }
    if (x == 6) {
        if (element4 == element5 && element5 == element6) {
            alert("Game Over");
            if (element4 == "0" && element5 == "0" && element6 == "0") {
                alert("Win Player1");
                winner(1);
                total();
            }
            else {
                alert("win player2");
                winner(2);
                total();
            }
        }
        if (element3 == element6 && element6 == element9) {
            alert("Game Over");
            if (element3 == "0" && element6 == "0" && element9 == "0") {
                alert("Win Player1");
                winner(1);
                total();
            }
            else {
                alert("win player2");
                winner(2);
                total();
            }
        }
    }
    if (x == 7) {
        if (element7 == element8 && element8 == element9) {
            alert("Game Over");
            if (element7 == "0" && element8 == "0" && element9 == "0") {
                alert("Win Player1");
                winner(1);
                total();
            }
            else {
                alert("win player2");
                winner(2);
                total();
            }
        }
        if (element1 == element4 && element4 == element7) {
            alert("Game Over");
            if (element1 == "0" && element4 == "0" && element7 == "0") {
                alert("Win Player1");
                winner(1);
                total();
            }
            else {
                alert("win player2");
                winner(2);
                total();
            }
        }
        if (element3 == element5 && element5 == element7) {
            alert("Game Over");
            if (element3 == "0" && element5 == "0" && element7 == "0") {
                alert("Win Player1");
                winner(1);
                total();
            }
            else {
                alert("win player2");
                winner(2);
                total();
            }
        }
    }
    if (x == 8) {
        if (element7 == element8 && element8 == element9) {
            alert("Game Over");
            if (element7 == "0" && element8 == "0" && element9 == "0") {
                alert("Win Player1");
                winner(1);
                total();
            }
            else {
                alert("win player2");
                winner(2);
                total();
            }
        }
        if (element2 == element5 && element5 == element8) {
            alert("Game Over");
            if (element2 == "0" && element5 == "0" && element8 == "0") {
                alert("Win Player1");
                winner(1);
                total();
            }
            else {
                alert("win player2");
                winner(2);
                total();
            }
        }
    }
    if (x == 9) {
        if (element7 == element8 && element8 == element9) {
            alert("Game Over");
            if (element7 == "0" && element8 == "0" && element9 == "0") {
                alert("Win Player1");
                winner(1);
                total();
            }
            else {
                alert("win player2");
                winner(2);
                total();
            }
        }
        if (element3 == element6 && element6 == element9) {
            alert("Game Over");
            if (element3 == "0" && element6 == "0" && element9 == "0") {
                alert("Win Player1");
                winner(1);
                total();
            }
            else {
                alert("win player2");
                winner(2);
                total();
            }
        }
        if (element1 == element5 && element5 == element9) {
            alert("Game Over");
            if (element1 == "0" && element5 == "0" && element9 == "0") {
                alert("Win Player1");
                winner(1);
                total();
            }
            else {
                alert("win player2");
                winner(2);
                total();
            }
        }
    }

}


