$(document).ready(function () {
  $(window).on('load', function () {
    $('.preloader').addClass('complete');
  });
  $(window).on('scroll', function () {
    let scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $('.sticky').addClass('sticky-add');
    } else {
      $('.sticky').removeClass('sticky-add');
    }
  });

  const type = new Typed('.element', {
    strings: [
      'Chukwu Innocent',
      'a Developer',
      'a DevOps Engineer',
      'a Cloud Practitioner',
    ],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
    startDelay: 1000,
  });

  //   progress bars

  const waypoint = new Waypoint({
    element: document.getElementById('exp-id'),
    handler: function () {
      const p = document.querySelectorAll('.progress-bar');
      p[0].setAttribute('style', 'width:95%; transition: 1s all');
      p[1].setAttribute('style', 'width:80%; transition: 1.5s all');
      p[2].setAttribute('style', 'width:75%; transition: 1.7s all');
      p[3].setAttribute('style', 'width:65%; transition: 2s all');
      p[4].setAttribute('style', 'width:75%; transition: 2.3s all');
      p[5].setAttribute('style', 'width:70%; transition: 2.5s all');
      p[6].setAttribute('style', 'width:80%; transition: 2.7s all');
    },
    offset: '90%',
  });

  //   filters
  const filterized = $('.filter-container').filterizr({
    animationDuration: 0.5,
  });

  // copy date
  const date = new Date().getFullYear();
  $('.time').append(date);
});
