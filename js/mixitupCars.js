let containerMix1 = document.querySelector('[data-ref="mixCarsAll"]');
let containerMix2 = document.querySelector('[data-ref="mixCarsMercedes"]');

if (containerMix1) {
  mixer = mixitup(containerMix1, {
    selectors: {
      control: '[data-mixitup-control]'
    },
  })
}

if (containerMix2) {
  mixer = mixitup(containerMix2, {
    selectors: {
      control: '[data-mixitup-control]'
    },
  })
}

let mixer1 = mixitup('.cars', {
  animation: {
    duration: 1000,
    applyPerspective: false,
    animateResizeContainer: false,
    clampHeight: false,
    clampWidth: false,
  },

});