import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Posts from "../components/Posts";
import PostForm from "../components/PostForm";

export default function Home() {

    const [posts, setPosts] = useState([
        {
            title: 'Title 1',
            subtitle: 'Subtitle 1',
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            title: 'Title 2',
            subtitle: 'Subtitle 2',
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            title: 'Title 3',
            subtitle: 'Subtitle 3',
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
    ])

    const navigate = useNavigate()

    const handlePostView = (post, index) => {
        navigate(`/post/${index}`, { state: { post } })
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