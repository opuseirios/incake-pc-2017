;(function(window, document, $, undefined) {
  $(function() {
    verifyCity() && initCard();
  });

  function verifyCity() {
    var $elem = $('#ulChangeCity').find('li.active');
    return ($elem.attr('citycode') == '021') ? true : false;
  }

  function initCard() {
    var $container = $('<div class="okcard-container"></div>'),
      $big = $('<div class="ok-card-big"><img src="assets/imgs/okcard/icon_big.png" alt="big icon"></div>'),
      $close = $('<a href="javascript:;" class="okcard-close"><img src="assets/imgs/okcard/icon_close.png" alt="close icon"></a>');

    // css properties
    $container.css({
      position: 'fixed',
      bottom: '20px',
      left: '20px',
      zIndex: 999999
    });

    $big.css({
      position: 'relative',
      width: '136px',
      height: '155px',
      padding: '5px',
      'border-radius': '5px',
      'background-color': '#fff'
    });

    $close.css({
      display: 'block',
      position: 'absolute',
      top: '-18px',
      right: '-18px',
      width: '20px',
      height: '20px'
    });

    // append to body
    $big.append($close);
    $container.append($big);
    $(document.body).append($container);

    $close.on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      $big.fadeOut();
    });
  }
})(window, document, jQuery);