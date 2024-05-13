import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Comment } from './Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css';

interface Author {
    avatarUrl: string;
    name: string;
    role: string;
}

interface Content {
    type: string;
    content: string;
}

export interface PostType {
    id?: number;
    author: Author;
    content: Content[];
    publishedAt: string
}

interface PostProps {
    post: PostType
}

export function Post({ post }: PostProps) {

    const publishedDateRange = formatDistanceToNow(post.publishedAt, {
        locale: ptBR
    });
    
    const [newCommentText, setNewCommentText] = useState('');
    
    const [comments, setComments] = useState([
        'Muito bom!!! Parabéns!!!'
    ]);

    const isNewCommentEmpty = newCommentText.length === 0;

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function deleteComment(commentToDelete: string) {
        const newComments = comments.filter(item => {
            return item !== commentToDelete
        });

        setComments(newComments);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={post.publishedAt} dateTime={post.publishedAt}>
                    Publicado há {publishedDateRange}
                </time>
            </header>

            <div className={styles.content}>
                {post.content.map(item => {
                    return item.type === "paragraph" ? 
                        <p key={item.content}>{item.content}</p> : 
                        <p key={item.content}><a href={item.content}>{item.content}</a></p>
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer> 
                    <button type='submit' disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(item => {
                    return (
                        <Comment 
                            key={item} 
                            content={item} 
                            onDeleteComment={deleteComment} 
                        />
                    )
                })}
            </div>
        </article>
    )
}
