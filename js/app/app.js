(function($) {
  var $carousel = $('.carousel__half-slides'),
    $items = $carousel.find('.carousel-item'),
    length = $items.length,
    current = 1,
    first = $items.filter(':first-child'),
    second = $items.filter((i) => i == 1),
    last = $items.filter(':last-child'),
    secondLast = $items.filter((i) => i == $items.length - 2);

  first.before(secondLast.clone(true));
  first.before(last.clone(true));
  last.after(second.clone(true));
  last.after(first.clone(true));

  $carousel.on('slide.bs.carousel', function(e) {
    var $inner = $('.carousel-inner', this);
    var cycle = false,
      direction = e.direction == 'left' ? 1 : -1,
      carouselWidth = $('.carousel-item', this).outerWidth();

    $inner.animate({left: '+=' +(-carouselWidth * direction)}, function() {
      current += direction;
      cycle = (current === 0 || current > length);

      if (cycle) {
        var offsetWidth = carouselWidth / (window.innerWidth < 768 ? 4 : 2);
        current = (current === 0) ? length : 1;
        $inner.css({left: -carouselWidth * (current + 1) + (offsetWidth)});
      }
    });
  });
})(jQuery);
