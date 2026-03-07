// Component that displays the details for a given IP address
function LocationDetails ({data}) {
    return (
        <>
            {data && 
            <ul>
                {console.log(data)}
                <li>
                    <h2>IP Address</h2>
                    <p id="ip">{data.ip}</p>
                </li>
                <li>
                    <h2>Location</h2>
                    <p id="location">{data.location.city}</p>
                </li>
                <li>
                    <h2>Timezone</h2>
                    <p id="timezone">{data.location.timezone + " UTC"}</p>
                </li>
                <li>
                    <h2>ISP</h2>
                    <p id="isp">{data.isp}</p>
                </li>
            </ul>}
        </>
    )
}

export default LocationDetails