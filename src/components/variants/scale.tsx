export const Scale = (type: 'tween' | 'spring' | string, delay: number) => {
  return {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: type,
        duration: 1.2,
        delay: delay,
        ease: 'ease',
        bounce: 0.6,
      },
    },
  };
};
