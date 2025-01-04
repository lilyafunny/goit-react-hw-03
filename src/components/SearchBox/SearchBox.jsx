const SearchBox = ({ value, onSearch }) => {
    return (
        <>
            <p>Find contacts by name</p>
            <input type="text"
                value={value}
                onChange={e => onSearch(e.target.value)}
            />
        </>
    )

}

export default SearchBox