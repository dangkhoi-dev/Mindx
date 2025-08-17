import React, { useState, useEffect } from 'react'
import Card from '../Card'
import './index.css'

const List = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [listDog, setListDog] = useState([])
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [filteredDogs, setFilteredDogs] = useState([])

  const handleSearch = (e) => {
    const searchTerm = e.target.value
    setSearch(searchTerm)
    
    if (searchTerm.trim() === '') {
      setFilteredDogs(listDog)
    } else {
      const filtered = listDog.filter(dog => 
        dog.attributes.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredDogs(filtered)
    }
  }

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://dogapi.dog/api/v2/breeds?page[number]=${page}`).then(
      data => data.json().then(dataJson => {
        console.log(dataJson)
        setListDog(dataJson.data)
        setFilteredDogs(dataJson.data)
        setIsLoading(false)
      })
    )
  }, [page])
  
  return (
    <div className="Outer">
      Chao mung
      {isLoading ? <div>Loading...</div> : 
      <div>
        <div className="searching">
          <input 
            type="text" 
            placeholder="Search dogs..." 
            value={search} 
            onChange={handleSearch} 
          />
        </div>
        <div className="dog-list">
        {filteredDogs.map(dog => (
          <Card key={dog.id} dog={dog} />
        ))}
        </div>
        <div className="page">
          {page > 1 && <button onClick={() => setPage(page - 1)}>Previous</button>}
          <p>Page: {page}</p>
          {page < 29 && <button onClick={() => setPage(page + 1)}>Next</button>}
        </div>
      </div>}
    </div>
  )
}

export default List