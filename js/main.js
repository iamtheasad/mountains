(function iamStrict() {
   "use strict";
   $(document).ready(function () {
      // Responsive Toggle Menu
      $('.togglemenu').click(function () {
         $('.menu').toggleClass('active');
      });

      /* Scroll to Top Button Start */

      // https://codepen.io/karencho/pen/KIgur
      var topBottomButton = $(".top_bottom_button");

      $(window).scroll(function () {

         var topPosition = $(this).scrollTop();

         if (topPosition > 900) {
            $(topBottomButton).css({
               "opacity": "1",
            })

         } else {
            $(topBottomButton).css({
               "opacity": "0",
            })
         }
      });

      $(topBottomButton).on('click', function () {
         $('html, body').animate({
            scrollTop: 0
         }, 1000);
         return false;
      });

      /* Scroll to Top Button -/ */

   });

})();


