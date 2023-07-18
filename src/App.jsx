import { Post } from './Post';
import { Header } from './components/Header';

import './global.css'

export function App() {

  return (
    <div>
      <Header />
      <Post 
        author="Gabriel Gurris"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, aliquam? Beatae soluta in, aliquam ab ad molestias distinctio ducimus quisquam hic, voluptatem et doloremque sunt omnis dignissimos aspernatur quam culpa."
      />
    </div>
  )
}

