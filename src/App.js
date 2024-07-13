import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
 
function App() {
  return (
    <Router>
      <div>
        <div>
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
