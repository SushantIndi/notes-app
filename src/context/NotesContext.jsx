import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useLocalStorage("notes", []);

    const addNote = (note) => {
        setNotes([note, ...notes]);
    };

    const deleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    return (
        <NotesContext.Provider value={{ notes, addNote, deleteNote }}>
            {children}
        </NotesContext.Provider>
    );
};

export const useNotes = () => useContext(NotesContext);
