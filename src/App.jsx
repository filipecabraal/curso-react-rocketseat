// Arquivos com extenção ".jsx" contém código Javascript + HTML5;

import { Post } from './Post';

export function App() {
  return (
    // Multiplos componentes precisam de uma tag (elemento html) em volta;
    <>
      <Post />
      <Post />
      <Post />
      <Post />
    </>
  )
}
