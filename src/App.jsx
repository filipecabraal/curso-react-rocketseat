// Arquivos com extenção ".jsx" contém código Javascript + HTML5;

import { Post } from './Post';

export function App() {
  return (
    // Multiplos componentes precisam de uma tag (elemento html) em volta;
    <>
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

