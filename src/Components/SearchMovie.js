
function SearchMovie({setInput}) {
    
    
    
  return (
    <div>
      <input type='texte' placeholder ="Search" onChange={(e)=>setInput(e.target.value)}/>
    
     
    </div>
  )
}

export default SearchMovie