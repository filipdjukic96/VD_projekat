function showFavoriteMovies(){
   // alert("usao!");

    var favorites = "";

    if(localStorage.getItem("The AvengersR")!==null){
        //alert("usao");
        favorites+="<a href = \"avengers.html\">THE AVENGERS - AGE OF ULTRON </a>"+"<br>";
        favorites+="  <img src = \"img/filmovi_stranica/captain/captain1.jpg\" class=\"img-fluid\">";
        //alert(favorites);
        favorites+="<br><br><hr>";
        //alert(favorites);
       
    }
    //alert("usao!");
    //alert("prosao");
    if(localStorage.getItem("The HobbitR")!=null){
        //alert("usao2");
        favorites+="<a href=\"the_hobbit.html\"> THE HOBBIT </a>" +"<br>";
        favorites+="  <img src=\"img/filmovi_stranica/hobbit/hobbit1.jpg\" class=\"img-fluid\">";
        favorites+="<br><br><hr>";
        
    }
    //alert("usao!");

    if(localStorage.getItem("DeadpoolR")!==null){
        //alert("usao3");
        favorites+="<a href=\"deadpool.html\"> DEADPOOL </a>"+"<br>";
        favorites+=" <img src=\"img/filmovi_stranica/deadpool/deadpool1.jpg\" class=\"img-fluid\">";
        favorites+="<br><br><hr>";
            
    }
  //  alert("usao!");

    if(localStorage.getItem("The Hateful EightR")){
       // alert("usao4");
        favorites+="<a href = \"hateful_eight.html\">THE HATEFUL EIGHT </a>"+"<br>";
        favorites+="  <img src = \"img/filmovi_stranica/hateful/hatefull1.jpg\" class=\"img-fluid\">";
        favorites+="<br><br><hr>";
        
    }

   // alert("usao!");
    if(localStorage.getItem("Murder on the Orient ExpressR")){
        alert("usao5");
        favorites+="<a href=\"orient_express.html\"> MURDER ON THE ORIENT EXPRESS </a>"+"<br>";
        favorites+=" <img src=\"img/filmovi_stranica/express/murder-on-orient-express-.jpg\" class=\"img-fluid\">";
        favorites+="<br><br><hr>";
        
    }

  //  alert("usao!");

    document.getElementById("favoriteMovies").innerHTML = favorites;
   // alert("usao!");
}






function showFavoriteMoviesEn(){

     // alert("usao!");

     var favorites = "";

     if(localStorage.getItem("The AvengersR")!==null){
         //alert("usao");
         favorites+="<a href = \"avengers_en.html\">THE AVENGERS - AGE OF ULTRON </a>"+"<br>";
         favorites+="  <img src = \"img/filmovi_stranica/captain/captain1.jpg\" class=\"img-fluid\">";
         //alert(favorites);
         favorites+="<br><br><hr>";
         //alert(favorites);
        
     }
     //alert("usao!");
     //alert("prosao");
     if(localStorage.getItem("The HobbitR")!=null){
         //alert("usao2");
         favorites+="<a href=\"the_hobbit_en.html\"> THE HOBBIT </a>" +"<br>";
         favorites+="  <img src=\"img/filmovi_stranica/hobbit/hobbit1.jpg\" class=\"img-fluid\">";
         favorites+="<br><br><hr>";
         
     }
     //alert("usao!");
 
     if(localStorage.getItem("DeadpoolR")!==null){
         //alert("usao3");
         favorites+="<a href=\"deadpool_en.html\"> DEADPOOL </a>"+"<br>";
         favorites+=" <img src=\"img/filmovi_stranica/deadpool/deadpool1.jpg\" class=\"img-fluid\">";
         favorites+="<br><br><hr>";
             
     }
   //  alert("usao!");
 
     if(localStorage.getItem("The Hateful EightR")){
        // alert("usao4");
         favorites+="<a href = \"hateful_eight_en.html\">THE HATEFUL EIGHT </a>"+"<br>";
         favorites+="  <img src = \"img/filmovi_stranica/hateful/hatefull1.jpg\" class=\"img-fluid\">";
         favorites+="<br><br><hr>";
         
     }
 
    // alert("usao!");
     if(localStorage.getItem("Murder on the Orient ExpressR")){
         alert("usao5");
         favorites+="<a href=\"orient_express_en.html\"> MURDER ON THE ORIENT EXPRESS </a>"+"<br>";
         favorites+=" <img src=\"img/filmovi_stranica/express/murder-on-orient-express-.jpg\" class=\"img-fluid\">";
         favorites+="<br><br><hr>";
         
     }
 
   //  alert("usao!");
 
     document.getElementById("favoriteMovies").innerHTML = favorites;
    // alert("usao!");



}


