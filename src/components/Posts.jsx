import Post from "./PostItem";

export default function Posts({posts = [], deletePost, handlePostView}) {

    return (
        <div className="posts">
            {posts.map((post, index) => (
                <Post 
                    key={index} 
                    post={post} 
                    deletePost={() => deletePost(index)} 
                    onHandlePostView={() => handlePostView(post, index)}
                />
            ))}
        </div>
    )
}