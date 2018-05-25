var movieDeadpool = 
{
    id: "Deadpool",
    title: "<a href=\"deadpool.html\"> DEADPOOL </a>",
    bout: " Dedpul (engl. Deadpool) američki je akcioni naučnofantastični film iz 2016. godine reditelja Tima Milera, a po scenariju\
    Reta Risa i Pola Vernika na osnovu stripa Dedpul autora Fabijana Ničiece i Roba Lajfilda\
    Producenti filma su Sajmon Kinberg, Rajan Renolds i Loren Šuler Doner.Muziku je komponovao\
    Džanki Eks El.\
    Glumačku ekipu čine Rajan Renolds, Morina Bakarin, Ed Skrajn, Ti Džej Miler, Džina Karano, Brijana Hildebrand, Lesli Agams\
    i Stefan Kapičić. Svetska premijera filma je bila održana 12. februara 2016. u Sjedinjenim\
    Američkim Državama.\  Budžet filma je iznosio 58 000 000 dolara, a zarada od filma je 763 100 000 dolara.",
    image: "<img src=\"img/filmovi_stranica/deadpool/deadpool1.jpg\">",
    popularity: 0
}

var movieOrient = 
{
    id: "Murder on Orient Express",
    title: "<a href=\"orient_express.html\"> MURDER ON THE ORIENT EXPRESS </a>",
    bout:   "Murder on the Orient Express je novi film britansko-američke produkcije, čiji je režiser Kenneth Branagh, koji ujedno tumači\
    i ulogu glavnog glumca. Film je rađen po jednom od najpopularnijih romana Agathae Christie,\
    koja je čuvena po svojim kriminalističkim romanima. Radnja filma prati detektiva Herculea\
    Poirota koji rešava bizarno ubistvo na svetski poznatom vozu Orient Express.\
    Glumačku ekipu čine Rajan Renolds, Morina Bakarin, Ed Skrajn, Ti Džej Miler, Džina Karano, Brijana Hildebrand, Lesli Agams\
    i Stefan Kapičić. Svetska premijera filma je bila održana 12. februara 2016. u Sjedinjenim\
    Američkim Državama.\  Budžet filma je iznosio 58 000 000 dolara, a zarada od filma je 763 100 000 dolara.\
    ",
    image: "<img src=\"img/filmovi_stranica/express/murder-on-orient-express-.jpg\">",
    popularity: 0
}


var movieHobbit =
{
    id: "Hobbit",
    title: "<a href=\"the_hobbit.html\"> THE HOBBIT </a>",
    bout: "   Grand finale trilogije koja je postavila nove standarde filmske umetnosti! Okrutni zmaj Smaug probudio se iz dugogodišnjeg\
    sna i ponovo je pretnja stanovnicima Dugog jezera. Istovremeno, vojska goblina kreće\
    u ratni pohod.\
    ",
    image: " <img src=\"img/filmovi_stranica/hobbit/hobbit1.jpg\">",
    popularity: 0
}

var movieHatefull =
{
    id: "HatefullEight",
    title:"<a href = \"hateful_eight.html\">THE HATEFUL EIGHT </a>",
    bout: "Radnja je smještena desetak godina nakon Građanskog rata i prati dogodovštine Marquisa Warrena (SamuelL.Jackson), bivšeg\
    vojnika Unije i lovca na glave blokiranog snježnom olujom u malom gradiću u Coloradu.\
    U zanimljivoj vožnji se igrom slučaja upoznaje sa Russellovim likom Johnom Ruthom koji\
    prevozi zatvorenicu Daisy (Jennifer Jason Leigh)te još petero koji će zaokružiti 'osmero'\
    iz naslova.",
    image: " <img src = \"img/filmovi_stranica/hateful/hatefull1.jpg\">",
    popularity: 0
}

var movieCaptain =
{
    id: "Avengers",
    title: "<a href = \"avengers.html\">THE AVENGERS - AGE OF ULTRON </a>",
    bout: "   Marvel Studios predstavlja epski nastavak najvećeg filma o super junacima svih vremena, Osvetnici 2: Vladavina Ultrona. Kad\
    Tony Stark pokuša pokrenuti latentni mirovni program, stvari krenu naopako te najmoćniji\
    heroji na Zemlji, Iron Man, Kapetan Amerika, Thor, Hulk, Crna udovica i Hawkeye, moraju\
    proći konačni test dok sudbina planeta visi o koncu. Kad se pojavi negativac Ultron,\
    Osvetnici ga moraju zaustaviti kako ne bi ostvario svoje zlobne planove te uskoro nelagodna\
    savezništva i neočekivane akcije stvore epsku i jedinstvenu globalnu avanturu.",
    image: " <img src = \"img/filmovi_stranica/captain/captain1.jpg\">",
    popularity: 0
}



function sortByNumOfVisitDesc(a,b){
    
    return parseInt(b.popularity)-parseInt(a.popularity);
}


function fillMoviesPopularity() {
   
    var filmArray = [movieDeadpool, movieOrient, movieHobbit, movieHatefull, movieCaptain];
   
    if (localStorage["Deadpool"] !== undefined)
    {
        filmArray[0].popularity = localStorage["Deadpool"];
    }
    if (localStorage["Murder on the Orient Express"] !== undefined)
    {
        filmArray[1].popularity = localStorage["Murder on the Orient Express"];
    }
    if (localStorage["The Hobbit"] !== undefined)
    {
        filmArray[2].popularity = localStorage["The Hobbit"];
    }
    if (localStorage["The Hatefull Eight"] !== undefined)
    {
        filmArray[3].popularity = localStorage["The Hatefull Eight"];
    }
    if (localStorage["The Avengers"] !== undefined)
    {
        filmArray[4].popularity = localStorage["The Avengers"];
    }

    filmArray.sort(sortByNumOfVisitDesc);

    for (var i = 0; i < 5; i++)
    {   
        var  e = i+1;
        var naslov = "naslov" + (e).toString();
        var opis = "opis" + (e).toString();
        var slika = "slika" + (e).toString();
        document.getElementById(naslov).innerHTML = filmArray[i].title;
        document.getElementById(opis).innerHTML = filmArray[i].bout;
        document.getElementById(slika).innerHTML = filmArray[i].image;
    }
}