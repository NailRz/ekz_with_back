import { useState } from 'react'
import './App.css'
import PostForm from './assets/components/postForm';
import PostList from './assets/components/PostList';

function App() {
  const [posts, setPosts] = useState([
    
  ]);
  const createPost = (newPost) => { 
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id != post.id))
  }

  return (
    
    <>
    <PostForm create = {createPost}></PostForm>
    <PostList remove = {removePost} posts = {posts}></PostList>

    </>


  )
}

export default App
