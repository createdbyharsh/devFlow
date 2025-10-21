const ROUTES = {
    HOME: "/",
    SIGN_IN: "/sign-in",
    SIGN_UP: "/sign-up",
    QUESTION: (id: string)=>`/questions/${id}`,
    TAGS: (id: string) => `/tags/${id}`,
    ASK_QUESTION: "/ask-question",
    PROFILE: (id:string)=>`/profile/${id}`
};

export default ROUTES;