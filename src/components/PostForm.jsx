import { useState } from "react";

export default function PostForm({ addPost }) {
    const [title, setTitle] = useState("")
    const [subtitle, setSubtitle] = useState("")
    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        // Предотврощение добавления пустых постов
        if (!title.trim() || !subtitle.trim() || !text.trim()) return;

        const newPost = {title, subtitle, text}

        addPost(newPost) 

        setTitle("");
        setSubtitle("");
        setText("");
    }

    return (
        <form className="form form-posts" action="#" onSubmit={handleSubmit}>
            <input className="form-posts__title" required type="text" value={title} name="title" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
            <input className="form-posts__subtitle" required type="text" value={subtitle} name="subtitle" placeholder="Subtitle" onChange={(e) => setSubtitle(e.target.value)} />
            <textarea rows="4" cols="50" className="form-posts__text" required type="text" value={text} name="text" placeholder="Text" onChange={(e) => setText(e.target.value)} />

            <button type="submit">Add</button>
        </form>
    )
}