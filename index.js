$(document).ready(function() {

    //Classe object

    var Chrono = function(currentTime) {
        this.time = currentTime;
        this.start = function() {
            start();
        };
        this.reset = function() {
            reset();
        };
    };

    //Déclaration des variables

    var chrono1 = new Chrono(1501);
    var chrono2 = new Chrono(301);
    var chrono3 = new Chrono(901);
    var count = 0;
    var compteur;

    //Déclenchement des timers

    $("#start").click(function() {
        count += 1;
        compteur = setInterval(start, 1000);
        if (count % 2 != 0) {
            chrono1.start();
        } else if (count % 2 == 0 && count != 8 && count != 16) {
            chrono2.start();
        } else if (count == 8 || count == 16) {
            chrono3.start();
        };
    });

    //Déclenchement Reset

    $("#reset").click(function() {
        reset();
    });

    //Fonction de démarrage

    function start() {
        if (count % 2 != 0) {
            chrono1.time -= 1;
            var minute = Math.floor(chrono1.time / 60);
            var seconde = chrono1.time - minute * 60;
            todoList();
            $("#start").hide();
            $("#reset").hide();
            if (minute == 0 && seconde == 0) {
                clearInterval(compteur);
                $("#start").show();
                $("#reset").show();
                chrono1.time = 1501;
                alert("Il est temps de prendre une pause !");
            }
        } else if (count % 2 == 0 && count != 8 && count != 16) {
            chrono2.time -= 1;
            var minute = Math.floor(chrono2.time / 60);
            var seconde = chrono2.time - minute * 60;
            $("#start").hide();
            $("#reset").hide();
            if (minute == 0 && seconde == 0) {
                clearInterval(compteur);
                $("#start").show();
                $("#reset").show();
                $("#todox").show();
                chrono2.time = 301;
                alert("Tâche suivante !");
            }
        } else if (count == 8 || count == 16) {
            chrono3.time -= 1;
            var minute = Math.floor(chrono3.time / 60);
            var seconde = chrono3.time - minute * 60;
            $("#start").hide();
            $("#reset").hide();
            if (minute == 0 && seconde == 0) {
                clearInterval(compteur);
                $("#start").show();
                $("#reset").show();
                $("#todox").show();
                chrono3.time = 901;
                alert("On repart sur un nouveau cycle Pomodoro ?");
            }
        }
        if (minute < 10) {
            minute = "0" + minute;
        } else {
            minute = minute;
        }
        if (seconde < 10) {
            seconde = "0" + seconde;
        } else {
            seconde = seconde;
        }
        $(".timer").html(minute + ":" + seconde);
    }

    //Fonction Reset

    function reset() {
        count = 0;
        chrono1.time = 1501;
        $(".timer").html("25:00");
        $("#cbox").remove();
    }

    //Fonction To Do List

    function todoList() {
        var item = $("#todox").val();
        if (item != "") {
            $("<span id='cbox'><input type='checkbox' id='cbox' name='test'>" + " " + " " + item + "</span><br>").appendTo(".todolisty");
            $("#todox").val("");
            $("#todox").hide();
        } else {
            $("#todox").hide();
        };
    };

    $("#btnClear").click(function clearList() {
        var checkboxes = $("[name=test]");
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                checkboxes[i].parentElement.remove();
            }
        }
    });

});