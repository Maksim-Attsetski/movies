

export const getFilmDuration = (duration: number): string => {
    const hour: any = Math.floor(duration / 60)
    const min: number = Math.round(duration % 60)

    const minutes: string = min > 9 ? `${min}` : `0${min}`

    return `${hour} : ${minutes}`
}