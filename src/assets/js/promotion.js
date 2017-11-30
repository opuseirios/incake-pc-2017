;(function(window, document, $, undefined) {

  $(function() {
    (function fnBuildPromotionMask() {
      var maskElem = document.createElement('div');
      maskElem.className = "promotion-mask";

      var bodyElem = document.createElement('a');
      bodyElem.href = "http://www.incake.net/webnew/list.html";
      bodyElem.className = "mask-body";

      var btnElem = document.createElement('a');
      btnElem.href = "javascript:;";
      btnElem.className = "mask-close";
      btnElem.addEventListener("click", handle4CloseMask, false);
      
      maskElem.appendChild(bodyElem);
      maskElem.appendChild(btnElem);
      $('body').append(maskElem);

      function handle4CloseMask(e) {
        e.preventDefault();
        e.stopPropagation();

        $(maskElem).remove();
      }
    })();
  });

})(window, document, jQuery);