import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Reviews from './components/Reviews';
import Category from './components/Category';
import Categories from './components/Categories';

function App() {
  const [category, setCategory] = useState('');
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav category={category} setCategory={setCategory} />
        <Categories category={category} setCategory={setCategory} />
        <Routes>
          <Route
            path="/"
            element={<Reviews category={category} setCategory={setCategory} />}
          ></Route>
          <Route
            path="/:category_name"
            element={<Category category={category} />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
