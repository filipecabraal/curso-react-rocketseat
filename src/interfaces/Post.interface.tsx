interface Author {
    avatarUrl: string;
    name: string;
    role: string;
}

interface Content {
    type: string;
    content: string;
}

interface PostType {
    id?: number;
    author: Author;
    content: Content[];
    publishedAt: string
}

export interface PostProps {
    post: PostType
}