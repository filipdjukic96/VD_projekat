function addToFavorites(){
    var film = document.ticketForm.movieName.value;
    var key =film+"R";
    if ('localStorage' in window && window.localStorage !== null) {
        if(localStorage.getItem(key) !== null){
              /*  var val = localStorage.getItem("favorites");
                val += "-"+film;
                localStorage.setItem("favorites",val);*/
            }else{
               
                localStorage.setItem(key,"YES");
            }

            //alert(localStorage.getItem(film));
        } 
}