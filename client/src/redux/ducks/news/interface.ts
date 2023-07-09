
export interface INews {
    id: number,
    title: string,
    description: string,
    date: string
}
export interface ICurrentNews {
    id: number,
    title: string,
    content: string,
    date: string
}


export interface INewsState {
    newsList: INews[],
    loading: boolean,
    openedNews: ICurrentNews | undefined
}
