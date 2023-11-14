import '../App.css'
import {Routes, Route} from "react-router-dom"
import Homepage from "../pages/Homepage.jsx"
import FetchUsers from '../pages/Fetch'
import FormPage from '../pages/Form'

function App() {
  return(
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/users" element={<FetchUsers/>}/>
      <Route path="/create" element={<FormPage/>}/>
    </Routes>
  )
}

export default App
