import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

// # Named Exports
export function Post({ author, publishedAt, content }) {
    const publishedDateRange = formatDistanceToNow(publishedAt, {
        locale: ptBR
    });

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

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
            </div>
        </article>
    )
}

// # Default Exports: Permite alterar o nome do comp. na exportação;
//
// function Post() {
//     return <p>Post</p>
// }

// export default Post
