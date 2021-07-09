export const parentVarient = {
  initial: {
    transition: {
      when: "beforeChildren",
    },
  },
  animated: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const spanVarient = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animated: {
    y: 0,
    opacity: 1,
  },
};

export const nameVarient = {
  initial: {
    y: 10,
    opacity: 0,
  },
  animated: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
};
