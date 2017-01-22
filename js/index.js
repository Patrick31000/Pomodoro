//Structure POO

var chrono = function(currentTime) {
    this.time = currentTime;
    this.start = function() {
        Debut();
    };
    this.pause = function() {
        Milieu();

    };
    this.stop = function() {
        Fin();
    };
}
var Chronometre = new chrono(10);
var Chronometre2 = new chrono(20);
var Chronometre3 = new chrono(30);
var count = 0;
var compteur;

//Définition des boutons


$("#Start").click(function() {
    count += 1;
    compteur = setInterval(Debut, 1000);
    if (count == 1 || count == 3 || count == 5 || count == 7) {
        Chronometre.start();
    } else if (count == 2 || count == 4 || count == 6) {
        Chronometre2.start();
    } else if (count == 8) {
        Chronometre3.start();
    }
});



$("#Stop").click(function() {
    Chronometre.stop();
});




//Fonction de départ


function Debut() {


    if (count == 1 || count == 3 || count == 5 || count == 7) {
        Chronometre.time -= 1;
        var heure = Math.floor(Chronometre.time / 3600);
        var min = Math.floor((Chronometre.time - heure * 3600) / 60);
        var sec = Math.floor(Chronometre.time - (heure * 3600 + min * 60));
        if (min == 0 & sec == 0) {
            clearInterval(compteur);

        }
    } else if (count == 2 || count == 4 || count == 6) {
        Chronometre2.time -= 1;
        var heure = Math.floor(Chronometre2.time / 3600);
        var min = Math.floor((Chronometre2.time - heure * 3600) / 60);
        var sec = Math.floor(Chronometre2.time - (heure * 3600 + min * 60));
        if (min == 0 & sec == 0) {
            clearInterval(compteur);
        }
    } else if (count == 8) {
        Chronometre3.time -= 1;
        var heure = Math.floor(Chronometre3.time / 3600);
        var min = Math.floor((Chronometre3.time - heure * 3600) / 60);
        var sec = Math.floor(Chronometre3.time - (heure * 3600 + min * 60));
        if (min == 0 & sec == 0) {
            clearInterval(compteur);
        }
    }

    console.log(count);

    if (sec < 10) {
        sec = "0" + sec;
    }
    if (min < 10) {
        min = "0" + min;

    }
    if (heure < 10) {
        heure = "0" + heure;
    }



    $("#timer").html(heure + "." + min + "." + sec);
};

//Fonction Stop

function Fin() {
    count = 0;
    clearInterval(compteur);
    if (count == 1 || count == 3 || count == 5 || count == 7) {
        chronometre.time = 1501;
        $(".timer").html("25:00");
    } else if (count == 2 || count == 4 || count == 6) {
        chronometre2.time = 301;
        $(".timer").html("05:00");
    } else if (count == 8) {
        chronometre3.time = 901;
        $(".timer").html("15:00");
    }
}