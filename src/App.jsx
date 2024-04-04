import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import {Home, Baseline, Boxes, Destination, Items, Services, Summary} from "./pages"
import store from './store/store';
import { Provider } from 'react-redux'


function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/baseline' element={<Baseline/>} />
          <Route exact path='/destination' element={<Destination/>} />
          <Route exact path='/items' element={<Items/>} />
          <Route exact path='/boxes' element={<Boxes/>} />
          <Route exact path='/services' element={<Services/>} />
          <Route exact path='/summary' element={<Summary/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
