import styles from './Post.module.css';

const imgUrl = "https://avatars.githubusercontent.com/u/25158348?v=4";
const dateTime = new Date();

// # Named Exports
export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src={imgUrl} />
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
                <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
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
