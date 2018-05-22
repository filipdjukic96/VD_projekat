

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


            //povecavanje broja rezervacija
           if ('localStorage' in window && window.localStorage !== null) {
            if(localStorage.getItem(film) !== null){
                    var num = parseInt(localStorage.getItem(film), 10)+ 1;
                    localStorage.setItem(film,num);
                }else{
                    localStorage.setItem(film,1);
                }

                //alert(localStorage.getItem(film));
            } 

           
          }