$(document).ready(function(){
    console.log('jQuery started');

//skippr plugin
    
$("#theTarget").skippr({
            transition: 'slide',
            speed: 2000,
            easing: 'easeOutQuart',
            autoPlay: true,
            autoPlayDuration: 5000,
            navType: false,
        });
});




