import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1';



function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<Page1/>} />
        {/* <Route path="/about" element={<Page2 />} />
        <Route path="/skills" element={<Page3 />} />
        <Route path="/achievements" element={<Page4 />} />
        <Route path="/education" element={<Page5 />} />
        <Route path="/work" element={<Page6 />} />
        */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;