import { useState } from 'react';

import { ThumbsUp, Trash } from '@phosphor-icons/react';

import { Avatar } from './Avatar';

import styles from './Comment.module.css';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

const dateTime = new Date().toISOString();
const avatarImgUrl = "https://github.com/filipecabraal.png";

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeCount() {
        setLikeCount((state) => {
            return state + 1
        });
    }

    return (
       <div className={styles.comment}>
            <Avatar hasBorder={false} src={avatarImgUrl} alt="" />

            <div className={styles.commentBox}> 
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Filipe Cabral</strong>
                            <time title={dateTime} dateTime={dateTime}>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar Comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeCount}>
                        <ThumbsUp size={20} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
       </div>
    );
}
