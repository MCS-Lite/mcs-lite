// @flow
export const BOTTOM_RIGHT = {
  alignConfig: { points: ['tr', 'br'], offset: [0, 5] },
  transitionConfig: {
    style: {
      transform: 'translateY(-5px)',
    },
    animation: {
      translateY: 0,
      ease: 'easeOutQuart',
    },
  },
};

export const BOTTOM_LEFT = {
  alignConfig: { points: ['tl', 'bl'], offset: [0, 5] },
  transitionConfig: {
    style: {
      transform: 'translateY(-5px)',
    },
    animation: {
      translateY: 0,
      ease: 'easeOutQuart',
    },
  },
};
