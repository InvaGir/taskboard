(function(){
    
    "use strict";
    
    var date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    
    if(dd < 10){
        dd = "0" + dd;
    }
    if(mm < 10){
        mm = "0" + mm;
    }
    
    var currentDate = yyyy + "-" + mm + "-" + dd;
    
    var dateBar = document.getElementById("dateBar").setAttribute("min", currentDate);
    
    
})();