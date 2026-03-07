import { useState } from "react"
import { checkValidity } from "../utils/utils"

function Form ({onSubmit,error=null}) {
    const [searchString,setSearchString] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(searchString)
    }

    const handleChange = (e) => {
        setSearchString(e.target.value)
        checkValidity(e.target)
    }

    return (
        <>
            {error && <p id="error">No IP address or domain matches that value.</p>}
            <form id="searchForm" onSubmit={handleSubmit}>
                <input type="text" id="search" aria-label="Enter an IP address or domain" placeholder="Search for any IP address or domain" value={searchString} onChange={handleChange} />
                <button type="submit" aria-label="Search">
                    <span className="arrow"></span>
                </button>
            </form>
        </>
    )
}

export default Form