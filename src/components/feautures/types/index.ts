export interface searchMovies{
    Title:string
    Year:string
    Poster:string
    imdbID?:string
}
export interface viewMovieType{
        Title?:string
        Poster?:string
        Awards?:string
        Plot?:string,
        Genre?:string
        Country?:string
        Actors?:string
        Year?:string
        imdbRating?:string
}

export interface initialStateType{
    data:searchMovies[],

    viewMovie:viewMovieType
    resultFilm:number

}
