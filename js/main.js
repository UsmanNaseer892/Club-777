jQuery(
  (function ($) {
    "use strict";

    // Header Sticky
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 120) {
        $(".navbar").addClass("is-sticky");
      } else {
        $(".navbar").removeClass("is-sticky");
      }
    });

    // Header Nav Toggle Btn
    $(".header-navbtn").click(function () {
      $(this).toggleClass("active");
    });

    // Go to Top
    $(function () {
      // Scroll Event
      $(window).on("scroll", function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 600) $(".go-top").addClass("active");
        if (scrolled < 600) $(".go-top").removeClass("active");
      });
      // Click Event
      $(".go-top").on("click", function () {
        $("html, body").animate({ scrollTop: "0" }, 500);
      });
    });

    AOS.init();
  })(jQuery)
);
