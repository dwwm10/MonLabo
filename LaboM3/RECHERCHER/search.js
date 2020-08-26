


//TEST1 -----------------------------------------------------
$(".form-control").on("keyup",function(){

  var search = $(".form-control").val().toLowerCase();
  //console.log(search);

  for (const [key,value] of albums.entries()) {
    
    if(value.titre.toLowerCase().includes(search) ){
      console.log(value.titre);
     $('#affichage').empty();

      
      
    }else{
      
      console.log("");
      
    }
    
    //console.log(element[1].titre);
  }
});

//------------------------------------------------------------------------------------------

/*/TEST2 --------------------------------------------------------------------------------------

//function rechercher() {
  // console.log(this.value);
  //console.log(albums);

  //var result = albums.filter(album => album.titre.toLowerCase().includes(this.value.toLowerCase()));

  // console.log(result);
  


//}
//-----------------------------------------------------------------------------------------------*/
 

/*/ let result = albums.filter(function(el, key, arr){
//   return key + arr;
// })
// console.log(resulut);
// var search ="L'horloger ";

// for (const [key,value] of albums.entries()) {
  
//   if(value.titre.includes(search) ){
//     console.log(value);
//   }
  
//   //console.log(element[1].titre);
// }

// for (const element of albums.keys()) {
//   var album = albums.get(element);
//  var titre = albums.get(element);
  
//   console.log(titre);
  //console.log(element[1].titre);
//}*/

