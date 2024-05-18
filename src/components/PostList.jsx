import { useState, useEffect } from "react";
import styles from "./PostList.module.css"
import Post from "./Post"
import NewPost from "./NewPost"
import Modal from "./Modal";

function PostList({isPosting, hideModal}) {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);

      const response = await fetch('http://localhost:8080/posts');
      const responseData = await response.json();
      setPosts(responseData.posts);
      setIsFetching(false);
    }

    fetchPosts();
  }, [])

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(resp => resp.json())
    .then(data => setPosts(prev => [data.posts, ...prev]))
  }

  return (
    <>
      {isPosting &&
        <Modal hideModal={hideModal} >
          <NewPost 
            onCancel={hideModal}
            onAddpost={addPostHandler}
          />
        </Modal>
      }
      {!isFetching && posts.length > 0 && (
        <ul className={styles.posts}>
          {
            posts.map((post, i) => (
              <Post key={i} author={post.author} body={post.body} />
            ))
          }
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{textAlign: 'center', color: 'white'}}>
          <h2>There are no posts yet</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isFetching && <p>Loading....</p>}
    </>
  )
}

export default PostList