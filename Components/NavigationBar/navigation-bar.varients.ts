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

export const linkVarient = {
  initial: {
    x: 20,
    opacity: 0,
  },
  animated: {
    x: 0,
    opacity: 1,
  },
};
