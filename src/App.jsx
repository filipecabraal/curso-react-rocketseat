// Arquivos com extenção ".jsx" contém código Javascript + HTML5;

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import postsMock from './mocks/posts.json'

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    // Multiplos componentes precisam de uma tag (elemento html) em volta;
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {postsMock.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
