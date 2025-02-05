export default function Post({ post, deletePost, onHandlePostView }) {
    return (
        <div className="post">
            <h3 onClick={onHandlePostView} className="post__title">{post.title}</h3>
            <h5 className="post__subtitle">{post.subtitle}</h5>

            <button onClick={deletePost} className="post__button">Delete</button>
        </div>
    )
}