type TagProps = {
    _id: string,
    name: string
}

type AuthorProps = {
    _id : string,
    name: string,
    image: string
}
 
type QuestionProps = {
    _id: string,
    title: string,
    tags: TagProps[],
    author: AuthorProps[],
    createdAt: Date,
    upvotes: number,
    answers: number,
    views: number,
}