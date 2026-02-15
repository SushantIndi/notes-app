function SearchBar({ searchText, setSearchText }) {
    return (
        <div className="card" style={{ marginTop: "20px" }}>
            <input
                type="text"
                placeholder="Search notes..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;
