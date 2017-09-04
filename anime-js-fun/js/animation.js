import anime from 'animejs';

/* INFO GRAPHIC PAGE */
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
  rotate: '2turn',
  duration: 2000
});

anime({
  targets: '.sun path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function (el, i) { return i * 250; },
  direction: 'alternate',
  loop: true
});

anime.timeline()
  .add({
    targets: '.timeline .top',
    translateX: 50,
    easing: 'easeOutExpo'
  })
  .add({
    targets: '.timeline .mid',
    translateX: 150,
    easing: 'easeOutExpo'
  })
  .add({
    targets: '.timeline .bottom',
    translateX: 250,
    easing: 'easeOutExpo'
  });

anime.timeline().add({
  targets: '.elastic .six', translateY: 250, offset: 0,
  duration: 3000,
  delay: 200,
  rotate: '1turn',
  elasticity: 0
})
.add({
  targets: '.elastic .seven', translateY: 250, offset: 0,
  duration: 3000,
  delay: 800,
  rotate: '2turn',
  elasticity: 100
})
.add({
  targets: '.elastic .eight', translateY: 250, offset: 0,
  duration: 3000,
  delay: 1400,
  rotate: '3turn',
  elasticity: 200
})
.add({
  targets: '.elastic .nine', translateY: 250, offset: 0,
  duration: 3000,
  delay: 2000,
  rotate: '4turn',
  elasticity: 300
})
.add({
  targets: '.elastic .ten', translateY: 250, offset: 0,
  duration: 3000,
  delay: 2600,
  rotate: '5turn',
  elasticity: 400
});

/* INFO GRAPHIC PAGE */

/* BANNER PAGE */
anime({
    targets: '#banner-ad .fa-facebook',
    direction: 'alternate',
    loop: true,
    rotate: '1turn'
});

anime({
    targets: '#banner-ad .fa-twitter',
    translateX: [
        { value: 5 },
        { value: 0 },
        { value: -5 },
        { value: 3 },
        { value: 0 },
        { value: -3 }
    ],
    translateY: [
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 3 },
        { value: 2 },
        { value: 1 },
        { value: 0 },
        { value: -1 },
        { value: -2 },
        { value: -3 },
        { value: -4 }
    ],
    duration: 2000,
    loop: true
});

anime({
    targets: '#banner-ad',
    backgroundColor: [
        { value: '#eee'}, 
        { value: '#7abcff' },
        { value: '#60abf8' },
        { value: '#4096ee' }
    ],
    easing: 'linear',
    duration: 6000,
    loop: true
});
/* BANNER PAGE */