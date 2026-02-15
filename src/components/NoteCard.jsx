import { useNotes } from "../context/NotesContext";

function NoteCard({ note }) {
    const { deleteNote } = useNotes();

    return (
        <div className="card">
            <div className="note-title">{note.title}</div>
            <div className="note-content">{note.content}</div>

            <div style={{ marginTop: "10px", display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {note.tags?.map((tag) => (
                    <span
                        key={tag}
                        style={{
                            background: "#2a2f40",
                            padding: "4px 8px",
                            borderRadius: "6px",
                            fontSize: "12px",
                        }}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div className="note-actions">
                <button
                    className="delete-btn"
                    onClick={() => deleteNote(note.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default NoteCard;
