// Arquivos com extenção ".jsx" contém código Javascript + HTML5;

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './Post';

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
          <Post 
            author="Cabralzinho"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          />
          <Post 
            author="Victorinha"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          />
        </main>
      </div>
    </>
  )
}

// Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
