
$(document).ready(function () {
   // Responsive Toggle Menu
   $('.togglemenu').click(function () {
      $('.menu').toggleClass('active');
   });

   /* Scroll to Top Button Start */

   // https://codepen.io/karencho/pen/KIgur
   // declare variable
   var topBottomButton = $(".top_bottom_button");

   $(window).scroll(function () {

      // Declare Variable
      var topPosition = $(this).scrollTop(); // scrollTop is a jquery function

      // if user scrolls down - show scroll to top button
      if (topPosition > 900) {
         $(topBottomButton).css({
            "opacity": "1",
         })

      } else {
         $(topBottomButton).css({
            "opacity": "0",
         })
      }
   }); // Scroll End

   //Click event to scroll to top
   $(topBottomButton).on('click', function () {
      $('html, body').animate({
         scrollTop: 0
      }, 1000);
      return false;

   }); // click() scroll top end

   /* Scroll to Top Button -/ */

})
