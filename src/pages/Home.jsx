import { useState } from "react";
import { useNotes } from "../context/NotesContext";
import Header from "../components/Header";
import NoteEditor from "../components/NoteEditor";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import TagFilter from "../components/TagFilter";

function Home() {
    const { notes } = useNotes();
    const [searchText, setSearchText] = useState("");
    const [selectedTag, setSelectedTag] = useState("");

    const allTags = [...new Set(notes.flatMap((n) => n.tags || []))];

    const filteredNotes = notes.filter((note) => {
        const matchesSearch =
            note.title.toLowerCase().includes(searchText.toLowerCase()) ||
            note.content.toLowerCase().includes(searchText.toLowerCase());

        const matchesTag =
            !selectedTag || note.tags?.includes(selectedTag);

        return matchesSearch && matchesTag;
    });

    return (
        <div className="app-container">
            <Header />
            <NoteEditor />
            <SearchBar
                searchText={searchText}
                setSearchText={setSearchText}
            />
            <TagFilter
                tags={allTags}
                selectedTag={selectedTag}
                setSelectedTag={setSelectedTag}
            />
            <NoteList notes={filteredNotes} />
        </div>
    );
}

export default Home;
