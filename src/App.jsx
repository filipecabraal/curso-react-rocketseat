// Arquivos com extenção ".jsx" contém código Javascript + HTML5;

import { Post } from './Post';
import { Header } from './components/Header';
import './global.css';

export function App() {
  return (
    // Multiplos componentes precisam de uma tag (elemento html) em volta;
    <>
      <Header />

      <Post 
        author="Cabralzinho"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
      />
      <Post 
        author="Victorinha"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
      />
    </>
  )
}

// Lorem ipsum dolor, sit amet consectetur adipisicing elit. 

