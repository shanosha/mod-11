import { useEffect, useState } from "react"
import Form from "./components/Form"
import LocationDetails from "./components/LocationDetails"
import Map from "./components/Map"
import { useFetch } from "./hooks/useFetch.js"
import { getHostType } from "./utils/updateDom"

const key = import.meta.env.VITE_API_KEY // Set this value to your API key in a .env file in the root directory of your projecct

function App() {
  const [ipAddress,setIpAddress] = useState(null)
  const [url,setUrl] = useState(null)
  const {data: userIp} = useFetch("https://api.ipify.org?format=json")
  const {data: geoData} = useFetch(url)

  useEffect(()=>{

    if(ipAddress) {
      setUrl(`https://geo.ipify.org/api/v2/country,city?apiKey=${key}&${getHostType(ipAddress)?"domain":"ipAddress"}=${ipAddress}`)
    }
    else if(userIp) {
      setUrl(`https://geo.ipify.org/api/v2/country,city?apiKey=${key}&${getHostType(userIp.ip)?"domain":"ipAddress"}=${userIp.ip}`)
    }
    
  },[userIp,ipAddress])

  return (
    <>
      <main>
          <section id="form">
              <h1>IP Address Tracker</h1>
              <Form onSubmit={setIpAddress} />
              <LocationDetails data={geoData} />
          </section>
          <Map data={geoData} />
      </main>
    </>
  )
}

export default App
