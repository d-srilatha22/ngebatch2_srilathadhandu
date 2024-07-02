import { useEffect, useState } from 'react'
import './App.css'
import TimeClick from './Component/TimeClick'
import FetchCall from './Component/FetchCall'
import Catalog from './Component/Catalog'
import CategoryJson from './Component/CategoryJson'

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
    <div className='app'>
      {/* <button onClick={() => setValue(curr => curr += 'a')} >update state</button> */}
      {/* <p>{value}</p>
      <TimeClick/>*/
      <FetchCall/> }
      <Catalog/>
      {/* <CategoryJson/> */}
    </div>
  )
}

export default App
