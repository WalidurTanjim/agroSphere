import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ScrollReveal = ({
    children,
    direction = "up",
    delay = 0,
    duration = 0.8,
    distance = 60,
    scale = 1,
    blur = false,
}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const getOffset = () => {
        switch (direction) {
            case "up":
                return { y: distance };
            case "down":
                return { y: -distance };
            case "left":
                return { x: distance };
            case "right":
                return { x: -distance };
            default:
                return {};
        }
    };

    const variants = {
        hidden: {
            opacity: 0,
            scale: 0.95,
            filter: blur ? "blur(10px)" : "none",
            ...getOffset(),
        },
        visible: {
            opacity: 1,
            scale: scale,
            x: 0,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1], // Custom cubic bezier ease
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            style={{ willChange: "opacity, transform, filter", perspective: 1000 }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
