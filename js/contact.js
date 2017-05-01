var i = 0;
var fontInterval;




$( document ).ready(function() {

    $("#contact_btn").click(function() {
      contactFunc();
    });

    $("#about_btn").click(function() {
      clearInterval(fontInterval);
    });

    $("#home_btn").click(function() {
      clearInterval(fontInterval);
    });

    $("#page-home").click(function() {
      clearInterval(fontInterval);
    });

    $("#page-about").click(function() {
      clearInterval(fontInterval);
    });

    $("#contact_anim").hover(function() {
        console.log("hover");
        clearInterval(fontInterval);
    });

    $("#contact_anim").mouseleave(function() {
      console.log("hover");
        contactFunc();

    });
});

function contactFunc() {
  fontInterval = setInterval(function (){
    switch (i) {
      case 0:
        $("#contact_anim").css({"font-weight":"bold", "font-style" : "normal"});
        $(".mid-span").css({"margin" : "0px -6px 0px -6px"});
        i++;
        break;
      case 1:
        $("#contact_anim").css({"font-weight":"400", "font-style" : "italic"});
        $(".mid-span").css({"margin" : "0px -3px 0px -3px"});
        i++;
      break;
      case 2:
        $("#contact_anim").css({"font-weight":"400", "font-style" : "normal"});
        $(".mid-span").css({"margin" : "0px -3px 0px -3px"});
        i++;
        break;
      case 3:
        $("#contact_anim").css({"font-weight":"bold", "font-style" : "italic"});
        $(".mid-span").css({"margin" : "0px -6px 0px -6px"});
        i++;
      break;
      default:
        i = 0;
      break;
    }
  },200);
}
