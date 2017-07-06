(function () {
  'use strict';

  var target = document.querySelector('body');
  var classtoremove = 'edge-design';

  var observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      var elcl = target.classList;
      if (elcl.contains(classtoremove)) {
        elcl.remove(classtoremove);
      }
    });
  });
  var config = {
    attributes: true
  };
  observer.observe(target, config);
}());