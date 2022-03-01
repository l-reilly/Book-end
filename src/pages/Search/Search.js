/*import react from 'react'
import {UseFetch} from "../../hooks/useFetch"
import { useState } from "react"
import { getBooks } from "../../api"

function Search() {
    const { data, loading, error } = UseFetch(getBooks);
    const [query, setQuery] = useState('')
    return(
        <div>
            <input placeholder='Title' onChange={event => setQuery(event.target.value)} />
            {
                data.map((book, index) => {
                    <div key={index}>
                    <p>{book.title}</p>
                    <p>{book.author}</p>
                    </div>
                })
            }
        </div>
    )
}
export default Search
*/