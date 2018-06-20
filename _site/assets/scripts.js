$( document ).ready(function() {
  $("#panel-nav-icon").click(
    function() {
      $( '#menu' ).toggle(400);
    }
  );
  $("#panel-back-icon").click(
    function() {
      parent.history.back();
      return false;
    }
  );

    // Open Lightbox
    $('.lightbox > a').on('click', function(e) {
      e.preventDefault();
      var image = $(this).attr('href');
      $('html').addClass('no-scroll');
      $('body').append('<div class="lightbox-opened"><img src="' + image + '"></div>');
    });

    // Close Lightbox
      $('body').on('click', '.lightbox-opened', function() {
      $('html').removeClass('no-scroll');
      $('.lightbox-opened').remove();
    });

});
