(function(window, document, $, undefined) {

  $(function() {
    var startDate = new Date(2017, 10, 10, 0, 0, 0).getTime(),
      endDate = new Date(2017, 10, 10, 23, 59, 59).getTime(),
      currDate = new Date().getTime(),
      maskElem = fnCreateMask();

    if (currDate >= startDate && currDate <= endDate) {
      $('body').append(maskElem);
    }
  });

  function fnCreateMask() {
    var maskDom = document.createElement('div');
    maskDom.id = 'maskShoppingDay';

    var bodyDom = document.createElement('div');
    bodyDom.className = 'mask-body';

    var linkDom = document.createElement('a');
    linkDom.className = 'btn-shopping';
    linkDom.href = 'http://www.incake.net/activity/11.aspx';

    bodyDom.appendChild(linkDom);
    maskDom.appendChild(bodyDom);

    return maskDom;
  }

})(window, document, jQuery);