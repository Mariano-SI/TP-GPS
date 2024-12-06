
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './features/General/Components/Navbar/Navbar';
import Home from './features/Home/Pages/Home/Home';
import Faq from './features/FAQ/Pages/Faq/Faq';
import ContactPage from './features/Contact/Pages/ContactPage/ContactPage';
function App() {
  return (
    <Router>
        <Navbar/>
        <div className="container">
          <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/faq" element={<Faq/>} />
            <Route path="/contact" element={<ContactPage/>} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;