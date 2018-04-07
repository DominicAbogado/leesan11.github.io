
$(document).ready(function(){
    /*================================================================
                        Welcome Animation
    ============================================================*/

    $("#introText").hide();
    $("#wrapper").hide();
    $("#introText").show("slide",{direction:"down"},4000,function(){
        $("#introText").hide("slide",{direction:"down"},2000,function(){
            $("#wrapper").show("slide",{direction:"down"},2000);
        });
    });
    /*==========================================================*/


//name animation on page load
$("#name").hide();
$("#name").show("slide",{direction:"left"},2000);
//create minimize button
var canvas=document.getElementById("minimize");
var ctx=canvas.getContext("2d");
canvas.height=40;
canvas.width=40;
ctx.beginPath();
ctx.lineWidth=3;
ctx.moveTo(0,25);
ctx.lineTo(20,10);
ctx.lineTo(40,25);
ctx.strokeStyle="grey";
ctx.stroke();
ctx.closePath();
//create minimize button
var canvas2=document.getElementById("minimize2");
var ctx2=canvas2.getContext("2d");
canvas2.height=40;
canvas2.width=40;
ctx2.beginPath();
ctx2.lineWidth=3;
ctx2.moveTo(0,25);
ctx2.lineTo(20,10);
ctx2.lineTo(40,25);
ctx2.strokeStyle="grey";
ctx2.stroke();
ctx2.closePath();


$("#minimize").click(function(){
    $("#sectionAboutMe").slideToggle("slow");
});

$("#minimize2").click(function(){
    $("#sectionCurrentLearning").slideToggle("slow");
});


/*=============================================================
                        Page Transitions
===============================================================*/

$("a").click(function(event){
    event.preventDefault();
    linkLocation=this.href;
    $("body").hide("slide",{direction:"down"},2000,function(){
    window.location.assign(linkLocation);
    });
/*=======================================================*/

});
});
