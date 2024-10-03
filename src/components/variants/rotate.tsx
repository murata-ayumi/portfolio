export const Rotate = (
  direction: 'up' | 'down' | 'left' | 'left' | string,
  opacity: number,
  type: 'tween' | 'spring' | string,
  delay: number
) => {
  return {
    hidden: {
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      opacity: 0,
      rotate: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: opacity,
      rotate: 360,
      transition: {
        type: type,
        duration: 1.2,
        delay: delay,
        ease: 'ease',
      },
    },
  };
};
