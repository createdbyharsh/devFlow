type TagProps = {
    _id: string,
    name: string
}

type AuthorProps = {
    _id: string,
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

type ActionResponse<T = null> = {
    success: boolean;
    data?: T;
    error?: { message: string; details?: Record<string, string[]> }
};

type SuccessResponse<T = null> = ActionResponse<T> & { success: ture };
type ErrorResponse = ActionResponse<undefined> & { success: false };

type APIErrorResponse = NextResponse<ErrorResponse>;
type APIResponse<T = null> = NextResponse<SuccessResponse<T> | ErrroResponse>;