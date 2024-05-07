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

    const [newCommentText, setNewCommentText] = useState('');
    function handleNewCommentChange() {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    const [comments, setComments] = useState([
        'Muito bom!!! Parabéns!!!'
    ]);
    function handleCreateNewComment() {
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function deleteComment(commentToDelete) {
        const newComments = comments.filter(item => {
            return item !== commentToDelete
        });

        setComments(newComments);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

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
