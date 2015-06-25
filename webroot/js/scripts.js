$(document).ready(function() {
    $(".head").mouseenter(function() {
        $(".tongue").animate({height: '150px'}, 500);
        $(".tongue").animate({height: '0px'}, 500);
    });

    $("#enter").click(function() {
        $(".tongue").animate({height: '150px'}, 500);

    });

    $("#animate").click(function() {

      $(".head").animate({ backgroundColor: "#FFF", boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)", "width": "50px", "height": "50px", "border-radius": "50%", "position": "absolute", "top": "0", "left": "0", "z-index": "0", "margin": "0", "padding": "0","float": "none"}, 500).delay(600).fadeOut();
      $(".left-eye").animate({ backgroundColor: "#FFF", "width": "50px", "height": "50px", "border-radius": "50%", "position": "absolute", "top": "0", "left": "0", "z-index": "0", "margin": "0", "padding": "0","float": "none"}, 500).delay(600).fadeOut();
      $(".left-eye-wrapper").animate({ backgroundColor: "#FFF", "width": "50px", "height": "50px", "border-radius": "50%", "position": "absolute", "top": "0", "left": "0", "z-index": "0", "margin": "0", "padding": "0","float": "none"}, 500).delay(600).fadeOut();
      $(".right-eye").animate({ backgroundColor: "#FFF", "width": "50px", "height": "50px", "border-radius": "50%", "position": "absolute", "top": "0", "left": "0", "z-index": "0", "margin": "0", "padding": "0","float": "none"}, 500).delay(600).fadeOut();
    $(".right-eye-wrapper").css({"display": "none"});
      $(".left-nostril").animate({ backgroundColor: "#FFF", "width": "50px", "height": "50px", "border-radius": "50%", "position": "absolute", "top": "0", "left": "0", "z-index": "0", "margin": "0", "padding": "0","float": "none"}, 500).delay(600).fadeOut();
      $(".right-nostril").animate({ backgroundColor: "#FFF", "width": "50px", "height": "50px", "border-radius": "50%", "position": "absolute", "top": "0", "left": "0", "z-index": "0", "margin": "0", "padding": "0","float": "none"}, 500).delay(600).fadeOut();
      $(".pupil").animate({ backgroundColor: "#FFF", "width": "50px", "height": "50px", "border-radius": "50%", "position": "absolute", "top": "0", "left": "0", "z-index": "0", "margin": "0", "padding": "0","float": "none"}, 500).delay(600).fadeOut();
      $(".mouth").animate({ backgroundColor: "#FFF", "width": "50px", "height": "50px", "border-radius": "50%", "position": "absolute", "top": "0", "left": "0", "z-index": "0", "margin": "0", "padding": "0","float": "none"}, 500).delay(600).fadeOut();
      $(".tongue").animate({ backgroundColor: "#FFF", "width": "50px", "height": "50px", "border-radius": "50%", "position": "absolute", "top": "0", "left": "0", "z-index": "0", "margin": "0", "padding": "0","float": "none"}, 500).delay(600).fadeOut();


      // $(".container").delay(600).fadeOut();

      var url = "http://mtm_intern.dev";
      setTimeout(function() {
        window.location.href = "http://mtm_intern.dev";
      }, 700);

      // $(".head").animate({ queue: true, left: '+=50', top: '+=50'}, 1000);
      // $(".mouth").animate({ queue: true, left: '+=50', top: '+=50'}, 1000);
    });
});
