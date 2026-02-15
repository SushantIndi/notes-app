import NoteCard from "./NoteCard";

function NoteList({ notes }) {
    return (
        <div className="notes-grid">
            {notes.map((note) => (
                <NoteCard key={note.id} note={note} />
            ))}
        </div>
    );
}

export default NoteList;
