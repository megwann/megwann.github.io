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
     
     $("#pageContent").html(html);
         $('.carousel').carousel()
     })   
        
    }else if (partial =="viewPage"){
                
        //ajax get view.html
        
        
        
        
        
         $.getJSON("jsonDatabase/final.json",function(data){ 
    
    console.dir(data);
       
    var html="";   
       
    $.each(data,function(index, item){
           
           html+='<div class="col-md-4">'+ 
                  '<div class="panel panel-info">'+    //PANEL
                '<div class="panel-heading"> '+item.name+' </div>'+ //PANEL
               
                //'<div class="jasonName"> '+item.name+' </div>'+
                '<div class="jasonGender">'+'<span class="bold">Gender: </span>' +item.gender+' </div>'+
                '<div class="jasonJob">'+'<span class="bold">Job: </span>' +item.job+' </div>'+
                '<img class="jasonImage" src="'+item.image+'"/>';
               // '<div class="commentsContainer">';
               
        
                    $.each(item.comments,function(ind, i){
                      
                            html+= '<div class="panel-body">'+  //PANEL
                                '<div class="fanName">'+'<span class="bold"> Username: </span>' +i.username+' </div>'+
                                '<div class="fanComment">'+'<span class="bold">Comment: </span>'+i.comment+'</div>'+
                               
                                
                                '<div class="renterStars">'+
                        
                                '</div>';
                            
                        var numStars = Number(i.stars);
                        
                        for(var i =1; i <= 5; i++){
                            
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
    
    $("#jasonData").append(html);
    
})
    
         } 
         
    }else if (partial =="orderPage"){
    
          //ajax get order.html
        
     $.get("partials/order.html", function (data){
     
     $("#pageContent").html(data);

       $("#myButton").on("mouseenter", function() {
      $("#log").append("<br>Button mouseenter");
      $(this).text("Order Now!");
    })
    .on("mouseleave", function() {
      $("#log").append("<br>Button mouseleave");
      $(this).text("Order Now!");
    });


  //change the backgrund color on focus, blue
  $("#mySingleLineText").on("focus", function() {
      $("#log").append("<br>input focus");
      $(this).css("background-color", "#F7F8E0");
    })
    .on("blur", function() {
      $("#log").append("<br>input blur");
      $(this).css("background-color", "#FFF");
    });

  //give the user a message about their selection
  $("#mySelect").on("change", function() {

    var val = $(this).val();
    $("#log").append("<br>select change");
    $("#mySelectMessage").html(val + "");

  });

  //user clicks the button
  $("#myButton").on("click", function() {

    $("#log").append("<br>User clicked the button");

    var userOrder = {};

    userOrder.myInput = $("#mySingleLineText").val();
    userOrder.myTextarea = $("#myTextarea").val();
    userOrder.mySelect = $("#mySelect").val();
    userOrder.myRadio = $("[name='gender']:checked").val();
    userOrder.myCheckValues = [];

    $("[name='vehicle']:checked").each(function() {
      userOrder.myCheckValues.push($(this).val());
    });

    $("#log").append("<br>Value of input is: " + userOrder.myInput);
    $("#log").append("<br>Value of textarea is: " + userOrder.myTextarea);
    $("#log").append("<br>Value of select is: " + userOrder.mySelect);
    $("#log").append("<br>Value of radio button is: " + userOrder.myRadio);
    $("#log").append("<br>Value of checks is: " + userOrder.myCheckValues.join());
    $("#log").append("<br><br>Value of userOrder is: " + JSON.stringify(userOrder));

    /*
        var myInput = $("#mySingleLineText").val();
        var myTextarea = $("#myTextarea").val();
        var mySelect = $("#mySelect").val();
        var myRadio = $("[name='gender']:checked").val();
        var myCheckValues = [];
        //each is a jquery loop for objects/arrays
        //each thing that is selected, do the function
        //"this" is the element we are currently looking at
        $("[name='vehicle']:checked").each(function() {
          myCheckValues.push($(this).val());
        });
        $("#log").append("<br>User clicked the button");
        $("#log").append("<br>Value of input is: " + myInput);
        $("#log").append("<br>Value of textarea is: " + myTextarea);
        $("#log").append("<br>Value of select is: " + mySelect);
        $("#log").append("<br>Value of radio button is: " + myRadio);
        $("#log").append("<br>Value of checks is: " + myCheckValues.join());
    */
  })
  
         
         
     })   
        
    }
      
        

}       
       // begin program 
    getPartial("homePage");   
       
  
})
