$(document).ready(function(){

 //get all teh nav li, click event
   $(".nav").find("li").on("click",function(){

       //remove all active class
  $(".nav").find("li").removeClass("active");
       //add active class to clicked li
       $(this).addClass("active");

    var page =$(this).attr("id");
       getPartial(page);

   })     
       
function getPartial(partial) {


    if(partial == "homePage"){ 
        
        //ajax get home.html
    
     $.get("partials/home.html", function (data){
     
     $("#pageContent").html(data);
         $('.carousel').carousel()
     })   
        
    }else if (partial =="viewPage"){
                
        //ajax get view.html
    
        
    }else if (partial =="orderPage"){
    
          //ajax get order.html
        
     $.get("partials/order.html", function (data){
     
     $("#pageContent").html(data);

     })   
        
    }
      
        

}       
       // begin program 
    getPartial("homePage");   
       
  
})
