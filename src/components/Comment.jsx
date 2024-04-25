import styles from './Comment.module.css';
import { ThumbsUp, Trash } from '@phosphor-icons/react';

const dateTime = new Date();

export function Comment() {
    return (
       <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/25158348?v=4" />

            <div className={styles.commentBox}> 
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Filipe Cabral</strong>
                            <time title={dateTime} dateTime={dateTime}>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar Comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom!!! Parabéns!!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
       </div>
    );
}
