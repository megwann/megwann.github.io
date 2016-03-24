$(document).ready(function(){
    
   $.getJSON("jsonDatabase/jason.json",function(data){ 
    
    console.dir(data);
       
    var html="";   
       
    $.each(data,function(index, item){
           
           html+='<div class="col-md-4">'+ 
                  '<div class="panel panel-info">'+    //PANEL
                '<div class="panel-heading"> '+item.name+' </div>'+ //PANEL
               
                //'<div class="jasonName"> '+item.name+' </div>'+
                '<div class="jasonGender">'+'Gender: ' +item.gender+' </div>'+
                '<div class="jasonJob">'+'Job: ' +item.job+' </div>'+
                '<img class="jasonImage" src="'+item.image+'"/>';
               // '<div class="commentsContainer">';
               
        
                    $.each(item.comments,function(ind, i){
                      
                            html+= '<div class="panel-body">'+  //PANEL
                                '<div class="fanName">'+'<span class="bold"> Username: </span>' +i.username+' </div>'+
                                '<div class="fanComment">'+'Comment: '+i.comment+'</div>'+
                               
                                
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
              
    
    
    <div class="panel panel-info">
      <div class="panel-heading"></div>
      <div class="panel-body">   
    
    </div>
    </div>
    
*/