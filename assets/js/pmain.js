$(document).ready(function(){
    $(".cube").css({"animation-play-state":"paused"});

$(".cubeWrap").hover(function(){
    
    $(".cube").css({"animation-play-state":"running"});
        
    
}, function(){
    $(".cube").css({"animation-play-state":"paused"});
})

/*==================================================================
                Page Transition Animation
============================================================*/

$("body").hide();
$("body").show("slide",{direction:"down"},1000);

/*=============================================================
==============================================================*/

});




