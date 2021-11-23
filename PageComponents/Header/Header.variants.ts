export const parentVariant = {
  initial: {
    opacity: 0,
    when: 'beforeChildren',
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const childVariant = {
  initial: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
