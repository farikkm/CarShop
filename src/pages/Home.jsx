import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Posts from "../components/Posts";
import PostForm from "../components/PostForm";

export default function Home() {

    const [posts, setPosts] = useState(() => {
        const savedPosts = localStorage.getItem("posts");
        return savedPosts ? JSON.parse(savedPosts): []
    })

    useEffect(() => {
        localStorage.setItem("posts", JSON.stringify(posts))
    }, [posts]) // Обязательно должен принимать массив

    const navigate = useNavigate()

    const handlePostView = (post, index) => {
        console.log(post);
        navigate(`/post/${index}`, { state: post })
    }

    const addPost = (newPost) => {
        setPosts(() => [newPost, ...posts])
    }
    
    const deletePost = (id) => {
        const filteredPosts = posts.filter((_, postIndex) => postIndex != id)
        setPosts(filteredPosts)
    }

    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <h1 className="title">Posts</h1>

                    <PostForm addPost={addPost}/>
                    <Posts posts={posts} deletePost={deletePost} handlePostView={handlePostView}/>
                </div>
            </div>
        </>
    )
}