import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

const avatarImgUrl = "https://github.com/filipecabraal.png";
const dateTime = new Date();

// # Named Exports
export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={avatarImgUrl} />
                    <div className={styles.authorInfo}>
                        <strong>Filipe Cabral</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title={dateTime} dateTime={dateTime}>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Lorem ipsum!</p>
                <p>Eius at facere iusto odio illo? Rem asperiores veniam laborum quos suscipit quia iusto 
                quidem consectetur dolores temporibus dolorum praesentium, aliquam quasi!</p>
                <p><a href="https://github.com/filipecabraal">github.com/filipecabraal</a></p>
                <p><a href="">#novoprojeto</a> <a href="">#nlw</a> <a href="">#rocketseat</a></p>
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
