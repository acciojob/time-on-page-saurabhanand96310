
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [count, setCount]=useState(0)

  useEffect(()=>{
     const interval=setInterval(()=>{
      setCount(prev=>prev+1)
      
     },1000)
     return ()=> clearInterval(interval);
  },[])

  return (
    <div>
        {/* Do not remove the main div */}
        <p>You\'ve been on this page for {count} seconds.</p>
    </div>
  )
}

export default App
