

const SearchBar = ({label, value, onChange}) => {
    return (
        <div className="search-bar">
            <label>{label}</label>
            <input
                type="text"
                value={value}
                onChange={
                    (e) => {
                        onChange(e.target.value);
                    }
                }
                readOnly
            />
        </div>
    )
}

export default SearchBar;