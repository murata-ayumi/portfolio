export const fadeIn = (
  direction: 'up' | 'down' | 'left' | 'left' | string,
  opacity: number,
  type: 'tween' | 'spring' | string,
  delay: number,
  bounce?: number
) => {
  return {
    hidden: {
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: opacity,
      transition: {
        type: type,
        duration: 1.2,
        delay: delay,
        bounce: bounce,
        ease: 'easeInOut',
      },
    },
  };
};
