function TagFilter({ tags, selectedTag, setSelectedTag }) {
    return (
        <div className="card" style={{ marginTop: "20px" }}>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <button
                    onClick={() => setSelectedTag("")}
                    style={{
                        background: selectedTag === "" ? "#6c63ff" : "#2a2f40",
                    }}
                >
                    All
                </button>

                {tags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        style={{
                            background:
                                selectedTag === tag ? "#6c63ff" : "#2a2f40",
                        }}
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default TagFilter;
