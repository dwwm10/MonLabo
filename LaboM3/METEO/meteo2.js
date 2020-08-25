$(document).ready(function(){

    var latitude;
    var longitude;

    /*
        const apiUrl = "http://api.openweathermap.org/data/2.5/weather?";
        const keyApi = "97c5b5c6988c53e45279eafb74667454";
        var url;
    */


    //Vérification du service de géolocalisation 

    if(navigator.geolocation){

        //Je récupere les coordonnées fournies par le navigateur avec l'accord de l'utilisateur 
        navigator.geolocation.getCurrentPosition(function(position){

            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            console.log("longitude = " + longitude +  " latitude = " + latitude);
            // url = `${apiUrl}lat=+${latitude}&lon=${longitude}&appid=${keyApi}&lang=fr&units=metric`;

            //TEST ------------------------------------
            // latitude = 35.689487;
            // longitude = 139.691706;
            //FIN TEST ----------------------------------
           

            //je demande à l'api les données requete ajax
            $.getJSON(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=97c5b5c6988c53e45279eafb74667454&lang=fr&units=metric`,function (data) {
                console.log(data);

                var temp = Math.round(data.main.temp);
                var tempMax =Math.round(data.main.temp_max);
                var tempMin =Math.round(data.main.temp_min);
                var codeIconMeteo = data.weather[0].icon



                //Modification elements HTML
                $(".meteoVille").text(data.name);
                $(".description-weather").text(data.weather[0].description);
                $(".température").text(temp + "c°");
                $(".tempMax").text(tempMax + "c°");
                $(".tempMin").text(tempMin + "c°");
                $(".imgMeteo").attr("src",`http://openweathermap.org/img/wn/${codeIconMeteo}.png`);



            })




        }, function(){

            $(".meteoVille").text("Indisponnible !");
            $(".description-weather").text("Vous devez autoriser la géolocalisation pour que le service fonctionne.");
            // $(".imgMeteo").hide();
            $(".imgMeteo").attr("src","./iconGeolocationIndisponnible.png").width(150).heigth(150);

            console.error("L'utilisateur a refusé la demande de géolocalisation.");

        })

    }else{

        $(".meteoVille").text("Indisponnible !");
        $(".description-weather").text("La géolocalisation n'est pas disponnible sur ce navigateur");
        $(".imgMeteo").attr("src","./iconGeolocationIndisponnible.png").width(150).heigth(150);

        console.error("La géolocalisation n'est pas disponnible sur ce navigateur");
    }
    
    

   
    



    // `${apiUrl}lat=+${latitude}&lon=${longitude}&appid=${keyApi}&lang=fr&units=metric`;




    
});