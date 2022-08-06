
export const fadeAnim = {
    initial: {
        scale: 0.8,
        opacity: 0.4,
        y: 50,
    },
    whileInView: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            duration: 0.3,
        }
    },
    exit: {
        scale: 0.8,
        opacity: 0.5,
        y: -50,
    },

}