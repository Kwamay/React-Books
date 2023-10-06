import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Nav from './component/Nav';
import Books from './component/Books';
import Categories from './component/Categories';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <div>
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
