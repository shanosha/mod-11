import { useEffect, useState } from "react"
import Form from "./components/Form"
import LocationDetails from "./components/LocationDetails"
import Map from "./components/Map"
import mockData1 from "./utils/mockData1.js"
import mockData2 from "./utils/mockData2.js"

const key = import.meta.env.VITE_API_KEY // Set this value to your API key in a .env file in the root directory of your projecct

const getUserIp = async () => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    const ipAddress = data.ip;

    console.log("User's public IP address is: " + ipAddress);

    return ipAddress;
  } catch (error) {
    console.error("Error fetching IP address:", error);
  }
}

const fetchGeoLocation = async (addressString,domainBoolean=false) => {
  try {

    const useMockData = !true;

    const apiKey = key;
    const address = addressString;
    const isDomain = domainBoolean;
    let url;
    let data;

    if(useMockData){
      data = (address=="24.0.24.106" ? mockData1 : mockData2);
    }
    else{
      url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&${isDomain?"domain":"ipAddress"}=${address}`;
      console.log("URL: ",url);
      const response = await fetch(url);
      console.log("Response: ",response);
      if (!response.ok) {
        throw new Error("API request failed: " + response.status);
      }
      data = await response.json();
    };
    return data;

  } catch (e) {
    console.log(e);
  }
}

function App() {
  const [ipAddress,setIpAddress] = useState(null)
  const [geoData,setGeoData] = useState(null)

  useEffect(()=>{

    const loadData = async () => {
      try {
        if(!ipAddress) {
          const ip = await getUserIp();
          const data = await fetchGeoLocation(ip);
          setGeoData(data);
          console.log("responseData", data);
        }
        else  {
          const data = await fetchGeoLocation(ipAddress);
          setGeoData(data);
          console.log("responseData", data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    loadData();
    
  },[ipAddress])

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
