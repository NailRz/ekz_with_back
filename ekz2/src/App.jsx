import { useEffect, useState } from "react";
import "./App.css";
import PostForm from "./assets/components/PostForm";
import PostList from "./assets/components/PostList";

function App() {
	const [posts, setPosts] = useState([]);
	const getData = async () => {
		try {
			const response = await fetch("http://localhost:8080/api/posts", {
				method: "GET",
			});
			const data = await response.json();
			console.log(data);
			setPosts(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	const postData = async ({ title, body }) => {
		try {
			const response = await fetch("http://localhost:8080/api/posts", {
				method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, body }),
			});

			const data = await response.json();
			setPosts((prev) => [...prev, data]);
		} catch (error) {
			console.log(error);
		}
	};

  const deletePost = async ({id}) => {
    
		try {
			const response = await fetch(`http://localhost:8080/api/posts/${id}`, {
				method: "DELETE"
			});
      if (response.ok) {
        // Попробовать преобразовать ответ в JSON только если статус успешен
        const data = await response.json();
        console.log(data);
        setPosts((prev) => [...prev, data]);
      } else {
        // Если статус не успешен, вы можете выбрать другой подход к обработке ответа,
        // в зависимости от требований вашего приложения
        console.log(`Ошибка удаления поста: ${response.statusText}`);
      }
    } catch (error) {
    }
	};

	const createPost = (newPost) => {
    postData({title: newPost.title , body: newPost.body})
	};

	const removePost = (post) => {
    deletePost({ id: post.id })
		setPosts(posts.filter((p) => p.id != post.id));
	};

	return (
		<>
			<PostForm create={createPost}></PostForm>
			<PostList remove={removePost} posts={posts}></PostList>
		</>
	);
}

export default App;
