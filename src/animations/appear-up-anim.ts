
export const appearUpAnim = {
    initial: {
        y: 50,
        opacity: 0.4,
    },
    whileInView: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 50, duration: 0.2 }
    },
    exit: {
        y: 50,
        opacity: 0.5,
    },
}