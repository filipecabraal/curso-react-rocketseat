import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useState } from 'react';

import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post({ author, publishedAt, content }) {

    const publishedDateRange = formatDistanceToNow(publishedAt, {
        locale: ptBR
    });

    const [comments, setComments] = useState([
        'Muito bom!!! Parabéns!!!'
    ]);
    function handleCreateNewComment() {
        event.preventDefault();

        setComments([...comments, comments.length++])
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedAt} dateTime={publishedAt}>
                    Publicado há {publishedDateRange}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(item => {
                    return item.type === "paragraph" ? 
                        <p>{item.content}</p> : 
                        <p><a href={item.content}>{item.content}</a></p>
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(item => {
                    return <Comment content={item} />
                })}
            </div>
        </article>
    )
}
