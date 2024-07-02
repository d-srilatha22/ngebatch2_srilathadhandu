import { useEffect, useState } from "react";
import "./App.css";
import Catalog from "./Component/Catalog";



const App = () => {
  // const [value, setValue] = useState('')

  // useEffect(() => {
  //   // create an interval on mount
  //   const timer = setInterval(() => {
  //     console.log('time is up')
  //   }, 1000)

  //   // clear interval task on unmount
  //   // uncomment clearInterval to correctly clean up the interval
  //   return () => {
  //     // clearInterval(timer)
  //   }
  // }, [value])

  return (
    <div className="app">
      <Catalog />
    </div>
    
  );
};

export default App;
