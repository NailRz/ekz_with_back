import { useState } from 'react'
import './App.css'
import PostForm from './assets/components/PostForm';
import PostList from './assets/components/PostList';

function App() {
  const [posts, setPosts] = useState([
    
  ]);
  const getData = async () => {
    try {
      const response = await fetch("http://localhost:8080/", {method:'GET'})

      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  getData()
  
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
