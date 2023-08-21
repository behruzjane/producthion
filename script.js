$(document).ready(function(){
    $('.ki').on("click",function(){
      $('.overlay').show(1000);
    });
    
    $('.popup-close').on("click",function(){
     $('.overlay').hide(1000);
    });
    $('.zak').on("click",function(){
      $('.overlay1').show(1000);
    });
    $('.popup-close1').on("click",function(){
     $('.overlay1').hide(1000);
    });


    $('.pf2').on("click",function(){
      $('.pff').show(400);
      $('.pf2').hide(400);
    });

    $('.maes').on("click",function(){
      $('.overlay3').show(300);
    });
    $('.popup-close3').on("click",function(){
      $('.overlay3').hide(300);
    });
    
    $('.ki1').on("click",function(){
      $('.overlay4').fadeIn(700);
    });
    $('.popup-close4').on("click",function(){
      $('.overlay4').hide(700);
    });

    $('.ki4').on("click",function(){
      $('.overlay5').show(700);
    });
    $('.popup-close5').on("click",function(){
      $('.overlay5').hide(700);
    });





    $('.ona').on("click",function(){
      $('.ots').show();
      $('#carouselExampleDark3').hide();
    });
    $('.ona').on("click",function(){
      $('.ots').show();
      $('.go').hide();
    });

    $('.gla').on("click",function(){
      $('#carouselExampleDark3').show();
      $('.ots').hide();
    });
    $('.gla').on("click",function(){
      $('.go').show();
      $('.ots').hide();
    });
    $('.ona').on("click",function(){
      $('.ots').show();
      $('.service').hide();
    });

    $('.cv').on("click",function(){
      $('.go').hide();
    });
    
    $('.ona').on("click",function(){
      $('.go1').show();
      $('.go').hide();
    });
    $('.ona').on("click",function(){
      $('#carouselExampleDark5').hide();
      $('.dd').hide();
      $('.nm').hide();
      $('.bigt').hide();
    });
  
 });





















