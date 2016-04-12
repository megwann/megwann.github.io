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
     
         //retreiving the html page content 
     $("#pageContent").html(data);
         
         //adding in carousel 
         $('.carousel').carousel()
     })   
        
     
       // ++++++++++++++++++++ END HOME PAGE ++++++++++++++++++++++++
     
     
     
     
     
       // ++++++++++++++++++++ GET Trailer PAGE ++++++++++++++++++++++++
     
    }else if (partial =="harryPage"){
    
        
        
     $.get("partials/harry.html", function (data){
     
     $("#pageContent").html(data);
         
         
         
     })
     
       // ++++++++++++++++++++ GET VIEW PAGE ++++++++++++++++++++++++
    
    }else if (partial =="viewPage"){
                
        // get view.html
        


         $.getJSON("jsonDatabase/final.json", function(data){ 
            
       
    var html="";   
       
    $.each(data,function(index, item){
           
           html+='<div id="hpview" class="col-md-4">'+ 
                  '<div class="panel panel-warning">'+    //PANEL - Adding yellow panel around each movie listing 
                '<div class="panel-heading"> '+item.title+' </div>'+ //PANEL - header of panel- movie title 
               
                //'<div class="jasonName"> '+item.name+' </div>'+
                '<img class="harryImage" src="'+item.image+'"/>'+ //Adding in image 
               
                      '<div class="harryPrice">'+'<span class="bold">Price: </span>' +item.price+' </div>'+  //adding price 
               
               
               '<div class="harryDirector">'+'<span class="bold">Director: </span>' +item.director+' </div>'+ //adding director 
                '<div class="harryYear">'+'<span class="bold">Year: </span>' +item.year+' </div>'+ //adding year of film 
            
               '<div class="description">'+'<span class="bold">Description: </span>' +item.description+' </div>' // adding description of film 
           
           
           
                ;
               // COMMENTS 
               
        
                    $.each(item.comments,function(ind, i){
                      
                            html+= '<div class="panel-body">'+  //PANEL
                                '<div class="fanName">'+'<span class="bold"> </span>' +i.username+' </div>'+ //Name of Rater 
                                
                    
                                
                                '<div class="renterStars">'+  //adding stars 
                        
                                '</div>';
                            
                        var numStars = Number(i.stars);
                        
                        for(var i =1; i <= 10; i++){  //out of 10 stars 
                            
                            if(i <= numStars){
                             html+='<img src="images/star.png">';  //full star image 
                            }
                            else{
                             html+='<img src="images/blank.png">';  //empty star image 
                            }
                        }
                        html+='</div>';
                        
                    })
           html+='</div>'+'</div>';
           
           })//each Jason
    
$("#pageContent").html(html);
    
})
    //})
    

        // ++++++++++++++++++++ END VIEW PAGE ++++++++++++++++++++++++    
               
               
               
               
         
         
         
               
               
        // ++++++++++++++++++++ BEGIN ORDER PAGE ++++++++++++++++++++++++   
         
         
         
    }else if (partial == "orderPage") { // get order.html
                $.get("partials/order.html", function(data) {

                        $("#pageContent").html(data);

          //This mouseenter event make the Submit Button read other message on the button when the customer is hovering over it!             
                        $("#submitButton").on("mouseenter", function() {
      $("#log").append("<br>Button mouseenter");
      $(this).text("Give It Here Maulfoy!");
    })
 
    .on("mouseleave", function() {
      $("#log").append("<br>Button mouseleave");
      $(this).text("Order Now!");
    });
                    
                    
              //IF the customer does not fill out all the imputs on order page, each box not filled out with turn red and not submit       
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

    // Confirmation function, telling the customer thank you for there order and telling them what they ordered. Along with an image. 
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
            $("#successMsg").html("You're A Wizard!<br/><br/>" + " Thank You for Ordering" + order.harrySelect +
              "<img id='dh' src='images/DH.png'>");




      
         // ++++++++++++++++++++ END ORDER PAGE ++++++++++++++++++++++++    

}       
       // begin program 
    getPartial("homePage");   
       // end begin program 
  
})
