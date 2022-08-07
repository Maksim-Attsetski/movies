
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
    like_count?: number,
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
    torrents: ITorrent[]
    url: string,
    year: number,
    yt_trailer_code: string,
}

export interface ITorrent {
    date_uploaded: string,
    date_uploaded_unix: number
    hash: string,
    peers: number
    quality: string
    seeds: number,
    size: string,
    size_bytes: number,
    type: string,
    url: string,
}

export type sortOptionsType = 'title' | 'year' | 'rating' | 'like_count' | 'download_count'
export type orderByType = 'desc' | 'asc'