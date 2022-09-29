import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Reviews from './components/Reviews';
import Review from './components/SingleReview';
import Errorpage from './components/Errorpage';

function App() {
  const [category, setCategory] = useState('');
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Reviews category={category} setCategory={setCategory} />}
          ></Route>
          <Route
            path="/:category_name"
            element={<Reviews category={category} setCategory={setCategory} />}
          ></Route>
          <Route path="/reviews/:review_id" element={<Review />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
