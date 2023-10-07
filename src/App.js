import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Nav from './component/Nav';
import BookList from './component/BookList';
import Categories from './component/Categories';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <div>
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
