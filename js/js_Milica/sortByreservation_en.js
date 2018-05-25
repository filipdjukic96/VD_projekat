var movieDeadpool =
    {
        id: "Deadpool",
        title: "<a href=\"deadpool_en.html\"> DEADPOOL </a>",
        bout: " Deadpool is a 2016 American superhero film based on the Marvel Comics character of the same name, distributed by 20th Century Fox. It is the eighth installment of the X-Men film series, and the first standalone Deadpool film\
    Deadpool was released in the United States on February 12, 2016, after an unconventional viral marketing campaign.The film became both a financial and critical success.\
    Additional casting began in early 2015, and filming took place in Vancouver from March to May.Visual effects were provided by multiple vendors and ranged from the addition of blood and gore to the creation of the CG character Colossus..",
        image: "<img src=\"img/filmovi_stranica/deadpool/deadpool1.jpg\">",
        popularity: 0
    }

var movieOrient =
    {
        id: "Murder on Orient Express",
        title: "<a href=\"orient_express_en.html\"> MURDER ON ORIENT EXPRESS </a>",
        bout: "Murder on the Orient Express is a 2017 mystery drama film directed by Kenneth Branagh with a screenplay by Michael Green, based on the 1934 novel of the same name by Agatha Christie. The film stars Branagh as Hercule Poirot, with Penélope Cruz, Willem Dafoe, Judi Dench, Johnny Depp, Josh Gad, Derek Jacobi, Leslie Odom Jr., Michelle Pfeiffer, and Daisy Ridley in supporting roles. The film is the fourth screen adaptation of Christie's novel, following the 1974 film, a 2001 TV film version, and a 2010 episode of the television series Agatha Christie's Poirot.[6] The plot follows Poirot, a world-renowned detective, as he seeks to solve a murder on the famous trans-European train in the 1930s\
    ",
        image: "<img src=\"img/filmovi_stranica/express/murder-on-orient-express-.jpg\">",
        popularity: 0
    }


var movieHobbit =
    {
        id: "Hobbit",
        title: "<a href=\"the_hobbit_en.html\"> THE HOBBIT </a>",
        bout: "  The Hobbit is a film series consisting of three high fantasy adventure films directed by Peter Jackson. They are based on the 1937 novel The Hobbit by J. R. R. Tolkien, with large portions of the trilogy inspired by the appendices to The Return of the King, which expand on the story told in The Hobbit, as well as new material and characters written especially for the films. Together they act as a prequel to Jackson's The Lord of the Rings film trilogy. The films are subtitled An Unexpected Journey (2012), The Desolation of Smaug (2013), and The Battle of the Five Armies (2014).[4]\
    ",
        image: " <img src=\"img/filmovi_stranica/hobbit/hobbit1.jpg\">",
        popularity: 0
    }

var movieHatefull =
    {
        id: "HatefullEight",
        title: "<a href = \"hateful_eight_en.html\"> HATEFUL EIGHT </a>",
        bout: "The Hateful Eight (often marketed as The H8ful Eight) is a 2015 American Western film written and directed by Quentin Tarantino. It stars Samuel L. Jackson, Kurt Russell, Jennifer Jason Leigh, Walton Goggins, Demián Bichir, Tim Roth, Michael Madsen, and Bruce Dern as eight strangers who seek refuge from a blizzard in a stagecoach stopover some time after the American Civil War.",
        image: " <img src = \"img/filmovi_stranica/hateful/hatefull1.jpg\">",
        popularity: 0
    }

var movieCaptain =
    {
        id: "Avengers",
        title: "<a href = \"avengers_en.html\">THE AVENGERS - AGE OF ULTRON </a>",
        bout: "Avengers: Age of Ultron is a 2015 American superhero film based on the Marvel Comics superhero team the Avengers, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. Avengers: Age of Ultron premiered in Los Angeles on April 13, 2015, and was released on May 1, 2015, in the United States, in 3D and IMAX 3D. The film received generally positive reviews from critics and grossed over $1.4 billion worldwide, making it the fourth-highest-grossing film of 2015 as well as the fifth-highest-grossing film of all time.",
        image: " <img src = \"img/filmovi_stranica/captain/captain1.jpg\">",
        popularity: 0
    }



function sortByNumOfVisitDesc(a, b) {

    return parseInt(b.popularity) - parseInt(a.popularity);
}


function fillMoviesPopularity() {

    var filmArray = [movieDeadpool, movieOrient, movieHobbit, movieHatefull, movieCaptain];

    if (localStorage["Deadpool"] !== undefined) {
        filmArray[0].popularity = localStorage["Deadpool"];
    }
    if (localStorage["Murder on the Orient Express"] !== undefined) {
        filmArray[1].popularity = localStorage["Murder on the Orient Express"];
    }
    if (localStorage["The Hobbit"] !== undefined) {
        filmArray[2].popularity = localStorage["The Hobbit"];
    }
    if (localStorage["The Hatefull Eight"] !== undefined) {
        filmArray[3].popularity = localStorage["The Hatefull Eight"];
    }
    if (localStorage["The Avengers"] !== undefined) {
        filmArray[4].popularity = localStorage["The Avengers"];
    }

    filmArray.sort(sortByNumOfVisitDesc);

    for (var i = 0; i < 5; i++) {
        var e = i + 1;
        var naslov = "naslov" + (e).toString();
        var opis = "opis" + (e).toString();
        var slika = "slika" + (e).toString();
        document.getElementById(naslov).innerHTML = filmArray[i].title;
        document.getElementById(opis).innerHTML = filmArray[i].bout;
        document.getElementById(slika).innerHTML = filmArray[i].image;
    }
}