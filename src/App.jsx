import './App.css'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


import Header from './Component/Header/Header'
import Products from './Component/Products/Products'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Products></Products>
      <ToastContainer />
    </div>
  )
}

export default App
