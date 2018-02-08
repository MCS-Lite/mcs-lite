// @flow
export const RIGHT_CENTER = {
  card: {
    alignConfig: { points: ['cl', 'cr'], offset: [12, 0] },
    transitionConfig: {
      style: {
        transform: 'translateX(-6px)',
      },
      animation: {
        translateX: 0,
        ease: 'easeOutQuart',
      },
    },
  },
  arrow: {
    alignConfig: { points: ['cl', 'cr'], offset: [-6, 4] },
    transitionConfig: {
      style: {
        transform: 'translateX(-6px)',
      },
      animation: {
        translateX: 0,
        ease: 'easeOutQuart',
        duration: 350,
      },
    },
  },
};

export const LEFT_CENTER = {
  card: {
    alignConfig: { points: ['cr', 'cl'], offset: [-12, 0] },
    transitionConfig: {
      style: {
        transform: 'translateX(6px)',
      },
      animation: {
        translateX: 0,
        ease: 'easeOutQuart',
      },
    },
  },
  arrow: {
    alignConfig: { points: ['cr', 'cl'], offset: [6, 2] },
    transitionConfig: {
      style: {
        transform: 'translateX(6px)  rotate(180deg)',
      },
      animation: {
        translateX: 0,
        ease: 'easeOutQuart',
        duration: 350,
      },
    },
  },
};

export const TOP_LEFT = {
  card: {
    alignConfig: { points: ['bl', 'tl'], offset: [5, -12] },
    transitionConfig: {
      style: {
        transform: 'translateY(6px)',
      },
      animation: {
        translateY: 0,
        ease: 'easeOutQuart',
      },
    },
  },
  arrow: {
    alignConfig: { points: ['bc', 'tc'], offset: [0, 12] },
    transitionConfig: {
      style: {
        transform: 'translateY(6px) rotate(-90deg)',
      },
      animation: {
        translateY: 0,
        ease: 'easeOutQuart',
        duration: 350,
      },
    },
  },
};

export const TOP_CENTER = {
  card: {
    alignConfig: { points: ['bc', 'tc'], offset: [0, -12] },
    transitionConfig: {
      style: {
        transform: 'translateY(6px)',
      },
      animation: {
        translateY: 0,
        ease: 'easeOutQuart',
      },
    },
  },
  arrow: {
    alignConfig: { points: ['bc', 'tc'], offset: [0, 12] },
    transitionConfig: {
      style: {
        transform: 'translateY(6px) rotate(-90deg)',
      },
      animation: {
        translateY: 0,
        ease: 'easeOutQuart',
        duration: 350,
      },
    },
  },
};

export const TOP_RIGHT = {
  card: {
    alignConfig: { points: ['br', 'tr'], offset: [-5, -12] },
    transitionConfig: {
      style: {
        transform: 'translateY(6px)',
      },
      animation: {
        translateY: 0,
        ease: 'easeOutQuart',
      },
    },
  },
  arrow: {
    alignConfig: { points: ['bc', 'tc'], offset: [0, 12] },
    transitionConfig: {
      style: {
        transform: 'translateY(6px) rotate(-90deg)',
      },
      animation: {
        translateY: 0,
        ease: 'easeOutQuart',
        duration: 350,
      },
    },
  },
};

export const BOTTOM_CENTER = {
  card: {
    alignConfig: { points: ['tc', 'bc'], offset: [0, 12] },
    transitionConfig: {
      style: {
        transform: 'translateY(-6px)',
      },
      animation: {
        translateY: 0,
        ease: 'easeOutQuart',
      },
    },
  },
  arrow: {
    alignConfig: { points: ['tc', 'bc'], offset: [0, -7] },
    transitionConfig: {
      style: {
        transform: 'translateY(-6px) rotate(90deg)',
      },
      animation: {
        translateY: 0,
        ease: 'easeOutQuart',
        duration: 350,
      },
    },
  },
};

export const BOTTOM_RIGHT = {
  card: {
    alignConfig: { points: ['tr', 'br'], offset: [-5, 12] },
    transitionConfig: {
      style: {
        transform: 'translateY(-6px)',
      },
      animation: {
        translateY: 0,
        ease: 'easeOutQuart',
      },
    },
  },
  arrow: {
    alignConfig: { points: ['tc', 'bc'], offset: [0, -7] },
    transitionConfig: {
      style: {
        transform: 'translateY(-6px) rotate(90deg)',
      },
      animation: {
        translateY: 0,
        ease: 'easeOutQuart',
        duration: 350,
      },
    },
  },
};

export const BOTTOM_LEFT = {
  card: {
    alignConfig: { points: ['tl', 'bl'], offset: [5, 12] },
    transitionConfig: {
      style: {
        transform: 'translateY(-6px)',
      },
      animation: {
        translateY: 0,
        ease: 'easeOutQuart',
      },
    },
  },
  arrow: {
    alignConfig: { points: ['tc', 'bc'], offset: [0, -7] },
    transitionConfig: {
      style: {
        transform: 'translateY(-6px) rotate(90deg)',
      },
      animation: {
        translateY: 0,
        ease: 'easeOutQuart',
        duration: 350,
      },
    },
  },
};
