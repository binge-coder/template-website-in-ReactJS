import { motion, useScroll, useSpring } from "framer-motion";

const ScrollLine = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
  return (
    <motion.div className="sticky bg-accent top-0 left-0 right-0 h-2 origin-left" style={{ scaleX }} />
  )
}

export default ScrollLine