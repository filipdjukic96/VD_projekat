/*IZ NEKOG RAZLOGA COOKIE NE RADI U CHROME, POGLEDATI I RIJESITI, U MOZILI RADI SVE FUL */
/*
function setCookie(cname,cval){
    alert("postavlja cookie: "+cname+"="+cval);
    document.cookie = cname+"="+cval;
    alert("size novi: "+document.cookie.length);
 }

function getCookie(c_name){
        alert("usao u get cookie");
        alert("size:"+document.cookie.length);
        if (document.cookie.length>0)    // document.cookie je vrednost cookie-ja kojoj se pristupa kao stringu
        { 
                c_start=document.cookie.indexOf(c_name + "=")  // indexOf nalazi poziciju prvog pojavljivanja specificirane vrednosti u stringu
                if (c_start!=-1)   // -1 se vraca ako se specificirana vrednost nigde u stringu ne pojavljuje
                { 
                c_start=c_start + c_name.length+1    //username=sofija c_start je 0 u c_start stavljamo poziciju prvog karaktera vrednosti cookie-a
                c_end=document.cookie.indexOf(";",c_start)  // nalazi prvo pojavljivanje ; pocevsi pretrazivanje stringa od pozicije c_start
                if (c_end==-1) c_end=document.cookie.length // ako je to jedini cookie onda nemamo ;
                    
                alert("vraca cookie:"+document.cookie.substring(c_start,c_end));
                return document.cookie.substring(c_start,c_end)  // nalazi podstring od stringa pocev od pozicije c_start do c_end (ne ukljucuje karakter na poziciji c_end)
                   
                } 
        }
        alert("prazan cookie");
        return null
        
        
}
*/


 function ticketReservation(){
              var film = document.ticketForm.movieName.value;
             // alert(film);
            

              var ime = document.ticketForm.name.value;
              //alert(ime);
             if(ime=="") return;
             var regime = /^(\w{3,})$/;
             if(!regime.test(ime)) alert("ime nije ok");


              var prezime = document.ticketForm.surname.value;
              //alert(prezime);
              if(prezime=="") return;
              var regprezime = /^(\w{3,})$/;
             if(!regprezime.test(prezime)) alert("prezime nije ok");


              var email = document.ticketForm.email.value;
             // alert(email);
             if(email=="") return;
             var regemail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
             if(!regemail.test(email)) alert("email nije ok");


              var telefon = document.ticketForm.telephone.value;
              //alert(telefon);
              if(telefon=="") return;
              var regtelefon = /^(\d{10}|\d{3}-\d{3}-\d{4}|\(\d{3}\)\d{3}-\d{4})$/;
             if(!regtelefon.test(telefon)) alert("telefon nije ok");
           // alert("gotov");

            /*
           //rezervisanje
            var numReservation = getCookie(film);//citanje broja rezervacija
            alert("prosao1");
            if(numReservation==null){
                setCookie(film,1);
                alert(film);
                alert("nema cookie");
            }
            else
            {
                var num = parseInt(numReservation,10)+1;
                setCookie(film,num);
                alert("ima cookie");
            }
          */

         if ('localStorage' in window && window.localStorage !== null) {
            if(localStorage.getItem(film) !== null){
                    var val = parseInt(localStorage.getItem(film),10);
                    val++;
                    localStorage.setItem(film,val);
                }else{
                    val = film;
                    localStorage.setItem(film,1);
                }
    
                //alert(localStorage.getItem(film));
            } 

           
          }










