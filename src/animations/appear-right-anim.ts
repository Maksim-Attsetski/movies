
export const appearRightAnim = {
    initial: {
        x: -200,
        opacity: 0.4,
    },
    whileInView: {
        x: 0,
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
        },
    },
    exit: {
        x: 200,
        opacity: 0.5,
    },
}