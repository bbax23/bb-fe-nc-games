import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Reviews from './components/Reviews';
import Categories from './components/Categories';

function App() {
  const [reviewList, setReviewList] = useState([]);
  const [category, setCategory] = useState('');
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <Reviews reviewList={reviewList} setReviewList={setReviewList} />
            }
          ></Route>
          <Route
            path="/categories"
            element={
              <Categories category={category} setCategory={setCategory} />
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
