import React from 'react'
import Login from './Login'
import {BrowserRouter , Router , Routes, Route} from 'react-router-dom'
import Home from './Home'
import Test1 from './Test1'

const App = () => {
  return (
    <div>
<BrowserRouter>
<Routes>


  <Route path='/' element={<Test1/>}></Route>
  <Route path='/login' element={<Login/>}></Route>

</Routes>




</BrowserRouter>



    </div>
  )
}

export default App