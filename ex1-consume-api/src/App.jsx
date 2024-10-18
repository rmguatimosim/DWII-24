import './App.css'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react';
import Address from './components/Address';


function App(){
  const [address, setAddress] = useState({});

  const getAddress = async (url) => {
    const {data} = await axios.get(url);
    if(data.address){
      setAddress(data.address)
      //console.log(data.address.town)
    }
  }

  useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
      //console.log(position)
      const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
      getAddress(url);
    })
  }, [])


  return(
    <>
       
      <Address address={address} />
    
    </>
  )

}

export default App;