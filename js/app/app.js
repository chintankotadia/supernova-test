(function($) {
  $(document).ready(function() {
    $('.carousel-item').each(function() {
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }

      next.children(':first-child').clone().appendTo($(this));

      next = next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }

      next.children(':first-child').clone().appendTo($(this));
    }).each(function() {
      var prev = $(this).prev();
      var nthChild = 2;

      if (!prev.length) {
        prev = $(this).siblings(':last');
        nthChild = 1;
      }

      prev.children(':nth-child(' + nthChild + ')').clone().prependTo($(this));
    });
  });
})(jQuery);
  