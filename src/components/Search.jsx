const Search = ({ search, setSearch }) => {
  return (
    <div>
        <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="what are you looking for?"
              className="border-transparent outline-none bg-slate-100 rounded"
            />
    </div>
    
  )
}

export default Search