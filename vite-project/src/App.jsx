import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  })

  useEffect(()=>{
    const template=async()=>{
   
      const contractAddres="";
      const contractABI="";

      const {ethereum}=window;
      const account = await ethereum.request({
        method:"eth_requestAccounts"
      })

      const provider = new ethers.providers.Web3Provider(ethereum);
      

    }
    template();
  },[])

  return (
    <>
      
    </>
  )
}

export default App
