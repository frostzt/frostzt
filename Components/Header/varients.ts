export const contentVarient = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0,
    },
  },
  animated: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

export const headingVarient = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animated: {
    y: 0,
    opacity: 1,
  },
};
