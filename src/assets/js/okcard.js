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
      $small = $('<div class="okcard-small"><img src="assets/imgs/okcard/icon_small.png" alt="small icon"></div>'),
      $big = $('<div class="ok-card-big"><img src="assets/imgs/okcard/icon_big.png" alt="big icon"></div>'),
      $close = $('<a href="javascript:;" class="okcard-close"><img src="assets/imgs/okcard/icon_close.png" alt="close icon"></a>');

    // css properties
    $container.css({
      position: 'fixed',
      bottom: '10px',
      left: '10px',
      zIndex: 999999
    });

    $small.css({
      width: '44px',
      height: '44px',
      padding: '5px',
      'border-radius': '5px',
      'background-color': '#fff',
      cursor: 'pointer'
    });

    $big.css({
      display: 'none',
      position: 'relative',
      width: '136px',
      height: '180px',
      padding: '5px',
      'margin-left': '-200px',
      'border-radius': '5px',
      'background-color': '#fff'
    });

    $close.css({
      display: 'block',
      position: 'absolute',
      top: '-16px',
      right: '-16px',
      width: '18px',
      height: '18px'
    });

    // append to body
    $big.append($close);
    $container.append($small).append($big);
    $(document.body).append($container);

    // add event listener
    $small.on('click', function(e){
      e.preventDefault();
      e.stopPropagation();

      $(this).hide();
      $big.show().animate({
        'margin-left': '0px'
      });
    });

    $close.on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();

      $big.animate({
        'margin-left': '-200px'
      }, function() {
        $big.hide();
        $small.show();
      });
    });
  }
})(window, document, jQuery);