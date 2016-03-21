$.get("http://megwann.github.io/partials/nav.html", function (data){

$(document).ready(function(){

$(".container").prepend(data);

    
$(".container").fadeIn();    
    
})
 })


$.get("http://megwann.github.io/partials/getFooter.html",function(foot){
  $(document).ready(function(){
    $(".container").append(foot);
      $(".container").fadeIn();
  })  
})