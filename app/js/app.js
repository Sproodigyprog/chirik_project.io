document.addEventListener("DOMContentLoaded", function() {
  $('.header--burger').click(function(event) {
    $('.header--burger, .header--menu').toggleClass('active');
  })
});
