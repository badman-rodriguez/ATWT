 import anime from 'animejs'

 anime({
  targets: '.tier-one .start-hour',
  value: 4,
  round: 1,
  duration: 5000
});

anime({
  targets: '.tier-one .end-hour',
  value: 7,
  round: 1,
  duration: 5000
});

anime({
  targets: '.tier-one-image',
  translateX: [
    { value: 100, duration: 1200 },
    { value: 0, duration: 800 }
  ],
  rotate: '1turn',
  backgroundColor: '#FFF',
  duration: 2000
});

var path = anime.path('.numbers path');
var motionPath = anime({
  targets: '.column .square',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 2000,
  loop: true
});


var basicTimeline = anime.timeline();

basicTimeline
  .add({
    targets: '#basicTimeline .square.el',
    translateX: 250,
    easing: 'easeOutExpo'
  })
  .add({
    targets: '#basicTimeline .circle.el',
    translateX: 250,
    easing: 'easeOutExpo'
  })
  .add({
    targets: '#basicTimeline .triangle.el',
    translateX: 250,
    easing: 'easeOutExpo'
  });
