window.addEventListener('scroll', function() {
  if (scrollY  > 100) {
    document.querySelector('.container-header').classList.add('active')
  } else {
    document.querySelector('.container-header').classList.remove('active')
  }
})

// $(window).on("scroll", function() {
//   $(селектор header).toggleClass("active", $(this).scrollTop() > $(window).height());
// });