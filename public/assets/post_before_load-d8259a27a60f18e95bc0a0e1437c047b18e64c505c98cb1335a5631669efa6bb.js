$(document).on('page:load', function(){

//$("#comment").hide();
$(".form-group2").hide();
$(".sample1").hide();

$("#add_comment").click( function()
    { 
        $("#comment").show();
        $("#add_comment").hide();
     })   

 $(".button").click( function()
    { 
         $(this).parent().children('.form-group2').show();
         $(this).closest(".well_post").find(".sample").show();
         $(this).hide();
    })
$(".button1").on( 'click',function()
    { 
         $(this).parent().children('.form-group2').show();
         $(this).closest(".well_post").find(".sample").show();
         $(this).hide();
    })
$(".button_pic").on( 'click',function()
    { 
         $(this).parent().children('.well_post').show();
        
         $(this).hide();
    })


    });

