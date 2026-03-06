import { useState } from "react"
import { getHostType } from "../utils/updateDom"

function Form ({onSubmit}) {
    const [searchString,setSearchString] = useState("");

    function checkValidity(inputElement) {
        if (inputElement.value === "") {
            inputElement.setCustomValidity("Please enter an IP address or domain");
            return false;
        }
        else if (inputElement.value !== "" && getHostType(inputElement.value) === "invalid" ) {
            inputElement.setCustomValidity("Please enter a valid IP address or domain");
            return false;
        }
        else {
            inputElement.setCustomValidity("");
            return true;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(searchString)
    }

    const handleChange = (e) => {
        setSearchString(e.target.value)
        checkValidity(e.target)
    }

    return (
        <form id="searchForm" onSubmit={handleSubmit}>
            <input type="text" id="search" aria-label="Enter an IP address or domain" placeholder="Search for any IP address or domain" value={searchString} onChange={handleChange} />
            <button type="submit" aria-label="Search">
                <span className="arrow"></span>
            </button>
        </form>
    )
}

export default Form