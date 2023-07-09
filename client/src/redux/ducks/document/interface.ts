
export interface IDocument {
    id: number,
    title: string,
    content: string,
    date: string
}
export interface ICurrentIDocument {
    id: number,
    title: string,
    content: string,
    date: string
}


export interface IDocumentState {
    documentList: IDocument[],
    loading: boolean,
    openedDocument: ICurrentIDocument | undefined
}
