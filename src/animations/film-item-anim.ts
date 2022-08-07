
export const filmItemAnim = {
    initial: {
        x: -50,
        opacity: 0.3,
    },
    whileInView: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            duration: 0.15,
        }
    },
}