import { useState } from "react";
import { useNotes } from "../context/NotesContext";

function NoteEditor() {
    const { addNote } = useNotes();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState("");

    const handleAdd = () => {
        if (!title && !content) return;

        const newNote = {
            id: Date.now(),
            title,
            content,
            tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
        };

        addNote(newNote);
        setTitle("");
        setContent("");
        setTags("");
    };

    return (
        <div className="card">
            <input
                type="text"
                placeholder="Note title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
                placeholder="Write your note..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

            <input
                type="text"
                placeholder="Tags (comma separated)"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
            />

            <button onClick={handleAdd}>Add Note</button>
        </div>
    );
}

export default NoteEditor;
