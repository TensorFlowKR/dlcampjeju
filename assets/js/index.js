/**
 * @fileOverview JavaScript for index.html (animation + countdown timer)
 * @name index.js
 */
$(function() {
  // Camp Begin Date
  const campBeginDate = new Date("Mon, 2 July 2018 08:00:00 +0900");
  const message =
    "FYI, the camp will begin " + campBeginDate + " at your timezone";
  console.log(message);

  // tick down the hero timer
  initTimer(campBeginDate);
  // smooth scroll link
  initSmoothScroll();
  // add bootstrap class for markdown table
  fixTable();
  // show/hide scroll to top button
  initTopButton();

  // when navigation expand button clicks on mobile screen
  // it should push down the hero image because navigation's position is absolute
  $(".navbar-toggler").click(function() {
    const height = $(".navbar-collapse").height() * 1.5;
    const hero = $(".hero");
    const heroDates = $(".hero__dates");

    if (parseInt(hero.css("padding-top"), 10) > 0) {
      // closing navbar
      hero.animate({ paddingTop: 0 });
      heroDates.fadeIn();
    } else {
      // opening navbar
      hero.animate({ paddingTop: height });
      heroDates.fadeOut();
    }
  });
});

/**
 * Returns how many days/hours/minutes/seconds until dDate
 * @param {Date} dDate d-day Date object
 * @returns {Array<number>} [days, hours, minutes, seconds]
 */
function getDaysHoursSeconds(dDate) {
  // get total seconds between the times
  var delta = Math.abs(dDate - new Date()) / 1000;

  // calculate (and subtract) whole days
  var days = Math.floor(delta / 86400);
  delta -= days * 86400;

  // calculate (and subtract) whole hours
  var hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  // calculate (and subtract) whole minutes
  var minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  // what's left is seconds
  var seconds = Math.floor(delta % 60); // in theory the modulus is not required

  return [days, hours, minutes, seconds];
}

/**
 * Initialize the timer and count it down by 1 second
 * @param {Date} campBeginDate Camp Begin Date object
 */
function initTimer(campBeginDate) {
  setInterval(function() {
    const dateInfo = getDaysHoursSeconds(campBeginDate);
    $(".hero__dates__element").each(function(index, element) {
      $(element)
        .find("h3")
        .text(dateInfo[index]);
    });
  }, 1000);
}

/**
 * Initialize smooth scrolling using jQuery
 */
function initSmoothScroll() {
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          const animation = {
            scrollTop: target.offset().top - 50,
          };
          $("html, body").animate(animation, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          });
        }
      }
    });
}

/**
 * Append a correct bootstrap class to tables created by markdown
 */
function fixTable() {
  $("table")
    .addClass("table")
    .addClass("table-hover");
}

/**
 * Hide/Show a `scroll to top` button according to the user scroll position
 */
function initTopButton() {
  const scrollBtn = $("#scroll-top");
  scrollBtn.hide();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      scrollBtn.fadeIn(500);
    } else {
      scrollBtn.fadeOut(500);
    }
  });

  scrollBtn.click(function() {
    const topPosition = { scrollTop: 0 };
    $("html, body").animate(topPosition, 1000);
  });
}
