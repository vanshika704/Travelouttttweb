import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import Searchall from './pages/Searchall';
import Hotels from './pages/Hotels';
import Thingstodo from './pages/Thingstodo';
import Restaurants from './pages/Restaurants';
import Flights from './pages/Flights';



function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<Page1/>} />
        <Route path="/searchall" element={<Searchall/>} />
        <Route path="/hotels" element={<Hotels/>} />
        <Route path="/thingstodo" element={<Thingstodo/>} />
        <Route path="/Restaurants" element={<Restaurants/>} />
        <Route path="/flights" element= {<Flights/>}/>
      </Routes>
    </Router>
  );
}

export default App;