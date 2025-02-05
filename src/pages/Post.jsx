import { Link, useParams, useLocation } from "react-router-dom";

export default function Post() {
    const { id } = useParams()
    const location = useLocation()
    const post = location.state

    if (!post) {
        return <h2>Page not found! {id}</h2>
    }

    return (
        <>
            <h1 style={{
                textAlign: 'center',
                margin: '10px 0'
            }}>Post {id}</h1>
            <div className="post post-page_item">
                <h3 className="post__title">{post.title}</h3>
                <h5 className="post__subtitle">{post.subtitle}</h5>
                <p className="post__text">{post.text}</p>
            </div>

            <Link style={{
                display: 'inline-block',
                color: 'white',
                marginLeft: '20px',
                marginTop: '10px'
            }} to="/">Back To Home</Link>
        </>
    )
}