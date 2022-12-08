import { BrowserRouter, Routes, Route } from "react-router-dom";
import Site from './components/Site'
import Academy from './components/Academy'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/xtrude" element={ <Site /> } />
        <Route path="/xtrude/akademia" element={ <Academy /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
