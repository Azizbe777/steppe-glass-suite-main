import { motion, useScroll, useTransform } from 'framer-motion';

export function BackgroundParallax() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, -120]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0.85]);

  return (
    <motion.div
      aria-hidden
      style={{ y, opacity }}
      className="fixed inset-0 -z-10"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/lovable-uploads/714e553a-f1b8-41a8-a6a4-fb906a5218e6.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px)',
        }}
      />
      <div className="absolute inset-0 bg-background/60" />
    </motion.div>
  );
}
