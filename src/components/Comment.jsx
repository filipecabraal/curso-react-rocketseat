import { ThumbsUp, Trash } from '@phosphor-icons/react';

import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

const dateTime = new Date();
const avatarImgUrl = "https://github.com/filipecabraal.png";

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    return (
       <div className={styles.comment}>
            <Avatar hasBorder={false} src={avatarImgUrl} />

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
                    <button onClick={() => setLikeCount(likeCount + 1)}>
                        <ThumbsUp size={20} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
       </div>
    );
}
