function addToFavorites(){
    var film = document.ticketForm.movieName.value;
    
    if ('localStorage' in window && window.localStorage !== null) {
        if(localStorage.getItem("favorites") !== null){
                var val = localStorage.getItem("favorites");
                val += "-"+film;
                localStorage.setItem("favorites",val);
            }else{
                val = film;
                localStorage.setItem("favorites",film);
            }

            //alert(localStorage.getItem(film));
        } 
}