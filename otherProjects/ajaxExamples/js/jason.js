$(document).ready(function(){
    
   $.getJSON("jsonDatabase/jason.json",function(data){ 
    
    console.dir(data);
       
    var html="";   
       
    $.each(data,funcation(index, item){
           
           html+='<div class="cold-md-4">'+ 
                '<div class="jasonName"> '+item.name+' </div>+
                '<div class="jasonGender"> '+item.gender+' </div>'+
                '<div class="jasonJob">'+item.job+' </div>'+
                '<img src="'+item.image+'"/>';
          
           html+='</div>';
           
           })//each Jason
    
    $("#jasonData").append(html);
    
})
})


/* 
//1 per Jason
<div class="cold-md-4"> 
    <div class="jasonName"> </div>
    <div class="jasonGender"> </div>
    <div class="jasonJob"> </div> 
    <img src=""/> 
        <div class="commentsContainer">
            //one per comment 
            
            <div class="renterName"></div>
             <div class="renterLocation"> </div>
              <div class="renterStars"> </div> 
              // 5 stars, some full some emty 
              </div> // end stars 
              </div>  //end commentt contairner 
              </div> 
              //end jason 
              
    
*/