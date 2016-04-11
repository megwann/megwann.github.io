$(document).ready(function(){

 //get all the nav li, click event
   $(".nav").find("li").on("click",function(){

       //remove all active class
  $(".nav").find("li").removeClass("active");
       //add active class to clicked li
       $(this).addClass("active");

    var page =$(this).attr("id");
       getPartial(page);

   })    
       
function getPartial(partial) {

//console.log('hello' + partial) 

    if(partial == "homePage"){ 
        
        //ajax ++++++++++++++++++++ GET HOME PAGE ++++++++++++++++++++++++
    
     $.get("partials/home.html", function (data){
     
     $("#pageContent").html(data);
         $('.carousel').carousel()
     })   
        
     
       //ajax ++++++++++++++++++++ END HOME PAGE ++++++++++++++++++++++++
     
     
     
     
     
       //ajax ++++++++++++++++++++ GET VIEW PAGE ++++++++++++++++++++++++
     
    }else if (partial =="harryPage"){
    
        
        
     $.get("partials/harry.html", function (data){
     
     $("#pageContent").html(data);
         
         
         
     })
    
    }else if (partial =="viewPage"){
                
        //ajax get view.html
        
//$.get("partials/view.html", function (data){  

         $.getJSON("jsonDatabase/final.json", function(data){ 
             
 // $.get("partials/view.html", function (data){  })
     
// $("#pageContent").html(html);
  //$("#pageContent").html(data);
       
            
  //  console.dir(data);
       
    var html="";   
       
    $.each(data,function(index, item){
           
           html+='<div class="col-md-4">'+ 
                  '<div class="panel panel-warning">'+    //PANEL
                '<div class="panel-heading"> '+item.title+' </div>'+ //PANEL
               
                //'<div class="jasonName"> '+item.name+' </div>'+
                '<img class="harryImage" src="'+item.image+'"/>'+
               
                      '<div class="harryPrice">'+'<span class="bold">Price: </span>' +item.price+' </div>'+
               
               
               '<div class="harryDirector">'+'<span class="bold">Director: </span>' +item.director+' </div>'+
                '<div class="harryYear">'+'<span class="bold">Year: </span>' +item.year+' </div>'+
            
               '<div class="description">'+'<span class="bold">Description: </span>' +item.description+' </div>'
           
           
           
                ;
               // '<div class="commentsContainer">';
               
        
                    $.each(item.comments,function(ind, i){
                      
                            html+= '<div class="panel-body">'+  //PANEL
                                '<div class="fanName">'+'<span class="bold"> </span>' +i.username+' </div>'+
                                
                    
                                
                                '<div class="renterStars">'+
                        
                                '</div>';
                            
                        var numStars = Number(i.stars);
                        
                        for(var i =1; i <= 10; i++){
                            
                            if(i <= numStars){
                             html+='<img src="images/star.png">';
                            }
                            else{
                             html+='<img src="images/blank.png">';
                            }
                        }
                        html+='</div>';
                        
                    })
           html+='</div>'+'</div>';
           
           })//each Jason
    
$("#pageContent").html(html);
    
})
    //})
    

        //ajax ++++++++++++++++++++ END VIEW PAGE ++++++++++++++++++++++++    
               
               
               
               
         
         
         
               
               
        //ajax ++++++++++++++++++++ BEGIN ORDER PAGE ++++++++++++++++++++++++   
         
         
         
    }else if (partial == "orderPage") { //ajax get order.html
                $.get("partials/order.html", function(data) {

                        $("#pageContent").html(data);

                      
                        $("#submitButton").on("click", function() {

                                //get all empty inputs and select
                                //add error class to div container
                                $("input, select").filter(function() {
                                    return !this.value;
                                }).closest("div").addClass("has-error");

                                //remove error class for non empty ones
                                $("input, select").filter(function() {
                                    return this.value; //removed !
                                }).closest("div").removeClass("has-error");

                                var errors = $(".has-error");

                                if (errors.length < 1) {
                                    //alert("no errors");
                                    sendConfirmation();
                                }

                            }) //click
                    }) //get
            }
            $("#pageContent").fadeIn();

        }

        function sendConfirmation() {
            //make an object to record data for database;
            var order = {};
            //get all teh jquery objects
            var formData = $("input, select");
            //for each jquery object
            formData.each(function() {
                var id = $(this).attr("id");//get the id of the element
                order[id] = $(this).val();//set the field and the value
            })

            alert("Sending to database " + JSON.stringify(order));
            $("#successMsg").html("You're A Wizard!<br/><br/>" + " Thank You for Ordering" + 
              "<img id='dh' src='images/DH.png'>");




      
         //ajax ++++++++++++++++++++ END ORDER PAGE ++++++++++++++++++++++++    

}       
       // begin program 
    getPartial("homePage");   
       
  
})
