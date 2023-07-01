document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const body = document.querySelector('body');
  
    function changeBackground() {
      sections.forEach(function(section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
  
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
          body.className = section.id;
        }
      });
    }
  
    window.addEventListener('scroll', changeBackground);
  });
  