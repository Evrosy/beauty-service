//responsywnosc 

window.addEventListener("resize", sprawdz);

function sprawdz() {
    if (window.matchMedia("(max-width: 700px)").matches) {
        document.getElementById("poleGryStylistka").id = "malePole";
    } else {
        document.getElementById("malePole").id = "poleGryStylistka";
    }
}

function nowyKursor(x) {
    switch(x) {
        case 0:
            document.body.style.cursor = "default";
        break
        case 1:
            document.body.style.cursor = "url('Foto/kursor.png'), auto";
        break
    }
}

function rozpocznij(x=0) {
    var start = document.getElementsByClassName("przyciskStart");
    start[x].style.display = "none";
    document.getElementById("koniec").style.display = "none";
    document.getElementById("start").style.display ="block";
    document.getElementById("start").style.zIndex = "5";

    document.getElementById("modelka").style.display ="block";
    var modelki = document.getElementsByClassName("przyciskModelka");
    if (window.matchMedia("(max-width: 700px)").matches) {
        modelki[0].style.left = "53px"
        modelki[1].style.left = "203px";
        modelki[2].style.left = "353px"
    } else {
        modelki[0].style.left = "103px"
        modelki[1].style.left = "253px";
        modelki[2].style.left = "403px"; 
    }
    
}

function zmienModelke(x) {
    var dlonie = document.getElementById("dlonie");
    if (x == 0) {
        dlonie.src = "Foto/dlonieJasne.png";
    } else if (x == 1) {
        dlonie.src = "Foto/dlonieNeutral.png"
    } else {
        dlonie.src = "Foto/dlonieCiemne.png"
    }
    document.getElementById("modelka").style.display ="none";
    document.getElementById("start").style.display ="none";

    glowna();
}
window.addEventListener("resize", reset);

function glowna() {
    if (document.getElementById("paznokcie").style.display != "none") {
        document.getElementById("paznokcie").style.display = "none";
    } 
    if (document.getElementById("gotowce").style.display != "none") {
        document.getElementById("gotowce").style.display = "none";
    } 
    if (document.getElementById("dodatki").style.display != "none") {
        document.getElementById("dodatki").style.display = "none";
    }

    var zawartoscG = document.getElementById("glowna");
    var przyciskiGlowna = zawartoscG.getElementsByClassName("przyciskGra");
    zawartoscG.style.display = "block";

    if (window.matchMedia("(max-width: 700px)").matches) { 
        var odstep = 25;

        for (var i=0; i<=2; i++) {
            przyciskiGlowna[i].style.top = odstep + "px";
            odstep+=75    
        };
        document.getElementById("dalej").style.left = "350px"

    } else {
        var odstep = 25;

        for (var i=0; i<=2; i++) {
            przyciskiGlowna[i].style.top = odstep + "px";
            odstep+=150    
        };
        document.getElementById("dalej").style.left = "485px"
    }
    
}

function paznokcie() {
    document.getElementById("glowna").style.display = "none";

    var zawartoscPaznokci = document.getElementById("paznokcie");
    var przyciskiPaznokci = zawartoscPaznokci.getElementsByClassName("przyciskKolor");
    zawartoscPaznokci.style.display = "block";

    if (window.matchMedia("(max-width: 700px)").matches) {
        var odstep = 125;
        for (var i=0; i<4; i++) {
            przyciskiPaznokci[i].style.top = odstep + "px";
            odstep+=50;  
        } 
        odstep = 125;

        for (var i=4; i < 8; i++) {
            przyciskiPaznokci[i].style.top = odstep + "px";
            przyciskiPaznokci[i].style.left = "80px";
            odstep+=50;
        }
    } else {
        var odstep = 145;
        for (var i=0; i<4; i++) {
            przyciskiPaznokci[i].style.top = odstep + "px";
            odstep+=60;  
        } 
        odstep = 145;

        for (var i=4; i < 8; i++) {
            przyciskiPaznokci[i].style.top = odstep + "px";
            przyciskiPaznokci[i].style.left = "80px";
            odstep+=60;
    }
    }

    
}

function malowanie(x) {
    switch(x) {
        case 0:
            document.getElementById("aktualne").src = "Foto/jasnyroz.png";
        break
        case 1:
            document.getElementById("aktualne").src = "Foto/roz.png";
        break
        case 2:
            document.getElementById("aktualne").src = "Foto/czerwony.png";
        break
        case 3:
            document.getElementById("aktualne").src = "Foto/jasnyniebieski.png";
        break
        case 4:
            document.getElementById("aktualne").src = "Foto/fioletowy.png";
        break
        case 5:
            document.getElementById("aktualne").src = "Foto/ciemnyniebieski.png";
        break
        case 6:
            document.getElementById("aktualne").src = "Foto/zielony.png";
        break
        case 7:
            document.getElementById("aktualne").src = "Foto/neutral.png";
        break
    }
}
function gotowe() {
    document.getElementById("glowna").style.display = "none";
    var zawartosc = document.getElementById("gotowce");
    var przyciski = zawartosc.getElementsByClassName("przyciskGra");

    var odstep = 20;

    if (window.matchMedia("(max-width: 700px)").matches) { 
        for (var i=1; i<przyciski.length; i++) {
            przyciski[i].style.top = odstep + "px";
            odstep+=75    
        };
    } else {
        for (var i=1; i<przyciski.length; i++) {
            przyciski[i].style.top = odstep + "px";
            odstep+=150    
        };
    }
    zawartosc.style.display = "block";
}

function wzorki(x) {
    switch(x) {
        case 0:
            document.getElementById("aktualne").src = "Foto/paznokcieOmbre.png";
        break
        case 1:
            document.getElementById("aktualne").src = "Foto/paznokcieKwiatki.png";
        break
        case 2:
            document.getElementById("aktualne").src = "Foto/paznokcieGeometria.png";
        break
        case 3:
            document.getElementById("aktualne").src = "Foto/paznokcieKrata.png";
        break
    }
}

function wyswietlDodatki() {
    document.getElementById("glowna").style.display = "none";
    var zawartoscDodatkow = document.getElementById("dodatki");
    zawartoscDodatkow.style.display = "block";
    var przyciskiDodatki = zawartoscDodatkow.getElementsByClassName("przyciskGra");
    var odstep = 20;   

    if (window.matchMedia("(max-width: 700px)").matches) {
        for (var i=1; i<4; i++) {
            przyciskiDodatki[i].style.top = odstep + "px";
            odstep+=80    
        };
        var odstep = 20; 
        for (var i=4; i<7; i++) {
            przyciskiDodatki[i].style.top = odstep + "px";
            odstep+=80    
            przyciskiDodatki[i].style.left = "355px";
        };
        document.getElementById("nie").style.left = "355px";
    } else {

    
    for (var i=1; i<4; i++) {
        przyciskiDodatki[i].style.top = odstep + "px";
        odstep+=120    
    };
    var odstep = 20; 
    for (var i=4; i<7; i++) {
        przyciskiDodatki[i].style.top = odstep + "px";
        odstep+=120    
        przyciskiDodatki[i].style.left = "485px";
    };
    document.getElementById("nie").style.left = "485px";
}
}

function nalozB(x) {
    switch(x) {
        case 0:
            if(document.getElementById("obrecz1").style.display != "block") {
                document.getElementById("obrecz1").style.display = "block";
            } else {
                document.getElementById("obrecz1").style.display = "none";
            }  
        break
        case 1:
            if(document.getElementById("obrecz2").style.display != "block") {
                document.getElementById("obrecz2").style.display = "block";
            } else {
                document.getElementById("obrecz2").style.display = "none";
            }
        break
        case 2:
            if(document.getElementById("obrecz3").style.display != "block") {
                document.getElementById("obrecz3").style.display = "block";
            } else {
                document.getElementById("obrecz3").style.display = "none";
            }
        break
    }
}

function nalozP(x) {
    var pierscionek;
    switch(x) {
        case 0:
            pierscionek = "Foto/pSlubny.png";         
        break
        case 1:
            pierscionek = "Foto/pDuzo.png";
        break
        case 2:
            pierscionek = "Foto/pTrzy.png";
        break
    } 
    document.getElementById("obraczka").style.display = "block";
    document.getElementById("obraczka").src = pierscionek;
}

function zdejmij() {
    document.getElementById("obrecz1").style.display = "none";
    document.getElementById("obrecz2").style.display = "none";
    document.getElementById("obrecz3").style.display = "none";
    document.getElementById("obraczka").style.display = "none";
}

function skoncz() {
    document.getElementById("glowna").style.display = "none";
    document.getElementById("koniec").style.display = "block"; 
}

function reset() {
    rozpocznij(0);
    document.getElementById("aktualne").src = "Foto/normalne.png";
    document.getElementById("obrecz1").style.display = "none";
    document.getElementById("obrecz2").style.display = "none";
    document.getElementById("obrecz3").style.display = "none";
    document.getElementById("obraczka").style.display = "none";
}