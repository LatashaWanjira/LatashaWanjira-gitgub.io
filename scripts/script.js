$(document).ready(function() {

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  // Toggle the sideNavMenu
  $('#menuToggle').on('click', function() {
    $('#sideNavMenu').toggleClass("show hide");
    $('#menuToggle i').toggleClass("fa-times fa-bars");
  });
  $('#sideNavMenu li').on('click', function() {
    $('#sideNavMenu').addClass("hide");
    $('#sideNavMenu').removeClass("show");
    $('#menuToggle i').toggleClass("fa-times fa-bars");
  });
  $(window).click(function() {
    if ($("#menuToggle i").hasClass('fa-times')) {
      $("#menuToggle i").toggleClass('fa-times fa-bars');
      $("#sideNavMenu").toggleClass('show hide');
    }
  });
  $('#menuToggle').click(function(event) {
    event.stopPropagation();
  });

  // Adding active class to selected link
  $("#sideNavMenu a").click(function() {
    $(this).addClass("active");
    $("#sideNavMenu a").not(this).removeClass("active");
  })

  // Filtering projects based on skills
  $('.filter-btns li a').click(function() {
    var ourClass = $(this).attr('class');
    $('.filter-btns li').removeClass('active-btn');
    $(this).parent().addClass('active-btn');
    if (ourClass == 'all') {
      $('.project-cards').children('div.project-card').show();
    } else {
      $('.project-cards').children('div:not(.' + ourClass + ')').hide();
      $('.project-cards').children('div.' + ourClass).show();
    }
    return false;
  });
});
