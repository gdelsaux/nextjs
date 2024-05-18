import { useState } from 'react';
import './App.css'
import PostList from './components/PostList'
import MainHeader from './components/MainHeader'

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const onCreatePost = () => {
    setModalIsVisible(true);
  }

  const hideModal = () => {
    setModalIsVisible(false)
  }

  return (
    <>
      <MainHeader onCreatePost={onCreatePost} />
      <main>
        <PostList isPosting={modalIsVisible} hideModal={hideModal}/>
      </main>
    </>
  )
}

export default App
