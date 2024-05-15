import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
import { PostType } from './interfaces/Post.interface'

import postsMock from './mocks/posts.json'

import './global.css';
import styles from './App.module.css';

const posts: PostType[] = postsMock;

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id} 
                post={post}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
