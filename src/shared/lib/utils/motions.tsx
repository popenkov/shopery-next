'use client';

import { motion, Variants } from 'framer-motion';
import { ElementType, FC } from 'react';
import { useInView } from 'react-intersection-observer';

const fadeInVariants = {
  hidden: { opacity: 0, y: 2 },
  visible: { opacity: 1, y: 0 },
};

export const FadeIn = <T extends ElementType>({
  as,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, 'as'> & {
  as?: T;
}) => {
  // @ts-ignore
  const Component = as ? motion[as] : motion.div;
  const [vRef, inView] = useInView({ triggerOnce: true });

  return (
    <Component
      variants={fadeInVariants}
      initial="hidden"
      ref={vRef}
      animate={inView ? 'visible' : ''}
      transition={{
        ease: 'easeInOut',
        duration: 0.7,
      }}
      {...props}
    />
  );
};

const SlideInVariants = {
  hidden: { opacity: 0, y: -4 },
  visible: { opacity: 1, y: 0 },
};

export const SlideIn = <T extends ElementType>({
  as,
  shouldDelay,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, 'as'> & {
  as?: T;
  shouldDelay: boolean;
}) => {
  // @ts-ignore
  const Component = as ? motion[as] : motion.div;
  const [vRef, inView] = useInView({ triggerOnce: true });
  return (
    <Component
      variants={SlideInVariants}
      initial="hidden"
      ref={vRef}
      animate={inView ? 'visible' : ''}
      transition={{
        ease: 'easeInOut',
        duration: 0.7,
        delay: shouldDelay ? 0.7 : 0,
      }}
      {...props}
    />
  );
};

const SlideLeftVariants = {
  hidden: { opacity: 0, x: 10 },
  visible: { opacity: 1, x: 0 },
};

export const SlideLeft = <T extends ElementType>({
  as,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, 'as'> & {
  as?: T;
}) => {
  // @ts-ignore
  const Component = as ? motion[as] : motion.div;
  const [vRef, inView] = useInView({ triggerOnce: true });
  return (
    <Component
      variants={SlideLeftVariants}
      initial="hidden"
      ref={vRef}
      animate={inView ? 'visible' : ''}
      transition={{
        ease: 'easeInOut',
        duration: 0.3,
      }}
      {...props}
    />
  );
};

type Props = {
  children: React.ReactNode;
  as?: ElementType;
  className?: string;
};

const onScrollVariants: Variants = {
  offscreen: {
    opacity: 0,
    scale: 0.5,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export const CardRevealingOnScroll: FC<Props> = ({ children }) => {
  return (
    <motion.div
      variants={onScrollVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const TypingTextVariants = {
  hidden: { opacity: 0, x: 10 },
  visible: { opacity: 1, x: 0 },
};

export const TypingText = <T extends ElementType>({
  as,
  text,
}: Omit<React.ComponentPropsWithoutRef<T>, 'as'> & {
  as?: T;
}) => {
  // @ts-ignore
  const Component = as ? motion[as] : motion.span;
  const [ref, inView] = useInView({ triggerOnce: true });

  const textToType: string[] = text.split(' ');

  return (
    <Component ref={ref}>
      {textToType.map((el, i) => (
        <motion.span
          variants={TypingTextVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{' '}
        </motion.span>
      ))}{' '}
    </Component>
  );
};
