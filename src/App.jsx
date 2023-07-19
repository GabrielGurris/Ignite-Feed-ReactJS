import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css'

export function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Gabriel Gurris"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, aliquam? Beatae soluta in, aliquam ab ad molestias distinctio ducimus quisquam hic, voluptatem et doloremque sunt omnis dignissimos aspernatur quam culpa."
          />
          <Post 
            author="Diego Fernandes"
            content="Um novo post"
          />
        </main>
      </div>
    </div>
  )
}

