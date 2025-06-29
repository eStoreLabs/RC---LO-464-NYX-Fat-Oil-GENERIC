(() => {
  function reveal() {
    var reveals = document.querySelectorAll('#es-rc #es-rc-content .es-reveal');
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 25;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('es-active');
      } else {
        reveals[i].classList.remove('es-active');
      }
    }
  }
  window.addEventListener('scroll', reveal);
})();
