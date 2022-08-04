
export interface IMovie {
    background_image: string,
    background_image_original: string,
    date_uploaded: string,
    date_uploaded_unix: number,
    description_full: string,
    genres: string[],
    id: number,
    imdb_code: string
    language: string,
    large_cover_image: string,
    medium_cover_image: string,
    mpa_rating: string,
    rating: number,
    runtime: number
    slug: string,
    small_cover_image: string,
    state?: string,
    summary: string,
    synopsis: string,
    title: string,
    title_english: string,
    title_long: string,
    torrents: any[]
    url: string,
    year: number,
    yt_trailer_code: string,
}

// export interface IMovie {
//     alternativeName: any
//     description: string,
//     enName: any,
//     externalId: { imdb: any, _id: string, },
//     id: 471696
//     movieLength: number,
//     name: string,
//     names: any[],
//     0: {_id: string, name: string},
//     length: 1,
//     poster: {
//         previewUrl: string,
//         url: string,
//         _id: string,
//     },
//     url: string,
//     _id: string,
//     rating: IRating,
//     shortDescription: any
//     type: string,
//     votes: IRating,
//     year: number,
// }
//
// interface IRating {
//     await: number,
//     filmCritics: number,
//     imdb: number,
//     kp: number,
//     russianFilmCritics: number,
//     _id: string,
// }