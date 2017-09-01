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

anime({
  targets: '.sun path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});

var basicTimeline = anime.timeline();

basicTimeline
  .add({
    targets: '.timeline .top',
    translateX: 50,
    easing: 'easeOutExpo'
  })
  .add({
    targets: '.timeline .mid',
    translateX: 250,
    easing: 'easeOutExpo'
  })
  .add({
    targets: '.timeline .bottom',
    translateX: 450,
    easing: 'easeOutExpo'
  });

  var elasticity = anime.timeline();
elasticity.add({
  targets: '.elastic .six', translateY: 250, offset: 0,
  duration: 3000,
  elasticity: 0,
})
.add({
  targets: '.elastic .seven', translateY: 250, offset: 0,
  duration: 3000,
  elasticity: 100,
})
.add({
  targets: '.elastic .eight', translateY: 250, offset: 0,
  duration: 3000,
  elasticity: 200,
})
.add({
  targets: '.elastic .nine', translateY: 250, offset: 0,
  duration: 3000,
  elasticity: 300,
})
.add({
  targets: '.elastic .ten', translateY: 250, offset: 0,
  duration: 3000,
  elasticity: 400,
})
.add({
  targets: '#elasticity .elasticity-500', translateX: 250, offset: 0,
  duration: 3000,
  elasticity: 500,
})
.add({
  targets: '#elasticity .elasticity-600', translateX: 250, offset: 0,
  duration: 3000,
  elasticity: 600,
})
.add({
  targets: '#elasticity .elasticity-700', translateX: 250, offset: 0,
  duration: 3000,
  elasticity: 700,
})
.add({
  targets: '#elasticity .elasticity-800', translateX: 250, offset: 0,
  duration: 3000,
  elasticity: 800,
})
.add({
  targets: '#elasticity .elasticity-900', translateX: 250, offset: 0,
  duration: 3000,
  elasticity: 900,
})
.add({
  targets: '#elasticity .elasticity-1000', translateX: 250, offset: 0,
  duration: 3000,
  elasticity: 1000,
});
