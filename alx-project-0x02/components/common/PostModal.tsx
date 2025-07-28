import { useState } from "react";
import { PostModalProps } from "../../interfaces";


const PostModal: React.FC <PostModalProps> = ({isOpen, onClose, onSubmit}) => {

 const [title, setTitle] = useState("");
 const [content, setContent] = useState("");


    return (
        <>
        <form action="" onSubmit={(e) => { e.preventDefault; onSubmit({title, content}); setTitle(""); setContent(""); onClose()}}>
        <label htmlFor="title">title:</label>
        <input type="text" id="title"  name="title" value={title}  onChange={(e) => setTitle(e.target.value)} required/>
        <label htmlFor="content">Content:</label>
        <input type="text"  id="content" name="content" value={content} onChange={(e) => setContent(e.target.value)}/>
        </form>
        </>
    );
}

export default PostModal;