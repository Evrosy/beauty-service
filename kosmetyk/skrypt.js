//strzalka nawigacji 
window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        document.getElementById("strzalka").style.display = "block"
      } else {
        document.getElementById("strzalka").style.display = "none"
      }
};

document.getElementById("strzalka").onclick = function (){
    const element = document.getElementById("pasek");
    element.scrollIntoView();
}


//hamburger menu 
document.getElementById("hamburger").onclick = function() {
    var pasek = document.getElementsByClassName("prostokat");
    if (document.getElementById("menu").style.display != "block") {

        document.getElementById("pasek").style.width = "40%";
        document.getElementById("pasek").style.display = "block"

        document.getElementById("menu").style.display = "block";
        pasek[0].style.top = "50%";
        pasek[2].style.top = "50%";
        document.getElementById("hamburger").style.position = "fixed";
    } else {
        document.getElementById("menu").style.display = "none";
        pasek[0].style.top = "0";
        pasek[2].style.top = "100%";
        document.getElementById("pasek").style.width = "0%";
        document.getElementById("hamburger").style.position = "absolute";
    }
}

window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 701px)").matches) {
        if ( document.getElementById("menu").style.display != "block") {
            document.getElementById("menu").style.display = "block";

             document.getElementById("pasek").style.width = "100%";
             document.getElementById("pasek").style.display = "block"

        }  
    } else if  (window.matchMedia("(max-width: 700px)").matches) {
        var pasek = document.getElementsByClassName("prostokat");
        document.getElementById("menu").style.display = "none";
        document.getElementById("pasek").style.width = "0%";
        pasek[0].style.top = "0";
        pasek[2].style.top = "100%";
    }
});



//Otwieranie i zamykanie okna wózek
document.getElementById("wozek").onclick = function() {
    document.getElementById("wozek").style.display = "none";
    document.getElementById("opcje").style.display= "block";
}

document.getElementById("closeO").onclick = function(){
    document.getElementById("opcje").style.display= "none";
    document.getElementById("wozek").style.display = "block";
}

//funkcje dostępności strony
document.getElementById("odwroc").onclick = function () {
    var wysoki = document.getElementById("zawartosc");
    if (document.body.style.filter !="invert(100%)") {
        wysoki.className = "";
        document.body.style.filter = "invert(100%)"; //odwraca kolory
        document.body.style.backgroundColor = "#001a26";
        localStorage.setItem("efekt", "invert(100%)");
        localStorage.setItem("tlo", "#001a26")
        localStorage.setItem ("klasa", "");
    } else {
        document.body.style.filter = "none";
        document.body.style.backgroundColor = "#ffe5d9"; 
        localStorage.setItem("efekt", "none");
        localStorage.setItem("tlo", "#ffe5d9");
    } 
}

document.getElementById("kontrast").onclick = function () {
    var wysoki = document.getElementById("zawartosc");
    if (wysoki.className != "wysokiKontrast") {
        document.body.style.filter = "none";
        document.body.style.backgroundColor = "#001a26"
        wysoki.className = "wysokiKontrast";
        localStorage.setItem("efekt", "none");
        localStorage.setItem("tlo", "#001a26");
        localStorage.setItem("klasa", "wysokiKontrast");
    } else {
        wysoki.className = "";
        document.body.style.backgroundColor = "#ffe5d9";
        localStorage.setItem("klasa", "");
        localStorage.setItem("tlo", "#ffe5d9");
    }
}

document.getElementById("lowS").onclick = function () {
    var wysoki = document.getElementById("zawartosc");
    if (document.body.style.filter !="saturate(50%)") {
        wysoki.className = "";
        document.body.style.filter = "saturate(50%)";//niskie nasycenie
        document.body.style.backgroundColor = "#f4e7e1";
        localStorage.setItem("efekt", "saturate(50%)");
        localStorage.setItem("tlo", "#f4e7e1");
        localStorage.setItem("klasa", "");

    } else {
        document.body.style.filter = "none"; 
        document.body.style.backgroundColor = "#ffe5d9"
        localStorage.setItem("efekt", "none");
        localStorage.setItem("tlo", "#ffe5d9");
    } 
}

document.getElementById("higS").onclick = function () {
    var wysoki = document.getElementById("zawartosc");
    if (document.body.style.filter !="saturate(150%)") {
        wysoki.className = "";
        document.body.style.filter = "saturate(150%)";//wysokie nasycenie
        document.body.style.backgroundColor = "#ffe3d1"
        localStorage.setItem("efekt", "saturate(150%)");
        localStorage.setItem("tlo", "#ffe3d1");
        localStorage.setItem("klasa", "");
    } else {
        document.body.style.filter = "none"; 
        document.body.style.backgroundColor = "#ffe5d9"
        localStorage.setItem("efekt", "none");
        localStorage.setItem("tlo", "#ffe5d9");
    } 
}

document.getElementById("BW").onclick = function () {
    var wysoki = document.getElementById("zawartosc");
    if (document.body.style.filter !="grayscale(100%)") {
        wysoki.className = "";
        document.body.style.filter = "grayscale(100%)"; //monohromatyczne
        document.body.style.backgroundColor = "White";
        localStorage.setItem("efekt", "grayscale(100%)");
        localStorage.setItem("tlo", "White");
        localStorage.setItem("klasa", "");
    } else {
        document.body.style.filter = "none"; 
        document.body.style.backgroundColor = "#ffe5d9";
        localStorage.setItem("efekt", "none");
        localStorage.setItem("tlo", "#ffe5d9");
    } 
}


function sprawdza(x = 100) { //ustawia rozmiar czcionki na podstawie wybranej wartości procentów
    
    var skad = document.querySelector('body');//Wybiera całość fragmentu bodu z css
    var styl= getComputedStyle(skad);//pobiera podany styl
    let wartosc;

    let tym; //wartosc tymczasowa 
    if (window.matchMedia("(min-width: 1200px)").matches) {
        tym = 1;
    } else if (window.matchMedia("(max-width: 700px)").matches) {
        tym = 3;
    } else {
        tym = 2;
    }

    switch(tym) {
        case 1:
            wartosc = styl.getPropertyValue('--wymiaryCzcionki'); //pobiera samą wartość danego stylu
        break
        case 2:
            wartosc = styl.getPropertyValue('--wymiaryCzcionki');
        break
        case 3:
            wartosc = styl.getPropertyValue('--wymiaryCzcionki');
        break
    }

    
    let rozmiar = parseFloat(wartosc); //zmienia string na liczbe po przecinku
    var liczba = rozmiar.toFixed(2); //zwraca liczbe z dwoma miejscami po przecinku 

    let procent = x; //Deklarowana wartosc prcentowa
    let pro = procent/100; 
    
    let prawie = liczba * pro; //mnozy wartosc czcionki przez procent podzielony przez 100
    let prawdidlowaCzcionka = prawie + "vh";

    document.body.style.fontSize = prawdidlowaCzcionka;
}

sprawdza();

window.addEventListener('resize', pobieraProcent);  //Zmienia wartośc czcionki kiedy ekran zmienia rozmiar 
//DZIAŁA BO MA WARTOŚĆ DOMYŚLNĄ FUNKCJA B)

function pobieraProcent () {
    var prawiePro =  document.getElementById('procent').innerText;
    let procent = parseInt(prawiePro);
    sprawdza(procent);
}

pobieraProcent();

document.getElementById("zmniejsz").onclick = function () {
    var prawiePro =  document.getElementById('procent').innerText; //prawie procent 
    let procent = parseInt(prawiePro); //procent INT 

    if (procent > 50) { //limit zmniejszania 
        procent -= 10;
    } else {
        document.getElementById("zmniejsz").disabled = true;  //wyłacza guzik
    }
    if (procent < 170) {
        document.getElementById("zwieksz").disabled = false; //włacza guzik
    }

    document.getElementById("procent").innerText = procent + "%";
    sprawdza (procent);

    localStorage.setItem("rozmiar", procent);
}

document.getElementById("zwieksz").onclick = function () {

    var prawiePro =  document.getElementById('procent').innerText;
    let procent = parseInt(prawiePro);

    if (procent < 170) { //limit zwiekszania 
        procent += 10;
    } else {
        document.getElementById("zwieksz").disabled = true; //wyłacza guzik
    }

    if (procent > 50) {
        document.getElementById("zmniejsz").disabled = false; //wlacza guzik
    }
    document.getElementById("procent").innerText = procent + "%";
    sprawdza (procent);
    
    localStorage.setItem("rozmiar", procent);
}


document.getElementById("reset").onclick = function () {
    defult ();
    var skad = document.querySelector('body');//Wybiera całość fragmentu bodu z css
    var styl= getComputedStyle(skad);//pobiera podany styl
    let wartosc;
    let tym; //wartosc tymczasowa 
    if (window.matchMedia("(min-width: 1200px)").matches) {
        tym = 1;
    } else if (window.matchMedia("(max-width:700px)").matches) {
        tym = 3;
    } else {
        tym = 2;
    }

    switch(tym) {
        case 1:
            wartosc = styl.getPropertyValue('--wymiaryCzcionkiDuzy'); //pobiera samą wartość danefo stylu
        break
        case 2:
            wartosc = styl.getPropertyValue('--wymiaryCzcionki');
        break
        case 3:
            wartosc = styl.getPropertyValue('--wymiaryCzcionkiMaly');
    }

    document.body.style.fontSize = wartosc;
    document.getElementById("procent").innerHTML = "100%";
    
    localStorage.setItem("efekt", "none");
    localStorage.setItem("tlo", "#ffe5d9");
    localStorage.setItem("klasa", "");
    localStorage.setItem("rozmiar", 100);
}

//funkcja przywracająca podstawową stronę (wartosc stylu)
function defult () {
    var wysoki = document.getElementById("zawartosc");
    wysoki.className = "";
    document.body.style.filter = "none"; 
    document.body.style.backgroundColor = "#ffe5d9";
}

//magazyn na przechowywanie danych


function efekty () { //efekty ładowane z magazynu
    var AktulanyEfekt = localStorage.getItem("efekt");
    var AktualneTlo = localStorage.getItem("tlo");
    var AktualnaKlasa = localStorage.getItem("klasa");
    var AktualnyProcent = localStorage.getItem("rozmiar");
    document.body.style.filter = AktulanyEfekt;
    document.body.style.backgroundColor = AktualneTlo;

    var wysoki = document.getElementById("zawartosc");
    wysoki.className = AktualnaKlasa;

    var procent = AktualnyProcent; //pobiera procent 
    sprawdza (procent); //ustawia odpowiednia czcionke
    document.getElementById("procent").innerHTML = procent + "%";
}

efekty();

function losowaLiczba(min, max) { //losowanie liczby od min do max do owocków
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var ktory = 1;

function uciekanie() {
    let id = null;
    var owoce = document.getElementsByClassName("owoc");
    let pos = 2;
    var obrot = 0;
   
    owoce[ktory-1].style.display="block";

    let liczba = losowaLiczba(1,4);

    id = setInterval(klatka, 10);
    function klatka () {
        if (pos >= 92 || pos <= 0) {
            owoce[ktory-1].style.display="none";
            ktory++; 
            if(ktory>owoce.length) {
                ktory=1; 
            }
            clearInterval(id);
            liczba = losowaLiczba(1,4);
            if (liczba == ktory) {
                pos = 90;
            } else {
                pos = 2;
            }
            owoce[ktory-1].style.display="block";
            owoce[ktory-1].style.left = pos + "%";
            id = setInterval(klatka, 10);
        } else {
            if (liczba == ktory) {
                pos -= 0.1;
                obrot -= 4.5;
            } else {
                pos+= 0.1 ;
                obrot += 4.5;
            }
            owoce[ktory-1].style.left = pos + "%";
            owoce[ktory-1].style.rotate = obrot + "deg";
        }
    }
}

uciekanie();

var ZdjecieUslugi = 0;

function slajdy(){
    var img = document.getElementsByClassName("kategoriaUslugi");

    for(var i=0; i<img.length; i++){
        img[i].style.display="none";
    }
      
    if(ZdjecieUslugi>=img.length){
        ZdjecieUslugi=1;
    } 
        ZdjecieUslugi++;

    img[ZdjecieUslugi-1].style.display="block";
    setTimeout(slajdy,3000);
}

function przejdzUslugi() {
    window.location.href = "oferta.html"
}

function przejdzHistorie() {
    window.location.href="historia.html"; 
}

function przejdzGra() {
    window.location.href="gra.html"
}

function przejdzKontakt() {
    window.location.href="kontakt.html"
}

function wyszukaj() {
    var input, filter,  table, tr, td, i;
    input = document.getElementById("fraza");
    filter = input.value.toUpperCase();
    table = document.getElementById("TabelaOfert");
    tr = table.getElementsByTagName("tr");
    var klasy = document.getElementsByClassName("usluga");
    for (i = 0; i< klasy.length; i++) {
        klasy[i].style.display = "none";
    }

    if (input.value == "") {
        for (i = 0; i< klasy.length; i++) {
            klasy[i].style.display = "block";
        }
    }

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
}

 function pokazOpisUslugi(x) {
    var przyciski = document.getElementsByClassName("pokazOpis");
    var opisy = document.getElementsByClassName("opisUslugi");

    
    for (var i=0; i < przyciski.length; i++) {
        if (i != x) {
            przyciski[i].innerHTML = "&#11167";
            opisy[i].style.display = "none";
        }
    }
    
    if (opisy[x].style.display != "block") {
        przyciski[x].innerHTML = "&#11165";
        opisy[x].style.display = "block"; 
    }  else {
        przyciski[x].innerHTML = "&#11167";
        opisy[x].style.display = "none";
    }
} 

function formularz() { //przenois do strony z formularzem 
    window.location.href="form.html"; 
}



function pokazWiecej() {
    var x = document.getElementById("uslugi").value;

    var myDiv = document.getElementById("wiecej");
    var liczbyP = document.getElementById("uslugiIle");
    var CzescCiala = document.getElementById("uslugiCo");

    try {
       myDiv.removeChild(liczbyP); 

    } catch(error){}

    try {
        myDiv.removeChild(CzescCiala); 
 
     } catch(error){}
        
    
    if (x == "wosk" || x == "laserUsuwanie") {
        var lista = ["nogi","rece", "bikini"];
        var selectList = document.createElement("select");
        selectList.setAttribute("id","uslugiCo");
        myDiv.appendChild(selectList)
        for ( var i = 0; i < lista.length; i++) {
            var option = document.createElement("option");
            option.setAttribute("value", lista[i]);
            option.text = lista[i];
            selectList.appendChild(option);
        }
    } else if (x == "zdobienie") {
        var liczby = document.createElement("input");
        liczby.setAttribute("type","number");
        liczby.setAttribute("id", "uslugiIle")
        liczby.setAttribute("min","1");
        liczby.setAttribute("max","10");
        liczby.setAttribute("placeholder","liczba paznokci");
        myDiv.appendChild(liczby);
    }
}

//Pokazywanie pracowników
var numerZdjecia = 0; 

function karuzela() {
    var img = document.getElementsByClassName("zdjecie");
    var ktory = document.getElementsByClassName("opis");
    var dlugosc = img.length;

    for(var i=0; i<img.length; i++){
        img[i].style.display="none";
    }
      
    if(numerZdjecia>=img.length){
        numerZdjecia=0;
    }

    if (numerZdjecia == 0) {
        img[dlugosc-1].style.display = "block";
        img[dlugosc-1].style.right = "5%";
        img[dlugosc-1].style.filter = "blur(2px)";
        img[dlugosc-1].style.zIndex = "0";
        img[dlugosc-1].id = " ";
        ktory[dlugosc-1].id = " ";
        
    } else {
        img[numerZdjecia-1].style.display = "block";
        img[numerZdjecia-1].style.right = "5%";
        img[numerZdjecia-1].style.filter = "blur(2px)";
        img[numerZdjecia-1].style.zIndex = "0";
        img[numerZdjecia-1].id = " ";
        ktory[numerZdjecia-1].id = " ";
    }

    img[numerZdjecia].style.display = "block";
    img[numerZdjecia].style.right= "35%";
    img[numerZdjecia].style.filter = "none";
    img[numerZdjecia].style.zIndex = "1";
    img[numerZdjecia].id = "aktywneZdjecie";
    ktory[numerZdjecia].id = "aktywnyOpis";
    


    if (numerZdjecia == 0){
        img[numerZdjecia+1].style.display = "block";
        img[numerZdjecia+1].style.filter = "blur(2px)";
        img[numerZdjecia+1].style.right = "65%";
        img[numerZdjecia+1].style.zIndex = "0";
        img[numerZdjecia+1].id = " ";
        ktory[numerZdjecia +1].id = " ";
    } else if (numerZdjecia >= dlugosc-1) {
        img[0].style.display = "block";
        img[0].style.filter = "blur(2px)";
        img[0].style.right = "65%";
        img[0].style.zIndex = "0";
        img[0].id = " ";
        ktory[0].id = " ";
    } else {
        img[numerZdjecia+1].style.display = "block";
        img[numerZdjecia+1].style.filter = "blur(2px)";
        img[numerZdjecia+1].style.right = "65%";
        img[numerZdjecia+1].style.zIndex = "0";
        img[numerZdjecia+1].id = " ";
        ktory[numerZdjecia +1].id = " ";
    }

    numerZdjecia++;
    
}

karuzela();
var ustawKaruzele = setInterval(karuzela,3000);


function pokazOpis() {
    var img = document.getElementById("aktywneZdjecie");
    var opis = document.getElementById("aktywnyOpis");

    

    if (opis.style.display != "block") {
        clearInterval(ustawKaruzele);
        img.querySelector("h3").style.color = "var(--czcionka)";
        opis.style.display = "block";
        opis.style.width = "40%";
        img.style.right = "60%";
    } else {
        //this.innerHTML = "&#11166";
        clearInterval(ustawKaruzele);
        ustawKaruzele = setInterval(karuzela,3000);
        img.querySelector("h3").style.color = "var(--nude)";
        opis.style.display = "none";
        opis.style.width = "0";
        img.style.right = "30%";
    }
    
   
    
}