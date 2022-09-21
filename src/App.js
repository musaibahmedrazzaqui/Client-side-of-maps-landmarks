
import './App.css';
import Form from './components/Form'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from './components/Map';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path ="map" element = {<Map />}/>
          <Route path="nextStep" element={<Form />} />

          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
